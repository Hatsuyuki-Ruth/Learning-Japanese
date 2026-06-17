"use strict";

const yearSections = [
  {
    title: "一年〜十年",
    rows: [
      { form: "一年", readings: [{ parts: [{ moras: ["い", "ち", "ね", "ん"], accent: 2 }] }] },
      { form: "二年", readings: [{ parts: [{ moras: ["に", "ね", "ん"], accent: 1 }] }] },
      { form: "三年", readings: [{ parts: [{ moras: ["さ", "ん", "ね", "ん"], accent: 0 }] }] },
      { form: "四年", readings: [{ parts: [{ moras: ["よ", "ね", "ん"], accent: 0 }] }] },
      { form: "五年", readings: [{ parts: [{ moras: ["ご", "ね", "ん"], accent: 0 }] }] },
      { form: "六年", readings: [{ parts: [{ moras: ["ろ", "く", "ね", "ん"], accent: 2 }] }] },
      { form: "七年", readings: [
        { parts: [{ moras: ["し", "ち", "ね", "ん"], accent: 2 }] },
        { parts: [{ moras: ["な", "な", "ね", "ん"], accent: 2 }] }
      ]},
      { form: "八年", readings: [{ parts: [{ moras: ["は", "ち", "ね", "ん"], accent: 2 }] }] },
      { form: "九年", readings: [
        { parts: [{ moras: ["く", "ね", "ん"], accent: 0 }] },
        { parts: [{ moras: ["きゅ", "う", "ね", "ん"], accent: 1 }] }
      ]},
      { form: "十年", readings: [{ parts: [{ moras: ["じゅ", "う", "ね", "ん"], accent: 1 }] }] }
    ]
  },
  {
    title: "十一年〜二十年",
    rows: [
      { form: "十一年", readings: [{ parts: [{ moras: ["じゅ", "う", "い", "ち", "ね", "ん"], accent: 4 }] }] },
      { form: "十二年", readings: [{ parts: [{ moras: ["じゅ", "う", "に", "ね", "ん"], accent: 3 }] }] },
      { form: "十三年", superscript: "☆", readings: [{ parts: [{ moras: ["じゅ", "う", "さ", "ん", "ね", "ん"], accent: 3 }] }] },
      { form: "十四年", superscript: "☆", readings: [
        { parts: [{ moras: ["じゅ", "う", "よ", "ね", "ん"], accent: 1 }] },
        { parts: [
          { moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["よ", "ね", "ん"], accent: 0 }
        ] }
      ]},
      { form: "十五年", superscript: "☆", readings: [
        { parts: [{ moras: ["じゅ", "う", "ご", "ね", "ん"], accent: 1 }] },
        { parts: [
          { moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "ね", "ん"], accent: 0 }
        ] }
      ]},
      { form: "十六年", readings: [{ parts: [{ moras: ["じゅ", "う", "ろ", "く", "ね", "ん"], accent: 4 }] }] },
      { form: "十七年", readings: [
        { parts: [{ moras: ["じゅ", "う", "し", "ち", "ね", "ん"], accent: 4 }] },
        { parts: [{ moras: ["じゅ", "う", "な", "な", "ね", "ん"], accent: 4 }] }
      ]},
      { form: "十八年", readings: [{ parts: [{ moras: ["じゅ", "う", "は", "ち", "ね", "ん"], accent: 4 }] }] },
      { form: "十九年", superscript: "☆", readings: [
        { parts: [{ moras: ["じゅ", "う", "きゅ", "う", "ね", "ん"], accent: 3 }] },
        { parts: [{ moras: ["じゅ", "う", "く", "ね", "ん"], accent: 1 }] },
        { parts: [
          { moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["く", "ね", "ん"], accent: 0 }
        ] }
      ]},
      { form: "二十年", readings: [{ parts: [{ moras: ["に", "じゅ", "ね", "ん"], accent: 2 }] }] }
    ]
  },
  {
    title: "二十一年以上",
    rows: [
      { form: "二十三年", superscript: "☆", readings: [
        { parts: [
          { moras: ["に", "じゅ", "う"], accent: 1 },
          { separator: "・" },
          { moras: ["さ", "ん", "ね", "ん"], accent: 0 }
        ] },
        { parts: [
          { moras: ["に", "じゅ", "う"], accent: 1 },
          { separator: "・" },
          { moras: ["さ", "ん", "ね", "ん"], accent: 1 }
        ] }
      ]},
      { form: "百年", readings: [{ parts: [{ moras: ["ひゃ", "く", "ね", "ん"], accent: 2 }] }] },
      { form: "千年", readings: [{ parts: [{ moras: ["せ", "ん", "ね", "ん"], accent: 1 }] }] },
      { form: "一万年", readings: [{ parts: [{ moras: ["い", "ち", "ま", "ん", "ね", "ん"], accent: 0 }] }] },
      { form: "何年", readings: [{ parts: [{ moras: ["な", "ん", "ね", "ん"], accent: 1 }] }] }
    ]
  }
];

const yearNotes = [
  {
    target: "十一年・十二年・十六年〜十九年",
    text: "十九年を「じゅうきゅうねん」と読む場合を含め、「じゅう」は平板型で読み、後ろに一年〜九年と同じ読み方・アクセント型を続ける。"
  },
  {
    target: "二十年・三十年・四十年など",
    text: "二十年・三十年・四十年などの十年単位では、「じゅ」にアクセント核を置く。"
  },
  {
    target: "二十三年・三十三年・四十三年など",
    text: "末尾の三年部分は平板型・頭高型のどちらでもよい。"
  }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#years",
  sections: yearSections,
  notesSelector: "#year-notes",
  notes: yearNotes
});
