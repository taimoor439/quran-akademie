<?php
/**
 * send-mail.php — form mail handler for Online Quran (onlinekoran.de).
 *
 * Receives JSON POSTs from the site's forms (hero trial form, /free-trial,
 * /contact) and forwards them by email to the academy inbox via PHP mail().
 * No secrets or credentials are needed — mail() uses the server's own
 * sendmail on Hostinger.
 *
 * Endpoint:  POST /send-mail.php            (live, onlinekoran.de)
 *            POST /quran-akademie/send-mail.php (GitHub Pages preview —
 *            CANNOT execute PHP; GitHub Pages serves this file as plain
 *            text, so preview POSTs fail and the forms fall back to the
 *            "email us directly" message. That is expected.)
 *
 * Request (JSON body):
 *   form     "trial" | "contact"            (required)
 *   name     parent / sender name           (required)
 *   email    sender email                   (required, must be a valid address)
 *   phone    WhatsApp / phone number        (trial; optional)
 *   course   course name                    (trial; required)
 *   slot     preferred time slot            (trial; required)
 *   message  free-text message              (contact; required)
 *   subject  contact subject label          (contact; optional)
 *   childName, childAge, language           (trial; optional extras from /free-trial)
 *   website  honeypot — must stay empty     (bots fill it; silently dropped)
 *
 * Response (application/json):
 *   200 {ok:true}                            mail sent (or honeypot hit)
 *   400 {ok:false, error:"validation_failed"}
 *   405 {ok:false, error:"method_not_allowed"}
 *   200 {ok:false, error:"send_failed"}      mail() returned false
 */

declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");

const RECIPIENT = "contact@onlinekoran.de";
const FROM = "noreply@onlinekoran.de";

/** Send a JSON response and stop. */
function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

/** Trim a string field and cap its length (empty string for anything else). */
function clean($value, int $max): string
{
    if (!is_string($value)) {
        return "";
    }
    $value = trim($value);
    if (mb_strlen($value) > $max) {
        $value = mb_substr($value, 0, $max);
    }
    return $value;
}

/**
 * Strip CR/LF (raw and URL-encoded) from any value that goes into a mail
 * header — header-injection protection.
 */
function headerSafe(string $value): string
{
    return str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], "", $value);
}

// --- Method: POST only ------------------------------------------------------
if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
    respond(405, ["ok" => false, "error" => "method_not_allowed"]);
}

// --- Parse JSON body --------------------------------------------------------
$raw = file_get_contents("php://input");
$data = json_decode($raw === false ? "" : $raw, true);
if (!is_array($data)) {
    respond(400, ["ok" => false, "error" => "validation_failed"]);
}

// --- Honeypot: silently pretend success, send nothing -----------------------
if (clean($data["website"] ?? null, 500) !== "") {
    respond(200, ["ok" => true]);
}

// --- Fields -----------------------------------------------------------------
$form    = clean($data["form"] ?? null, 20);
$name    = clean($data["name"] ?? null, 500);
$email   = clean($data["email"] ?? null, 500);
$phone   = clean($data["phone"] ?? null, 500);
$course  = clean($data["course"] ?? null, 500);
$slot    = clean($data["slot"] ?? null, 500);
$message = clean($data["message"] ?? null, 2000);
$subject = clean($data["subject"] ?? null, 500);
// Optional extras from the full /free-trial form.
$childName = clean($data["childName"] ?? null, 500);
$childAge  = clean($data["childAge"] ?? null, 10);
$language  = clean($data["language"] ?? null, 500);

// --- Validate ---------------------------------------------------------------
if ($form !== "trial" && $form !== "contact") {
    respond(400, ["ok" => false, "error" => "validation_failed"]);
}
if ($name === "" || $email === "" || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(400, ["ok" => false, "error" => "validation_failed"]);
}
if ($form === "trial" && ($course === "" || $slot === "")) {
    respond(400, ["ok" => false, "error" => "validation_failed"]);
}
if ($form === "contact" && $message === "") {
    respond(400, ["ok" => false, "error" => "validation_failed"]);
}

// --- Compose the email ------------------------------------------------------
if ($form === "trial") {
    $subjectLine = "New free trial booking — Online Quran";
    $lines = [
        "Form: Free trial booking",
        "Name: " . $name,
        "Email: " . $email,
        "Phone / WhatsApp: " . ($phone !== "" ? $phone : "—"),
        "Course: " . $course,
        "Preferred slot: " . $slot,
    ];
    if ($childName !== "") {
        $lines[] = "Child's name: " . $childName;
    }
    if ($childAge !== "") {
        $lines[] = "Child's age: " . $childAge;
    }
    if ($language !== "") {
        $lines[] = "Preferred language: " . $language;
    }
    if ($message !== "") {
        $lines[] = "Notes: " . $message;
    }
} else {
    $subjectLine = "New contact message — Online Quran";
    $lines = [
        "Form: Contact message",
        "Name: " . $name,
        "Email: " . $email,
    ];
    if ($subject !== "") {
        $lines[] = "Subject: " . $subject;
    }
    $lines[] = "Message: " . $message;
}
$body = implode("\n", $lines) . "\n";

// Encode the (non-ASCII) subject when mbstring is available.
if (function_exists("mb_encode_mimeheader")) {
    $subjectLine = mb_encode_mimeheader($subjectLine, "UTF-8", "Q");
}

$headers = "From: " . headerSafe(FROM) . "\r\n"
    . "Reply-To: " . headerSafe($email) . "\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "X-Mailer: Online Quran website form";

// --- Send -------------------------------------------------------------------
$sent = mail(RECIPIENT, $subjectLine, $body, $headers);

if ($sent) {
    respond(200, ["ok" => true]);
}
respond(200, ["ok" => false, "error" => "send_failed"]);
