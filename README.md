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

## 生活記録表（Web版）

| 版 | URL | 送り先 |
|---|---|---|
| 通常版 | [https://sangyoui.github.io/mendan/seikatsu-sakurajyuji/](https://sangyoui.github.io/mendan/seikatsu-sakurajyuji/) | t-healthcare@sakurajyuji.jp |
| 別送り先版 | [https://sangyoui.github.io/mendan/seikatsu-sanyo/](https://sangyoui.github.io/mendan/seikatsu-sanyo/) | y-imushitsu@sanyo-shokai.co.jp |

- 休職中・復職前・就労中の方に、1週間分の生活リズム（睡眠・日中の活動・気分）を記録していただくページです。
- PC・スマホのブラウザで開くだけで記入できます。アプリのインストールやログインは不要です。
- 記入が終わったら、「③ 送る」の画面から、記録をPDFにして、メール・LINE・その他のアプリ（Teams・Slack・Chatworkなど）で担当者へ送っていただきます。スマホでは、PDFが添付された状態でメールやLINEが開きます。

## 個人情報について

- 入力内容は、記入する方の端末（ブラウザ）の中にだけ保存され、インターネット上には送信されません。
- このリポジトリには、記入用のページ（`index.html`、`short.html`、`seikatsu-sakurajyuji/index.html`、`seikatsu-sanyo/index.html`）だけを置いています。**記入済みの回答・記録（PDF・画像・Excel）は、このリポジトリに絶対にアップロードしないでください。**（このリポジトリは公開設定です）

## 更新のしかた

- 面談前アンケート：一番上の階層（このREADMEと同じ場所）で、右上の「Add file」→「Upload files」から新しい `index.html`・`short.html` をアップロードし、「Commit changes」を押す
- 生活記録表：更新したい版のフォルダ（`seikatsu-sakurajyuji` または `seikatsu-sanyo`）を開き、同じ手順で新しい `index.html` をアップロード
- 数分で同じURLに反映されます。

（内蔵ライブラリ：JSZip 3.10.1、html2canvas 1.4.1、jsPDF 2.5.1 ― いずれもMIT License）
