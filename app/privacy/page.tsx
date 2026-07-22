import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/site";

const title = "プライバシーポリシー";
const description =
  "家具 搬入チェッカーにおける個人情報の取り扱い、Cookieの利用、広告配信について説明するプライバシーポリシーです。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ プライバシーポリシー
      </p>

      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect x="18" y="20" width="26" height="16" fill="#D9A62E" transform="rotate(35 31 28)" />
        </svg>
        <div>
          <p className="eyebrow">Privacy Policy</p>
          <h1>プライバシーポリシー</h1>
          <p>
            {SITE_NAME}（以下「当サイト」）における、個人情報およびCookie等の取り扱いについて説明します。
          </p>
        </div>
      </div>

      <div className="card article">
        <h2>入力データについて</h2>
        <p>
          当サイトの搬入経路チェッカーに入力された家具・開口部のサイズ等の数値は、お使いのブラウザ内で計算処理されるのみで、当サイトのサーバーに送信・保存されることはありません。
        </p>
      </div>

      <div className="card article">
        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは、サイトの利用状況を把握するために、Googleアナリティクス等のアクセス解析ツールを利用する場合があります。これらのツールはトラフィックデータの収集のためにCookieを使用することがありますが、このデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <p>
          この機能はCookieを無効にすることで収集を拒否することが可能ですので、お使いのブラウザの設定をご確認ください。Googleアナリティクスの規約に関しては、
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleアナリティクスサービス利用規約
          </a>
          をご覧ください。
        </p>
      </div>

      <div className="card article">
        <h2>広告配信について（Cookieの利用）</h2>
        <p>
          当サイトは、第三者配信の広告サービス（Google
          AdSenseを含みます）を利用する場合があります。このような広告配信事業者は、ユーザーの興味に応じた広告を表示するために、当サイトや他サイトへのアクセス情報をもとにしたCookieを使用することがあります。
        </p>
        <p>
          Googleが広告配信に使用するCookie「DART Cookie」により、当サイト以外のサイトへのアクセス情報に基づいて、ユーザーに合わせた広告を表示することがあります。DART
          Cookieを無効にする場合は、
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleの広告と検索に関するポリシー
          </a>
          をご確認ください。
        </p>
        <p>
          Googleを含む第三者配信事業者は、Cookieを使用してユーザーが当サイトや他のサイトに過去にアクセスした情報に基づいて広告を配信します。Googleが広告Cookieを使用することにより、Google及びそのパートナーは当サイトや他のサイトへのアクセス情報に基づいて広告を配信できるようになります。ユーザーは
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            広告設定
          </a>
          でパーソナライズ広告を無効にすることができます。
        </p>
        <div className="note-box">
          Cookieを無効にする方法や、その他Cookieに関する詳細については「AboutCookies.org」などをご参照ください。
        </div>
      </div>

      <div className="card article">
        <h2>お問い合わせフォームについて</h2>
        <p>
          お問い合わせフォームに入力いただいた内容は、お問い合わせへの回答以外の目的では利用しません。フォームの送信・管理には、当サイトのホスティング事業者であるNetlify, Inc.が提供する機能を利用しています。取り扱いの詳細は
          <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
            Netlifyのプライバシーポリシー
          </a>
          をご覧ください。
        </p>
      </div>

      <div className="card article">
        <h2>免責事項</h2>
        <p>
          当サイトのコンテンツ・情報について、できる限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトの判定結果を利用したことによって生じた損害等について、一切の責任を負いかねますのでご了承ください。
        </p>
        <p>
          当サイトからリンクやバナーなどによって他サイトに移動された場合、移動先サイトで提供される情報・サービス等について当サイトは一切の責任を負いません。
        </p>
      </div>

      <div className="card article">
        <h2>著作権について</h2>
        <p>
          当サイトで掲載している文章や画像等の著作権は、放棄しておりません。第三者が権利を保有するコンテンツについては、それぞれの権利者に帰属します。
        </p>
      </div>

      <div className="card article">
        <h2>プライバシーポリシーの変更について</h2>
        <p>
          当サイトは、法令等の変更やサービス内容の変更に伴い、本ポリシーの内容を予告なく変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点から効力を生じるものとします。
        </p>
        <p>お問い合わせは<Link href="/contact">こちら</Link>からお願いいたします。</p>
      </div>

      <footer>制定日：2026年7月22日</footer>
    </div>
  );
}
