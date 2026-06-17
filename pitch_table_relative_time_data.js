"use strict";

const timeSections = [
  {
    title: "朝・晩",
    rows: [
      { form: "毎朝", readings: [
        { parts: [{ moras: ["ま", "い", "あ", "さ"], accent: 1 }] },
        { parts: [{ moras: ["ま", "い", "あ", "さ"], accent: 0 }] }
      ] },
      { form: "毎晩", readings: [
        { parts: [{ moras: ["ま", "い", "ば", "ん"], accent: 1 }] },
        { parts: [{ moras: ["ま", "い", "ば", "ん"], accent: 0 }] }
      ] }
    ]
  },
  {
    title: "日",
    rows: [
      { form: "一昨日", readings: [
        { parts: [{ moras: ["い", "っ", "さ", "く", "じ", "つ"], accent: 4 }] },
        { parts: [{ moras: ["お", "と", "と", "い"], accent: 3 }] }
      ] },
      { form: "昨日", readings: [
        { label: "名詞", parts: [{ moras: ["き", "の", "ー"], accent: 2 }] },
        { label: "副詞", parts: [{ moras: ["き", "の", "ー"], accent: 0 }] },
        { parts: [{ moras: ["さ", "く", "じ", "つ"], accent: 2 }] }
      ] },
      { entries: [
        { form: "今日", readings: [{ parts: [{ moras: ["きょ", "ー"], accent: 1 }] }] },
        { form: "本日", readings: [{ parts: [{ moras: ["ほ", "ん", "じ", "つ"], accent: 1 }] }] }
      ] },
      { form: "明日", readings: [
        { label: "名詞", parts: [{ moras: ["あ", "し", "た"], accent: 3 }] },
        { label: "副詞", parts: [{ moras: ["あ", "し", "た"], accent: 0 }] },
        { label: "名詞", parts: [{ moras: ["あ", "す"], accent: 2 }] },
        { label: "副詞", parts: [{ moras: ["あ", "す"], accent: 0 }] },
        { parts: [{ moras: ["みょ", "ー", "に", "ち"], accent: 1 }] }
      ] },
      { form: "明後日", readings: [
        { parts: [{ moras: ["あ", "さ", "っ", "て"], accent: 2 }] },
        { parts: [{ moras: ["みょ", "ー", "ご", "に", "ち"], accent: 3 }] }
      ] },
      { form: "毎日", readings: [
        { parts: [{ moras: ["ま", "い", "に", "ち"], accent: 1 }] },
        { parts: [{ moras: ["ま", "い", "じ", "つ"], accent: 1 }] }
      ] }
    ]
  },
  {
    title: "週",
    rows: [
      { form: "先々週", readings: [
        { parts: [{ moras: ["せ", "ん", "せ", "ん", "しゅ", "う"], accent: 0 }] },
        { parts: [{ moras: ["せ", "ん", "せ", "ん", "しゅ", "う"], accent: 3 }] }
      ] },
      { form: "先週", readings: [{ parts: [{ moras: ["せ", "ん", "しゅ", "う"], accent: 0 }] }] },
      { form: "今週", readings: [{ parts: [{ moras: ["こ", "ん", "しゅ", "う"], accent: 0 }] }] },
      { form: "来週", readings: [{ parts: [{ moras: ["ら", "い", "しゅ", "う"], accent: 0 }] }] },
      { form: "再来週", readings: [{ parts: [{ moras: ["さ", "ら", "い", "しゅ", "う"], accent: 0 }] }] },
      { form: "毎週", readings: [{ parts: [{ moras: ["ま", "い", "しゅ", "う"], accent: 0 }] }] }
    ]
  },
  {
    title: "月",
    rows: [
      { form: "先々月", readings: [
        { parts: [{ moras: ["せ", "ん", "せ", "ん", "げ", "つ"], accent: 3 }] },
        { parts: [{ moras: ["せ", "ん", "せ", "ん", "げ", "つ"], accent: 0 }] }
      ] },
      { form: "先月", readings: [{ parts: [{ moras: ["せ", "ん", "げ", "つ"], accent: 1 }] }] },
      { form: "今月", readings: [{ parts: [{ moras: ["こ", "ん", "げ", "つ"], accent: 0 }] }] },
      { form: "来月", readings: [{ parts: [{ moras: ["ら", "い", "げ", "つ"], accent: 1 }] }] },
      { form: "再来月", readings: [
        { parts: [{ moras: ["さ", "ら", "い", "げ", "つ"], accent: 0 }] },
        { parts: [{ moras: ["さ", "ら", "い", "げ", "つ"], accent: 2 }] }
      ] },
      { form: "毎月", readings: [
        { parts: [{ moras: ["ま", "い", "つ", "き"], accent: 0 }] },
        { parts: [{ moras: ["ま", "い", "げ", "つ"], accent: 0 }] }
      ] }
    ]
  },
  {
    title: "年",
    rows: [
      { form: "一昨年", readings: [
        { parts: [{ moras: ["お", "と", "と", "し"], accent: 2 }] },
        { parts: [{ moras: ["い", "っ", "さ", "く", "ね", "ん"], accent: 0 }] },
        { parts: [{ moras: ["い", "っ", "さ", "く", "ね", "ん"], accent: 4 }] }
      ] },
      { entries: [
        { form: "去年", readings: [{ parts: [{ moras: ["きょ", "ね", "ん"], accent: 1 }] }] },
        { form: "昨年", readings: [{ parts: [{ moras: ["さ", "く", "ね", "ん"], accent: 0 }] }] }
      ] },
      { form: "今年", readings: [
        { parts: [{ moras: ["こ", "と", "し"], accent: 0 }] },
        { parts: [{ moras: ["こ", "ん", "ね", "ん"], accent: 1 }] }
      ] },
      { form: "来年", readings: [{ parts: [{ moras: ["ら", "い", "ね", "ん"], accent: 0 }] }] },
      { form: "再来年", readings: [{ parts: [{ moras: ["さ", "ら", "い", "ね", "ん"], accent: 0 }] }] },
      { form: "毎年", readings: [
        { parts: [{ moras: ["ま", "い", "と", "し"], accent: 0 }] },
        { parts: [{ moras: ["ま", "い", "ね", "ん"], accent: 0 }] }
      ] }
    ]
  }
];

const timeNotes = [];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#time",
  sections: timeSections,
  notesSelector: "#time-notes",
  notes: timeNotes
});
