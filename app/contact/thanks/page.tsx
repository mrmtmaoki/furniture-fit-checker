import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../../lib/site";

const title = "送信完了";
const description = "お問い合わせを受け付けました。";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_URL}/contact/thanks`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/contact/thanks`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
  },
};

export default function ContactThanksPage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ お問い合わせ ／ 送信完了
      </p>

      <div className="card">
        <h2>お問い合わせを受け付けました</h2>
        <p className="sub">
          ご連絡いただきありがとうございます。内容を確認のうえ、必要に応じてご記入いただいたメールアドレス宛にご返信いたします。
        </p>
        <Link href="/" className="cta-link">
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
