# 面談前アンケート（入力ページ）

| URL | 内容 |
|---|---|
| `index.html`（例：https://sangyoui.github.io/mendan/） | 全項目版（1．〜9．、疲労蓄積度の自動判定あり） |
| `short.html`（例：https://sangyoui.github.io/mendan/short.html） | 1ページ目版（1．〜5．のみ） |

- どちらも1ファイルで動きます（Excel作成用ライブラリ JSZip 3.10.1〈MIT License〉と回答ファイルのひな形を内蔵）。
- 入力内容は回答者の端末内だけで処理され、サーバーには送信・保存されません。
- 回答者は最後に回答ファイル（Excel）を保存し、メール・LINE等で面談担当者へ送ります。
  - 全項目版：mendan-mae_日付_時刻.xlsx（判定（医師用）シート付き）
  - 1ページ目版：mendan-mae-1_日付_時刻.xlsx
