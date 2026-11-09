// 回答の自動送信（Googleドライブへの保存）の設定
// endpoint に、Apps Script の「ウェブアプリのURL」（https://script.google.com/macros/s/…/exec）を貼り付けると有効になります。
// 空のままなら、これまでどおり「メール・LINEなどで送る」だけのページです。
window.SANGYOUI_SUBMIT = {
  endpoint: "",
  key: "sangyoui-submit-2026",          // Apps Script の CONFIG.KEY と同じにする
  companies: {
    // URLの末尾に ?c=inglewood を付けたときだけ「回答を送信する」が表示されます
    inglewood: { name: "株式会社イングリウッド", fallbackTo: "ishikawa@plansboard.com" }
  }
};
