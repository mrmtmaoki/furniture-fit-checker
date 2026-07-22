import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/site";

const title = "お問い合わせ";
const description = "家具 搬入チェッカーへのご質問・ご意見・不具合報告はこちらのフォームからお願いします。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
  },
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ お問い合わせ
      </p>

      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect x="18" y="20" width="26" height="16" fill="#D9A62E" transform="rotate(35 31 28)" />
        </svg>
        <div>
          <p className="eyebrow">Contact</p>
          <h1>お問い合わせ</h1>
          <p>ご質問・ご意見・不具合報告など、お気軽にお送りください。</p>
        </div>
      </div>

      <div className="card">
        <h2>お問い合わせフォーム</h2>
        <p className="sub">
          いただいた内容は、お問い合わせへの回答以外の目的では利用しません。返信をご希望の場合は、メールアドレスをご記入ください。
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact/thanks"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="honeypot-field">
            <label>
              入力しないでください
              <input name="bot-field" />
            </label>
          </p>

          <div className="form-field">
            <label htmlFor="name">お名前</label>
            <input type="text" id="name" name="name" placeholder="山田 太郎" />
          </div>

          <div className="form-field">
            <label htmlFor="email">メールアドレス（返信をご希望の場合）</label>
            <input type="email" id="email" name="email" placeholder="example@example.com" />
          </div>

          <div className="form-field">
            <label htmlFor="message">お問い合わせ内容</label>
            <textarea id="message" name="message" required placeholder="ご質問・ご意見・不具合報告など" />
          </div>

          <button type="submit" className="btn-primary">
            送信する
          </button>
        </form>
      </div>

      <footer>
        送信いただいた内容によっては、返信までお時間をいただく場合や、返信できない場合があります。あらかじめご了承ください。
      </footer>
    </div>
  );
}
