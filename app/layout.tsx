import type { Metadata } from "next";
import Link from "next/link";
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

const siteLinks = [
  { href: "/", label: "搬入経路チェッカー" },
  { href: "/guide", label: "ドアサイズガイド" },
  { href: "/guide/moving-checklist", label: "搬入前チェックリスト" },
  { href: "/faq", label: "よくある質問" },
  { href: "/about", label: "このサイトについて" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <nav className="site-nav wrap">
          <ul>
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className="site-nav-copy">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </nav>
      </body>
    </html>
  );
}
