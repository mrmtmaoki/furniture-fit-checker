import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "家具のサイズと玄関・ドア・廊下の寸法を入力するだけで、まっすぐ通るか、斜めにすれば通るかを判定します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
