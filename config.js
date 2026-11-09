// 回答の自動送信（Googleドライブへの保存）の設定
// endpoint に、Apps Script の「ウェブアプリのURL」（https://script.google.com/macros/s/…/exec）を貼り付けると有効になります。
// 空のままなら、これまでどおり「メール・LINEなどで送る」だけのページです。（現在は使っていません）
window.SANGYOUI_SUBMIT = {
  endpoint: "",
  key: "sangyoui-submit-2026",          // Apps Script の CONFIG.KEY と同じにする
  companies: {
    // 例）URLの末尾に ?c=記号 を付けたときだけ「回答を送信する」が表示されます
    // kigou: { name: "会社名", fallbackTo: "ishikawa@plansboard.com" }
  }
};
