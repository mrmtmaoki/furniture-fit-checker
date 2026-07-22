import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/site";

const title = "玄関ドア・室内ドアのサイズ目安と曲がり角の注意点";
const description =
  "引っ越しや家具の搬入前に知っておきたい、一般的な玄関ドア・室内ドアの幅と高さの目安、曲がり角やL字廊下がある場合の注意点をまとめました。数値が分かったら搬入経路チェッカーでそのまま判定できます。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "玄関ドア サイズ 目安",
    "室内ドア 幅 高さ",
    "家具 搬入 玄関 通るか",
    "引っ越し 家具 サイズ 対角線",
    "曲がり角 家具 搬入",
  ],
  alternates: {
    canonical: `${SITE_URL}/guide`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/guide`,
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

export default function GuidePage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ ガイド
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
          <h1>玄関ドア・室内ドアのサイズ目安と曲がり角の注意点</h1>
          <p>
            家具の搬入で失敗しないために、まず知っておきたい開口部の標準サイズと、曲がり角がある廊下・玄関での注意点を解説します。
          </p>
        </div>
      </div>

      <div className="card article">
        <h2>一般的な玄関ドア・室内ドアのサイズ目安</h2>
        <p className="sub">
          住宅の設計や建具メーカーの規格によって差はありますが、目安として次のようなサイズがよく使われています。実際に搬入する前は、必ずご自宅のドアをメジャーで実測してください。
        </p>

        <h3>玄関ドア（片開き）</h3>
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>サイズ目安</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>枠の幅</td>
              <td>約 780〜900mm</td>
              <td>ドア枠の外寸。メーカー規格で85cm・78cmなどが多い</td>
            </tr>
            <tr>
              <td>有効開口幅</td>
              <td>約 700〜800mm</td>
              <td>枠・戸当たり・ドアの厚みを引いた実際に通せる幅</td>
            </tr>
            <tr>
              <td>高さ</td>
              <td>約 2000〜2200mm</td>
              <td>マンションは2000mm前後、戸建ては2000〜2200mmが多い</td>
            </tr>
          </tbody>
        </table>

        <h3>室内ドア（居室・廊下の建具）</h3>
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>サイズ目安</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>枠の幅</td>
              <td>約 750〜800mm</td>
              <td>洋室ドアで一般的な規格</td>
            </tr>
            <tr>
              <td>有効開口幅</td>
              <td>約 650〜750mm</td>
              <td>枠を外せる引き戸なら数cm広く使えることもある</td>
            </tr>
            <tr>
              <td>高さ</td>
              <td>約 1800〜2000mm</td>
              <td>クローゼットや押入れの戸は高さがやや低いことも</td>
            </tr>
          </tbody>
        </table>

        <h3>廊下・共用部の入口</h3>
        <p>
          マンションの共用廊下からエントランス、エレベーターの出入口も忘れずに確認しましょう。特に築年数の古い物件はエレベーターの奥行きが浅く、長い家具が入らないケースがあります。
        </p>

        <div className="note-box">
          規格値はあくまで目安です。玄関の三和土（たたき）の段差や、ドア枠・靴箱の出っ張り、床の巾木なども有効幅を狭める要因になります。数値は必ず実測値を使ってください。
        </div>
      </div>

      <div className="card article">
        <h2>曲がり角がある場合の注意点</h2>
        <p className="sub">
          廊下がまっすぐでも、途中に曲がり角やL字の廊下があると、直線の寸法だけでは判断できません。
        </p>

        <h3>回転させるための余分なスペースが必要</h3>
        <p>
          曲がり角で家具の向きを変えるには、家具の長辺に近い分だけ余分な空間が必要になります。廊下の幅が家具の対角線より狭い場合、まっすぐな廊下部分は問題なくても、曲がり角で立ち往生してしまうことがあります。
        </p>

        <h3>注意したい場所の例</h3>
        <ul>
          <li>玄関を入ってすぐに直角に曲がるレイアウト</li>
          <li>階段の踊り場（上下階を移動する場合は特に狭くなりがち）</li>
          <li>L字・コの字型の廊下やマンションの共用通路</li>
          <li>玄関ホールから廊下へ抜ける最初の曲がり角</li>
        </ul>

        <h3>曲がり角以外にも確認したいポイント</h3>
        <ul>
          <li>天井の梁や照明器具、火災報知器などの突起物</li>
          <li>手すりや消火器ボックスなど壁面の出っ張り</li>
          <li>床の段差やドアの敷居</li>
        </ul>

        <h3>厳しそうなときの対策</h3>
        <ul>
          <li>家具を分解できるか、取扱説明書やメーカーに確認する</li>
          <li>建具を一時的に外して開口部を広げられないか検討する</li>
          <li>窓やベランダからの搬入（吊り上げ搬入）を業者に相談する</li>
          <li>迷ったら無理せず、引っ越し業者や家具店に事前相談する</li>
        </ul>

        <div className="note-box">
          曲がり角がある場合、直線部分の計算だけで「通る」と判断するのは危険です。搬入経路チェッカーでも曲がり角ありにチェックを入れると、回転に必要な余裕を考慮した判定に切り替わります。
        </div>
      </div>

      <div className="card cta-card">
        <h2>実際のサイズで判定してみましょう</h2>
        <p>
          玄関・ドアの寸法を実測できたら、家具のサイズと合わせて搬入経路チェッカーに入力するだけで、まっすぐ通るか、対角線計算で斜めに通せるかを自動判定できます。
        </p>
        <Link href="/" className="cta-link">
          搬入経路チェッカーで判定する
        </Link>
      </div>

      <footer>
        このガイドは一般的な目安であり、すべての住宅・建具に当てはまるものではありません。搬入の可否は必ず実測値で確認してください。
      </footer>
    </div>
  );
}
