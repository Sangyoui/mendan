# 産業医面談 資料

産業医面談で使う資料・入力ページを置いています。

## 面談前アンケート（Web版）

| 版 | URL | 送り先 |
|---|---|---|
| 全項目版 | [https://sangyoui.github.io/mendan/](https://sangyoui.github.io/mendan/) | y-imushitsu@sanyo-shokai.co.jp |
| 1ページ目版 | [https://sangyoui.github.io/mendan/short.html](https://sangyoui.github.io/mendan/short.html) | y-imushitsu@sanyo-shokai.co.jp |

- 産業医面談の前に記入していただく「面談前の生活・健康状態に関するアンケート」です。全項目版は1．〜9．（疲労蓄積度チェックリストの自動判定つき）、1ページ目版は1．〜5．のみです。
- PC・スマホのブラウザで開くだけで記入できます。アプリのインストールやログインは不要です。
- 回答が終わったら、ページ下の「回答を送る」から、アンケート用紙と同じ形のPDFにして、メール・LINE・その他のアプリ（Teams・Slack・Chatworkなど）で送っていただきます。
- 最後の設問で、おくすり手帳の写真（またはおくすり手帳アプリのスクリーンショット）を任意で追加できます。追加した画像は回答PDFの最後のページに付きます（Excelには含まれません）。

## 生活記録表（Web版）

| 版 | URL | 送り先 |
|---|---|---|
| 通常版 | [https://sangyoui.github.io/mendan/seikatsu-sakurajyuji/](https://sangyoui.github.io/mendan/seikatsu-sakurajyuji/) | t-healthcare@sakurajyuji.jp |
| 別送り先版 | [https://sangyoui.github.io/mendan/seikatsu-sanyo/](https://sangyoui.github.io/mendan/seikatsu-sanyo/) | y-imushitsu@sanyo-shokai.co.jp |

- 休職中・復職前・就労中の方に、1週間分の生活リズム（睡眠・日中の活動・気分）を記録していただくページです。
- PC・スマホのブラウザで開くだけで記入できます。アプリのインストールやログインは不要です。
- 記入が終わったら、「③ 送る」の画面から、記録をPDFにして、メール・LINE・その他のアプリ（Teams・Slack・Chatworkなど）で担当者へ送っていただきます。スマホでは、PDFが添付された状態でメールやLINEが開きます。

## 会社別URL（メールで送る）

URLを開くと、ページ下の「メールで送る」の送付先が、その会社のアドレスになります。

| 会社（送付先） | 面談前アンケート | 面談前アンケート | 生活記録表 |
|---|---|---|---|
| 東京桜十字<br>（t-healthcare@sakurajyuji.jp） | [全項目版](https://sangyoui.github.io/mendan/?to=t-healthcare@sakurajyuji.jp) | [1ページ目版](https://sangyoui.github.io/mendan/short.html?to=t-healthcare@sakurajyuji.jp) | [生活記録表](https://sangyoui.github.io/seikatsu-kiroku/healthcare/?to=t-healthcare@sakurajyuji.jp) |
| 三陽商会医務室<br>（y-imushitsu@sanyo-shokai.co.jp） | [全項目版](https://sangyoui.github.io/mendan/?to=y-imushitsu@sanyo-shokai.co.jp) | [1ページ目版](https://sangyoui.github.io/mendan/short.html?to=y-imushitsu@sanyo-shokai.co.jp) | [生活記録表](https://sangyoui.github.io/seikatsu-kiroku/healthcare/?to=y-imushitsu@sanyo-shokai.co.jp) |
| アスマーク<br>（kanri-roumu@asmarq.co.jp） | [全項目版](https://sangyoui.github.io/mendan/?to=kanri-roumu@asmarq.co.jp) | [1ページ目版](https://sangyoui.github.io/mendan/short.html?to=kanri-roumu@asmarq.co.jp) | [生活記録表](https://sangyoui.github.io/seikatsu-kiroku/healthcare/?to=kanri-roumu@asmarq.co.jp) |

## 会社別URL（Googleドライブへ自動送信）

URLの末尾に `?c=会社の記号` を付けると、「回答を送信する」ボタンが表示され、回答が産業医のGoogleドライブ（マイドライブ/産業医業務/会社フォルダ）に自動で保存されます。提出したことは会社の担当者にも通知されます（回答内容は通知されません）。

| 会社 | 面談前アンケート（全項目版） | 面談前アンケート（1ページ目版） | 生活記録表 |
|---|---|---|---|
| 株式会社イングリウッド | [https://sangyoui.github.io/mendan/?c=inglewood](https://sangyoui.github.io/mendan/?c=inglewood) | [https://sangyoui.github.io/mendan/short.html?c=inglewood](https://sangyoui.github.io/mendan/short.html?c=inglewood) | [https://sangyoui.github.io/seikatsu-kiroku/healthcare/?c=inglewood](https://sangyoui.github.io/seikatsu-kiroku/healthcare/?c=inglewood) |

- 送信先の設定は `config.js`（受け取り窓口のURL・会社の記号）と、Googleドライブ側の Apps Script（保存先フォルダ・通知先）で行います。

## 個人情報について

- 入力内容は、記入する方の端末（ブラウザ）の中にだけ保存されます。会社別URLで「送信する」を押した場合のみ、産業医のGoogleドライブに保存されます。
- このリポジトリには、記入用のページ（`index.html`、`short.html`、`seikatsu-sakurajyuji/index.html`、`seikatsu-sanyo/index.html`）だけを置いています。**記入済みの回答・記録（PDF・画像・Excel）は、このリポジトリに絶対にアップロードしないでください。**（このリポジトリは公開設定です）

## 更新のしかた

- 面談前アンケート：一番上の階層（このREADMEと同じ場所）で、右上の「Add file」→「Upload files」から新しい `index.html`・`short.html` をアップロードし、「Commit changes」を押す
- 生活記録表：更新したい版のフォルダ（`seikatsu-sakurajyuji` または `seikatsu-sanyo`）を開き、同じ手順で新しい `index.html` をアップロード
- 数分で同じURLに反映されます。

（内蔵ライブラリ：JSZip 3.10.1、html2canvas 1.4.1、jsPDF 2.5.1 ― いずれもMIT License）
