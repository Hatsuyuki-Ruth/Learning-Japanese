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

const dateRows = [
  { form: "一日", readings: [{ parts: [{ moras: ["つ", "い", "た", "ち"], accent: 4 }] }] },
  { form: "二日", readings: [{ parts: [{ moras: ["ふ", "つ", "か"], accent: 0 }] }] },
  { form: "三日", readings: [{ parts: [{ moras: ["み", "っ", "か"], accent: 0 }] }] },
  { form: "四日", readings: [{ parts: [{ moras: ["よ", "っ", "か"], accent: 0 }] }] },
  { form: "五日", readings: [
    { parts: [{ moras: ["い", "つ", "か"], accent: 3 }] },
    { parts: [{ moras: ["い", "つ", "か"], accent: 0 }] }
  ] },
  { form: "六日", readings: [{ parts: [{ moras: ["む", "い", "か"], accent: 0 }] }] },
  { form: "七日", readings: [
    { parts: [{ moras: ["な", "の", "か"], accent: 0 }] },
    { parts: [{ moras: ["な", "ぬ", "か"], accent: 0 }] }
  ] },
  { form: "八日", readings: [{ parts: [{ moras: ["よ", "う", "か"], accent: 0 }] }] },
  { form: "九日", readings: [{ parts: [{ moras: ["こ", "こ", "の", "か"], accent: 4 }] }] },
  { form: "十日", readings: [{ parts: [{ moras: ["と", "お", "か"], accent: 0 }] }] },
  { form: "十一日", readings: [{ parts: [{ moras: ["じゅ", "う", "い", "ち", "に", "ち"], accent: 6 }] }] },
  { form: "十二日", readings: [{ parts: [{ moras: ["じゅ", "う", "に", "に", "ち"], accent: 5 }] }] },
  { form: "十三日", readings: [
    { parts: [{ moras: ["じゅ", "う", "さ", "ん", "に", "ち"], accent: 3 }] },
    { parts: [{ moras: ["じゅ", "う", "さ", "ん", "に", "ち"], accent: 1 }] }
  ] },
  { form: "十四日", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["よ", "っ", "か"], accent: 0 }] },
    { parts: [{ moras: ["じゅ", "う", "よ", "っ", "か"], accent: 0 }] }
  ] },
  { form: "十五日", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "に", "ち"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "ご", "に", "ち"], accent: 3 }] },
    { parts: [{ moras: ["じゅ", "う", "ご", "に", "ち"], accent: 1 }] }
  ] },
  { form: "十六日", readings: [{ parts: [{ moras: ["じゅ", "う", "ろ", "く", "に", "ち"], accent: 6 }] }] },
  { form: "十七日", readings: [
    { parts: [{ moras: ["じゅ", "う", "し", "ち", "に", "ち"], accent: 6 }] },
    { parts: [{ moras: ["じゅ", "う", "な", "な", "に", "ち"], accent: 4 }] }
  ] },
  { form: "十八日", readings: [{ parts: [{ moras: ["じゅ", "う", "は", "ち", "に", "ち"], accent: 6 }] }] },
  { form: "十九日", readings: [{ parts: [{ moras: ["じゅ", "う", "く", "に", "ち"], accent: 3 }] }] },
  { form: "二十日", readings: [{ parts: [{ moras: ["は", "つ", "か"], accent: 0 }] }] },
  { form: "二十一日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["い", "ち", "に", "ち"], accent: 4 }
  ] }] },
  { form: "二十二日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["に", "に", "ち"], accent: 3 }
  ] }] },
  { form: "二十三日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["さ", "ん", "に", "ち"], accent: 1 }
  ] }] },
  { form: "二十四日", readings: [
    { parts: [
      { moras: ["に", "じゅ", "う"], accent: 1 },
      { separator: "・" },
      { moras: ["よ", "っ", "か"], accent: 0 }
    ] },
    { parts: [
      { moras: ["に", "じゅ", "う"], accent: 1 },
      { separator: "・" },
      { moras: ["よ", "ん", "に", "ち"], accent: 1 }
    ] }
  ] },
  { form: "二十五日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["ご", "に", "ち"], accent: 1 }
  ] }] },
  { form: "二十六日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["ろ", "く", "に", "ち"], accent: 4 }
  ] }] },
  { form: "二十七日", readings: [
    { parts: [
      { moras: ["に", "じゅ", "う"], accent: 1 },
      { separator: "・" },
      { moras: ["し", "ち", "に", "ち"], accent: 4 }
    ] },
    { parts: [
      { moras: ["に", "じゅ", "う"], accent: 1 },
      { separator: "・" },
      { moras: ["な", "な", "に", "ち"], accent: 2 }
    ] }
  ] },
  { form: "二十八日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["は", "ち", "に", "ち"], accent: 4 }
  ] }] },
  { form: "二十九日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["く", "に", "ち"], accent: 1 }
  ] }] },
  { form: "三十日", readings: [
    { parts: [{ moras: ["さ", "ん", "じゅ", "う", "に", "ち"], accent: 3 }] },
    { parts: [{ moras: ["さ", "ん", "じゅ", "う", "に", "ち"], accent: 1 }] },
    { parts: [{ moras: ["み", "そ", "か"], accent: 0 }] }
  ] },
  { form: "三十一日", readings: [{ parts: [
    { moras: ["さ", "ん", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["い", "ち", "に", "ち"], accent: 4 }
  ] }] }
];

const weekMonthDateNotes = [
  {
    target: "月名",
    text: [
      "二月・四月の「新傾向」は一部で見られる語頭高型の発音。",
      "尾高型の月名は、副詞的に用いられると平板型になる。"
    ].join("<br>")
  }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#weekdays",
  sections: [
    { title: "曜日", rows: weekdayRows }
  ]
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#months",
  sections: [
    { title: "月名", rows: monthRows, rowsPerColumn: 6 }
  ],
  notesSelector: "#week-month-date-notes",
  notes: weekMonthDateNotes
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#dates",
  sections: [
    { title: "日付", rows: dateRows, rowsPerColumn: 10 }
  ]
});
