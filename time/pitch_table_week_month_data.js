"use strict";

const weekdayRows = [
  { form: "月曜日", readings: [{ parts: [{ moras: ["げ", "つ", "よ", "う", "び"], accent: 3 }] }] },
  { form: "火曜日", readings: [{ parts: [{ moras: ["か", "よ", "う", "び"], accent: 2 }] }] },
  { form: "水曜日", readings: [{ parts: [{ moras: ["す", "い", "よ", "う", "び"], accent: 3 }] }] },
  { form: "木曜日", readings: [{ parts: [{ moras: ["も", "く", "よ", "う", "び"], accent: 3 }] }] },
  { form: "金曜日", readings: [{ parts: [{ moras: ["き", "ん", "よ", "う", "び"], accent: 3 }] }] },
  { form: "土曜日", readings: [{ parts: [{ moras: ["ど", "よ", "う", "び"], accent: 2 }] }] },
  { form: "日曜日", readings: [{ parts: [{ moras: ["に", "ち", "よ", "う", "び"], accent: 3 }] }] }
];

const weekRows = [
  { form: "一週", readings: [{ parts: [{ moras: ["い", "っ", "しゅ", "う"], accent: 0 }] }] },
  { form: "二週", readings: [{ parts: [{ moras: ["に", "しゅ", "う"], accent: 0 }] }] },
  { form: "三週", readings: [{ parts: [{ moras: ["さ", "ん", "しゅ", "う"], accent: 0 }] }] },
  { form: "四週", readings: [{ parts: [{ moras: ["よ", "ん", "しゅ", "う"], accent: 0 }] }] },
  { form: "五週", readings: [{ parts: [{ moras: ["ご", "しゅ", "う"], accent: 0 }] }] },
  { form: "六週", readings: [{ parts: [{ moras: ["ろ", "く", "しゅ", "う"], accent: 0 }] }] },
  { form: "七週", readings: [{ parts: [{ moras: ["な", "な", "しゅ", "う"], accent: 0 }] }] },
  { form: "八週", readings: [{ parts: [{ moras: ["は", "っ", "しゅ", "う"], accent: 0 }] }] },
  { form: "九週", readings: [{ parts: [{ moras: ["きゅ", "う", "しゅ", "う"], accent: 0 }] }] },
  { form: "十週", readings: [{ parts: [{ moras: ["じ（ゅ）", "っ", "しゅ", "う"], accent: 0 }] }] }
];

const weekNotes = [
  {
    target: "〜週間",
    text: "アクセント核は「しゅ」に置かれる。"
  },
  {
    target: "〜周年",
    text: "〜周年（〜しゅうねん）のアクセント型と促音化は、〜週間と同じ。"
  }
];

const monthRows = [
  { form: "一月", readings: [
    { label: "名詞", parts: [{ moras: ["い", "ち", "が", "つ"], accent: 4 }] },
    { label: "副詞", parts: [{ moras: ["い", "ち", "が", "つ"], accent: 0 }] }
  ] },
  { form: "二月", readings: [
    { label: "名詞", parts: [{ moras: ["に", "が", "つ"], accent: 3 }] },
    { label: "副詞", parts: [{ moras: ["に", "が", "つ"], accent: 0 }] },
    { label: "新傾向", parts: [{ moras: ["に", "が", "つ"], accent: 1 }] }
  ] },
  { form: "三月", readings: [{ parts: [{ moras: ["さ", "ん", "が", "つ"], accent: 1 }] }] },
  { form: "四月", readings: [
    { label: "名詞", parts: [{ moras: ["し", "が", "つ"], accent: 3 }] },
    { label: "副詞", parts: [{ moras: ["し", "が", "つ"], accent: 0 }] },
    { label: "新傾向", parts: [{ moras: ["し", "が", "つ"], accent: 1 }] }
  ] },
  { form: "五月", readings: [{ parts: [{ moras: ["ご", "が", "つ"], accent: 1 }] }] },
  { form: "六月", readings: [
    { label: "名詞", parts: [{ moras: ["ろ", "く", "が", "つ"], accent: 4 }] },
    { label: "副詞", parts: [{ moras: ["ろ", "く", "が", "つ"], accent: 0 }] }
  ] },
  { form: "七月", readings: [
    { label: "名詞", parts: [{ moras: ["し", "ち", "が", "つ"], accent: 4 }] },
    { label: "副詞", parts: [{ moras: ["し", "ち", "が", "つ"], accent: 0 }] }
  ] },
  { form: "八月", readings: [
    { label: "名詞", parts: [{ moras: ["は", "ち", "が", "つ"], accent: 4 }] },
    { label: "副詞", parts: [{ moras: ["は", "ち", "が", "つ"], accent: 0 }] }
  ] },
  { form: "九月", readings: [{ parts: [{ moras: ["く", "が", "つ"], accent: 1 }] }] },
  { form: "十月", readings: [
    { label: "名詞", parts: [{ moras: ["じゅ", "う", "が", "つ"], accent: 4 }] },
    { label: "副詞", parts: [{ moras: ["じゅ", "う", "が", "つ"], accent: 0 }] }
  ] },
  { form: "十一月", readings: [
    { label: "名詞", parts: [{ moras: ["じゅ", "う", "い", "ち", "が", "つ"], accent: 6 }] },
    { label: "副詞", parts: [{ moras: ["じゅ", "う", "い", "ち", "が", "つ"], accent: 0 }] }
  ] },
  { form: "十二月", readings: [
    { label: "名詞", parts: [{ moras: ["じゅ", "う", "に", "が", "つ"], accent: 5 }] },
    { label: "副詞", parts: [{ moras: ["じゅ", "う", "に", "が", "つ"], accent: 0 }] }
  ] }
];

const monthNotes = [
  {
    target: "月名",
    text: [
      "二月・四月の「新傾向」は一部で見られる語頭高型の発音。",
      "尾高型の月名は、副詞的に用いられると平板型になる。"
    ].join("<br>")
  },
  {
    target: "ヶ月",
    text: '<a href="../numbers/pitch_table_ka.html">ヶ月・回・階のアクセント</a>を参照。'
  }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#weekdays",
  sections: [
    { title: "曜日", rows: weekdayRows }
  ]
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#weeks",
  sections: [
    { title: "週", rows: weekRows, rowsPerColumn: 10 }
  ],
  notesSelector: "#week-notes",
  notes: weekNotes
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#months",
  sections: [
    { title: "月名", rows: monthRows, rowsPerColumn: 6 }
  ],
  notesSelector: "#month-notes",
  notes: monthNotes
});
