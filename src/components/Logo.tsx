import Link from "next/link";
import { assetPath } from "@/lib/asset";

export default function Logo({
  dark = false,
  height = 44,
  className = "",
}: {
  dark?: boolean;
  /** Logo height in px; width scales automatically. */
  height?: number;
  className?: string;
}) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <img
        src={assetPath(
          dark ? "/logo-horizontal-dark.svg" : "/logo-horizontal.svg"
        )}
        alt="Online Quran"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
