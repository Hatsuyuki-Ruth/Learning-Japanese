"use strict";

const hourRows = [
  { form: "零時", readings: [{ parts: [{ moras: ["れ", "い", "じ"], accent: 1 }] }] },
  { form: "一時", readings: [{ parts: [{ moras: ["い", "ち", "じ"], accent: 2 }] }] },
  { form: "二時", readings: [{ parts: [{ moras: ["に", "じ"], accent: 1 }] }] },
  { form: "三時", readings: [{ parts: [{ moras: ["さ", "ん", "じ"], accent: 1 }] }] },
  { form: "四時", readings: [{ parts: [{ moras: ["よ", "じ"], accent: 1 }] }] },
  { form: "五時", readings: [{ parts: [{ moras: ["ご", "じ"], accent: 1 }] }] },
  { form: "六時", readings: [{ parts: [{ moras: ["ろ", "く", "じ"], accent: 2 }] }] },
  { form: "七時", readings: [{ parts: [{ moras: ["し", "ち", "じ"], accent: 2 }] }] },
  { form: "八時", readings: [{ parts: [{ moras: ["は", "ち", "じ"], accent: 2 }] }] },
  { form: "九時", readings: [{ parts: [{ moras: ["く", "じ"], accent: 1 }] }] },
  { form: "十時", readings: [{ parts: [{ moras: ["じゅ", "う", "じ"], accent: 1 }] }] },
  { form: "十一時", readings: [{ parts: [{ moras: ["じゅ", "う", "い", "ち", "じ"], accent: 4 }] }] },
  { form: "十二時", readings: [{ parts: [{ moras: ["じゅ", "う", "に", "じ"], accent: 3 }] }] },
  { form: "十三時", readings: [{ parts: [{ moras: ["じゅ", "う", "さ", "ん", "じ"], accent: 3 }] }] },
  { form: "十四時", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["よ", "じ"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "よ", "じ"], accent: 1 }] }
  ] },
  { form: "十五時", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "じ"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "ご", "じ"], accent: 1 }] }
  ] },
  { form: "十六時", readings: [{ parts: [{ moras: ["じゅ", "う", "ろ", "く", "じ"], accent: 4 }] }] },
  { form: "十七時", readings: [{ parts: [{ moras: ["じゅ", "う", "し", "ち", "じ"], accent: 4 }] }] },
  { form: "十八時", readings: [{ parts: [{ moras: ["じゅ", "う", "は", "ち", "じ"], accent: 4 }] }] },
  { form: "十九時", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["く", "じ"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "く", "じ"], accent: 1 }] }
  ] },
  { form: "二十時", readings: [
    { parts: [{ moras: ["に", "じゅ", "う", "じ"], accent: 2 }] },
    { parts: [{ moras: ["に", "じゅ", "う", "じ"], accent: 1 }] }
  ] },
  { form: "何時", readings: [{ parts: [{ moras: ["な", "ん", "じ"], accent: 1 }] }] },
];

const hourNotes = [
  {
    target: "〜時間",
    text: "アクセント核は「じ」に置かれる。<br>〜七時間（〜ななじかん）もよい。"
  }
];

