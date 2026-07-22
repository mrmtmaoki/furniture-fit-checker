import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../../lib/site";

const title = "引っ越し前に確認したい家具搬入チェックリスト";
const description =
  "引っ越しや家具の購入前に確認しておきたいポイントを、搬入経路の採寸から当日の準備までチェックリスト形式でまとめました。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "引っ越し 家具 チェックリスト",
    "家具 搬入 準備",
    "引っ越し 採寸",
    "家具 搬入経路 確認",
    "新居 家具 サイズ 確認",
  ],
  alternates: {
    canonical: `${SITE_URL}/guide/moving-checklist`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/guide/moving-checklist`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
    images: [`${SITE_URL}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/twitter-image`],
  },
};

export default function MovingChecklistPage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ <Link href="/guide">ガイド</Link> ／
        搬入前チェックリスト
      </p>

      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect x="18" y="20" width="26" height="16" fill="#D9A62E" transform="rotate(35 31 28)" />
        </svg>
        <div>
          <p className="eyebrow">Guide</p>
          <h1>引っ越し前に確認したい家具搬入チェックリスト</h1>
          <p>
            新居やレイアウト変更で家具を運び入れる前に、確認しておきたいポイントをチェックリスト形式でまとめました。
          </p>
        </div>
      </div>

      <div className="card article">
        <h2>採寸の前に準備するもの</h2>
        <ul>
          <li>長さ3〜5m程度のメジャー（コンベックス）</li>
          <li>メモ用紙・スマートフォン（寸法の記録用）</li>
          <li>家具の仕様書・カタログ（サイズが記載されているもの）</li>
          <li>マスキングテープ（床に家具のサイズを仮置きして確認する場合）</li>
        </ul>
      </div>

      <div className="card article">
        <h2>搬入経路の採寸チェックリスト</h2>
        <p className="sub">
          玄関から設置場所まで、家具が通るすべての経路を順番に確認しましょう。1か所でも通らない箇所があれば搬入できません。
        </p>
        <table>
          <thead>
            <tr>
              <th>チェック箇所</th>
              <th>確認する寸法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>玄関ドア</td>
              <td>有効開口幅・高さ、三和土の段差</td>
            </tr>
            <tr>
              <td>玄関〜廊下の曲がり角</td>
              <td>廊下の幅、曲がり角での回転スペース</td>
            </tr>
            <tr>
              <td>室内ドア・クローゼットの戸</td>
              <td>有効開口幅・高さ</td>
            </tr>
            <tr>
              <td>階段・踊り場</td>
              <td>幅、天井までの高さ、踊り場の広さ</td>
            </tr>
            <tr>
              <td>エレベーター（マンション等）</td>
              <td>出入口の幅・高さ、かご内部の奥行き</td>
            </tr>
            <tr>
              <td>設置場所周辺</td>
              <td>設置スペースの寸法、コンセントや窓との位置関係</td>
            </tr>
          </tbody>
        </table>
        <div className="note-box">
          寸法を測ったら、<Link href="/">搬入経路チェッカー</Link>
          に入力して、まっすぐ通せるか・斜めにすれば通せるかをすぐに確認できます。
        </div>
      </div>

      <div className="card article">
        <h2>家具側で確認しておきたいこと</h2>
        <ul>
          <li>家具本体のサイズ（幅・奥行き・高さ）と、梱包した状態でのサイズの両方</li>
          <li>分解・脚の取り外しが可能かどうか（可能なら搬入時のサイズを小さくできる）</li>
          <li>重量（搬入経路に段差や階段がある場合、人数や台車の準備に影響）</li>
          <li>すでに設置している家具の入れ替えの場合、旧家具の搬出経路も同様に確認する</li>
        </ul>
      </div>

      <div className="card article">
        <h2>搬入当日の準備チェックリスト</h2>
        <ul>
          <li>搬入経路上の物（傘立て、マット、装飾品など）を事前に片付けておく</li>
          <li>床や壁を保護する養生シート・毛布などを用意する</li>
          <li>エレベーターや共用廊下を使う場合は、管理会社に利用時間の確認・予約をする</li>
          <li>マンションによっては搬入経路や時間帯に規約がある場合があるため事前確認する</li>
          <li>厳しそうな箇所は、引っ越し業者や家具店に事前相談しておく</li>
        </ul>
        <div className="note-box">
          当日になって「入らない」と判明すると、キャンセル料や再配送費用が発生することもあります。少しでも不安な箇所があれば、事前の採寸とチェッカーでの確認をおすすめします。
        </div>
      </div>

      <div className="card cta-card">
        <h2>寸法が測れたら判定してみましょう</h2>
        <p>
          玄関・ドア・廊下の寸法と家具のサイズを入力するだけで、まっすぐ通るか、対角線計算で斜めに通せるかを自動判定できます。
        </p>
        <Link href="/" className="cta-link">
          搬入経路チェッカーで判定する
        </Link>
      </div>

      <footer>
        このチェックリストは一般的な目安です。物件の構造や管理規約によって異なる場合があるため、詳細は現地の実測・管理会社への確認をおすすめします。
      </footer>
    </div>
  );
}
