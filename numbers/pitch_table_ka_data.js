"use strict";

const monthDurationRows = [
  { form: "一ヶ月", readings: [{ parts: [{ moras: ["い", "っ", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "二ヶ月", readings: [{ parts: [{ moras: ["に", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "三ヶ月", readings: [{ parts: [{ moras: ["さ", "ん", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "四ヶ月", readings: [{ parts: [{ moras: ["よ", "ん", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "五ヶ月", readings: [{ parts: [{ moras: ["ご", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "六ヶ月", readings: [{ parts: [{ moras: ["ろ", "っ", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "七ヶ月", readings: [{ parts: [{ moras: ["な", "な", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "八ヶ月", readings: [
    { parts: [{ moras: ["は", "ち", "か", "げ", "つ"], accent: -3, circled: [1] }] },
    { parts: [{ moras: ["は", "っ", "か", "げ", "つ"], accent: -3 }] }
  ] },
  { form: "九ヶ月", readings: [{ parts: [{ moras: ["きゅ", "う", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "十ヶ月", readings: [
    { parts: [{ moras: ["じ", "っ", "か", "げ", "つ"], accent: -3 }] },
    { parts: [{ moras: ["じゅ", "っ", "か", "げ", "つ"], accent: -3 }] }
  ] },
  { form: "百ヶ月", readings: [{ parts: [{ moras: ["ひゃ", "っ", "か", "げ", "つ"], accent: -3 }] }] },
  { form: "何ヶ月", readings: [{ parts: [{ moras: ["な", "ん", "か", "げ", "つ"], accent: -3 }] }] }
];

const countRows = [
  { form: "一回", readings: [{ parts: [{ moras: ["い", "っ", "か", "い"], accent: -2 }] }] },
  { form: "二回", readings: [{ parts: [{ moras: ["に", "か", "い"], accent: -2 }] }] },
  { form: "三回", readings: [{ parts: [{ moras: ["さ", "ん", "か", "い"], accent: -2 }] }] },
  { form: "四回", readings: [
    { parts: [{ moras: ["よ", "ん", "か", "い"], accent: -2 }] },
    { parts: [{ moras: ["よ", "ん", "か", "い"], accent: 1 }] }
  ] },
  { form: "五回", readings: [{ parts: [{ moras: ["ご", "か", "い"], accent: -2 }] }] },
  { form: "六回", readings: [{ parts: [{ moras: ["ろ", "っ", "か", "い"], accent: -2 }] }] },
  { form: "七回", readings: [
    { parts: [{ moras: ["な", "な", "か", "い"], accent: -2 }] },
    { parts: [{ moras: ["な", "な", "か", "い"], accent: 2 }] }
  ] },
  { form: "八回", readings: [
    { parts: [{ moras: ["は", "ち", "か", "い"], accent: -2, circled: [1] }] },
    { parts: [{ moras: ["は", "っ", "か", "い"], accent: -2 }] }
  ] },
  { form: "九回", readings: [
    { parts: [{ moras: ["きゅ", "う", "か", "い"], accent: -2 }] },
    { parts: [{ moras: ["きゅ", "う", "か", "い"], accent: 1 }] }
  ] },
  { form: "十回", readings: [
    { parts: [{ moras: ["じ", "っ", "か", "い"], accent: -2 }] },
    { parts: [{ moras: ["じゅ", "っ", "か", "い"], accent: -2 }] }
  ] },
  { form: "十五回", readings: [
    { parts: [
      { moras: ["じゅ", "う"], accent: 1 },
      { separator: "・" },
      { moras: ["ご", "か", "い"], accent: -2 }
    ] },
    { parts: [{ moras: ["じゅ", "う", "ご", "か", "い"], accent: 1 }] }
  ] },
  { form: "二十回", readings: [
    { parts: [{ moras: ["に", "じ（ゅ）", "っ", "か", "い"], accent: 2 }] },
    { parts: [{ moras: ["に", "じ（ゅ）", "っ", "か", "い"], accent: 1 }] }
  ] },
  { form: "三十回", readings: [
    { parts: [{ moras: ["さ", "ん", "じ（ゅ）", "っ", "か", "い"], accent: 3 }] },
    { parts: [{ moras: ["さ", "ん", "じ（ゅ）", "っ", "か", "い"], accent: 1 }] }
  ] },
  { form: "四十回", readings: [
    { parts: [{ moras: ["よ", "ん", "じ（ゅ）", "っ", "か", "い"], accent: 3 }] },
    { parts: [{ moras: ["よ", "ん", "じ（ゅ）", "っ", "か", "い"], accent: 1 }] }
  ] },
  { form: "五十回", readings: [{ parts: [{ moras: ["ご", "じ（ゅ）", "っ", "か", "い"], accent: 2 }] }] },
  { form: "六十回", readings: [{ parts: [{ moras: ["ろ", "く", "じ（ゅ）", "っ", "か", "い"], accent: 3 }] }] },
  { form: "七十回", readings: [{ parts: [{ moras: ["な", "な", "じ（ゅ）", "っ", "か", "い"], accent: 3 }] }] },
  { form: "八十回", readings: [{ parts: [{ moras: ["は", "ち", "じ（ゅ）", "っ", "か", "い"], accent: 3 }] }] },
  { form: "九十回", readings: [
    { parts: [{ moras: ["きゅ", "う", "じ（ゅ）", "っ", "か", "い"], accent: 3 }] },
    { parts: [{ moras: ["きゅ", "う", "じ（ゅ）", "っ", "か", "い"], accent: 1 }] }
  ] },
  { form: "百回", readings: [{ parts: [{ moras: ["ひゃ", "っ", "か", "い"], accent: -2 }] }] },
  { form: "千回", readings: [
    { parts: [{ moras: ["せ", "ん", "か", "い"], accent: 1 }] },
    { parts: [{ moras: ["せ", "ん", "か", "い"], accent: -2 }] }
  ] },
  { form: "一万回", readings: [{ parts: [{ moras: ["い", "ち", "ま", "ん", "か", "い"], accent: 0 }] }] },
  { form: "何回", readings: [
    { parts: [{ moras: ["な", "ん", "か", "い"], accent: 1 }] },
    { parts: [{ moras: ["な", "ん", "か", "い"], accent: -2 }] }
  ] }
];

const floorRows = [
  { form: "一階", readings: [{ parts: [{ moras: ["い", "っ", "か", "い"], accent: 0 }] }] },
  { form: "二階", readings: [{ parts: [{ moras: ["に", "か", "い"], accent: 0 }] }] },
  { form: "三階", readings: [{ parts: [{ moras: ["さ", "ん", "が", "い"], accent: 0 }] }] },
  { form: "四階", readings: [{ parts: [{ moras: ["よ", "ん", "か", "い"], accent: 0 }] }] },
  { form: "五階", readings: [{ parts: [{ moras: ["ご", "か", "い"], accent: 0 }] }] },
  { form: "六階", readings: [{ parts: [{ moras: ["ろ", "っ", "か", "い"], accent: 0 }] }] },
  { form: "七階", readings: [{ parts: [{ moras: ["な", "な", "か", "い"], accent: 0 }] }] },
  { form: "八階", readings: [
    { parts: [{ moras: ["は", "ち", "か", "い"], accent: 0, circled: [1] }] },
    { parts: [{ moras: ["は", "っ", "か", "い"], accent: 0 }] }
  ] },
  { form: "九階", readings: [{ parts: [{ moras: ["きゅ", "う", "か", "い"], accent: 0 }] }] },
  { form: "十階", readings: [
    { parts: [{ moras: ["じ", "っ", "か", "い"], accent: 0 }] },
    { parts: [{ moras: ["じゅ", "っ", "か", "い"], accent: 0 }] }
  ] },
  { form: "百階", readings: [{ parts: [{ moras: ["ひゃ", "っ", "か", "い"], accent: 0 }] }] },
  { form: "何階", readings: [
    { parts: [{ moras: ["な", "ん", "か", "い"], accent: 0 }] },
    { parts: [{ moras: ["な", "ん", "が", "い"], accent: 0 }] }
  ] }
];

const kaNotes = [
  {
    target: "〜ヶ月",
    text: "アクセント核は「か」に置かれる。"
  },
  {
    target: "〜か国",
    text: "〜か国（〜かこく）は、ヶ月と同じく促音化し、同じアクセント型になる。"
  },
  {
    target: "〜回",
    text: "主にアクセント核は「か」に置かれる。その場合には、副詞的に用いられると平板型になる。"
  },
  {
    target: "〜階",
    text: "アクセントは常に平板型になる。"
  }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#ka",
  sections: [
    { title: "〜ヶ月", rows: monthDurationRows },
    { title: "〜回", rows: countRows, rowsPerColumn: 12 },
    { title: "〜階", rows: floorRows }
  ],
  notesSelector: "#ka-notes",
  notes: kaNotes
});