const minuteRows = [
  { form: "一分", readings: [{ parts: [{ moras: ["い", "っ", "ぷ", "ん"], accent: 1 }] }] },
  { form: "二分", readings: [{ parts: [{ moras: ["に", "ふ", "ん"], accent: 1 }] }] },
  { form: "三分", readings: [{ parts: [{ moras: ["さ", "ん", "ぷ", "ん"], accent: 1 }] }] },
  { form: "四分", readings: [{ parts: [{ moras: ["よ", "ん", "ぷ", "ん"], accent: 1 }] }] },
  { form: "五分", readings: [{ parts: [{ moras: ["ご", "ふ", "ん"], accent: 1 }] }] },
  { form: "六分", readings: [{ parts: [{ moras: ["ろ", "っ", "ぷ", "ん"], accent: 1 }] }] },
  { form: "七分", readings: [{ parts: [{ moras: ["な", "な", "ふ", "ん"], accent: 2 }] }] },
  { form: "八分", readings: [
    { parts: [{ moras: ["は", "ち", "ふ", "ん"], accent: 2 }] },
    { parts: [{ moras: ["は", "っ", "ぷ", "ん"], accent: 1 }] }
  ] },
  { form: "九分", readings: [{ parts: [{ moras: ["きゅ", "う", "ふ", "ん"], accent: 1 }] }] },
  { form: "十分", readings: [{ parts: [{ moras: ["じ（ゅ）", "っ", "ぷ", "ん"], accent: 1 }] }] },
  { form: "十五分", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "ふ", "ん"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "ご", "ふ", "ん"], accent: 1 }] }
  ] },
  { form: "二十分", readings: [
    { parts: [{ moras: ["に", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 2 }] },
    { parts: [{ moras: ["に", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 1 }] }
  ] },
  { form: "三十分", readings: [
    { parts: [{ moras: ["さ", "ん", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 3 }] },
    { parts: [{ moras: ["さ", "ん", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 1 }] }
  ] },
  { form: "四十分", readings: [
    { parts: [{ moras: ["よ", "ん", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 3 }] },
    { parts: [{ moras: ["よ", "ん", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 1 }] }
  ] },
  { form: "五十分", readings: [{ parts: [{ moras: ["ご", "じ（ゅ）", "っ", "ぷ", "ん"], accent: -4 }] }] },
  { form: "六十分", readings: [{ parts: [{ moras: ["ろ", "く", "じ（ゅ）", "っ", "ぷ", "ん"], accent: -4 }] }] },
  { form: "七十分", readings: [{ parts: [{ moras: ["な", "な", "じ（ゅ）", "っ", "ぷ", "ん"], accent: -4 }] }] },
  { form: "八十分", readings: [{ parts: [{ moras: ["は", "ち", "じ（ゅ）", "っ", "ぷ", "ん"], accent: -4 }] }] },
  { form: "九十分", readings: [
    { parts: [{ moras: ["きゅ", "う", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 3 }] },
    { parts: [{ moras: ["きゅ", "う", "じ（ゅ）", "っ", "ぷ", "ん"], accent: 1 }] }
  ] },
  { form: "百分", readings: [{ parts: [{ moras: ["ひゃ", "っ", "ぷ", "ん"], accent: 1 }] }] },
  { form: "千分", readings: [{ parts: [{ moras: ["せ", "ん", "ぷ", "ん"], accent: 1 }] }] },
  { form: "一万分", readings: [{ parts: [{ moras: ["い", "ち", "ま", "ん", "ぷ", "ん"], accent: 0 }] }] },
  { form: "何分", readings: [{ parts: [{ moras: ["な", "ん", "ぷ", "ん"], accent: 1 }] }] }
];

const minuteNotes = [
  {
    target: "〜分間",
    text: "アクセント核は「ふ・ぷ」に置かれる。"
  }
];

const secondRows = [
  { form: "一秒", readings: [{ parts: [{ moras: ["い", "ち", "びょ", "う"], accent: 2 }] }] },
  { form: "二秒", readings: [{ parts: [{ moras: ["に", "びょ", "う"], accent: 1 }] }] },
  { form: "三秒", readings: [{ parts: [{ moras: ["さ", "ん", "びょ", "う"], accent: 1 }] }] },
  { form: "四秒", readings: [{ parts: [{ moras: ["よ", "ん", "びょ", "う"], accent: 1 }] }] },
  { form: "五秒", readings: [{ parts: [{ moras: ["ご", "びょ", "う"], accent: 1 }] }] },
  { form: "六秒", readings: [{ parts: [{ moras: ["ろ", "く", "びょ", "う"], accent: 2 }] }] },
  { form: "七秒", readings: [{ parts: [{ moras: ["な", "な", "びょ", "う"], accent: 2 }] }] },
  { form: "八秒", readings: [{ parts: [{ moras: ["は", "ち", "びょ", "う"], accent: 2 }] }] },
  { form: "九秒", readings: [{ parts: [{ moras: ["きゅ", "う", "びょ", "う"], accent: 1 }] }] },
  { form: "十秒", readings: [{ parts: [{ moras: ["じゅ", "う", "びょ", "う"], accent: 1 }] }] },
  { form: "十五秒", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "びょ", "う"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "ご", "びょ", "う"], accent: 1 }] }
  ] },
  { form: "二十秒", readings: [
    { parts: [{ moras: ["に", "じゅ", "う", "びょ", "う"], accent: 2 }] },
    { parts: [{ moras: ["に", "じゅ", "う", "びょ", "う"], accent: 1 }] }
  ] },
  null,
  { form: "百秒", readings: [{ parts: [{ moras: ["ひゃ", "く", "びょ", "う"], accent: 2 }] }] },
  { form: "千秒", readings: [{ parts: [{ moras: ["せ", "ん", "びょ", "う"], accent: 1 }] }] },
  { form: "一万秒", readings: [{ parts: [{ moras: ["い", "ち", "ま", "ん", "びょ", "う"], accent: 0 }] }] },
  { form: "何秒", readings: [{ parts: [{ moras: ["な", "ん", "びょ", "う"], accent: 1 }] }] }
];

const secondNotes = [
  {
    target: "〜秒間",
    text: "アクセント核は「びょ」に置かれる。"
  }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#hours",
  rows: hourRows,
  rowsPerColumn: 10,
  notesSelector: "#hour-notes",
  notes: hourNotes
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#minutes",
  rows: minuteRows,
  rowsPerColumn: 10,
  notesSelector: "#minute-notes",
  notes: minuteNotes
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#seconds",
  rows: secondRows,
  rowsPerColumn: 10,
  notesSelector: "#second-notes",
  notes: secondNotes
});
