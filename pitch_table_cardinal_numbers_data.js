"use strict";

const cardinalNumberSections = [
  {
    title: "一〜十",
    rows: [
      { form: "一", readings: [{ parts: [{ moras: ["い", "ち"], accent: 2 }] }] },
      { form: "二", readings: [{ parts: [{ moras: ["に"], accent: 1 }] }] },
      { form: "三", readings: [{ parts: [{ moras: ["さ", "ん"], accent: 0 }] }] },
      { form: "四", readings: [
        { parts: [{ moras: ["よ", "ん"], accent: 1 }] },
        { parts: [{ moras: ["し"], accent: 1 }] }
      ]},
      { form: "五", readings: [{ parts: [{ moras: ["ご"], accent: 1 }] }] },
      { form: "六", readings: [{ parts: [{ moras: ["ろ", "く"], accent: 2 }] }] },
      { form: "七", readings: [
        { parts: [{ moras: ["な", "な"], accent: 1 }] },
        { parts: [{ moras: ["し", "ち"], accent: 2 }] }
      ]},
      { form: "八", readings: [{ parts: [{ moras: ["は", "ち"], accent: 2 }] }] },
      { form: "九", readings: [
        { parts: [{ moras: ["きゅ", "う"], accent: 1 }] },
        { parts: [{ moras: ["く"], accent: 1 }] }
      ]},
      { form: "十", readings: [{ parts: [{ moras: ["じゅ", "う"], accent: 1 }] }] }
    ]
  },
  {
    title: "十一〜十九",
    rows: [
      { form: "十一", readings: [{ parts: [{ moras: ["じゅ", "う", "い", "ち"], accent: 4 }] }] },
      { form: "十二", readings: [{ parts: [{ moras: ["じゅ", "う", "に"], accent: 3 }] }] },
      { form: "十三", readings: [
        { label: "一語型", parts: [{ moras: ["じゅ", "う", "さ", "ん"], accent: 1 }] },
        { label: "複合型", parts: [
          { moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["さ", "ん"], accent: 0 }
        ] }
      ]},
      { form: "十四", readings: [
        { parts: [{ moras: ["じゅ", "う", "よ", "ん"], accent: 3 }] },
        { parts: [{ moras: ["じゅ", "う", "し"], accent: 3 }] }
      ]},
      { form: "十五", readings: [
        { label: "一語型", parts: [{ moras: ["じゅ", "う", "ご"], accent: 1 }] },
        { label: "複合型", parts: [
          { moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご"], accent: 1 }
        ] }
      ]},
      { form: "十六", readings: [{ parts: [{ moras: ["じゅ", "う", "ろ", "く"], accent: 4 }] }] },
      { form: "十七", readings: [
        { parts: [{ moras: ["じゅ", "う", "な", "な"], accent: 3 }] },
        { parts: [{ moras: ["じゅ", "う", "し", "ち"], accent: 4 }] }
      ]},
      { form: "十八", readings: [{ parts: [{ moras: ["じゅ", "う", "は", "ち"], accent: 4 }] }] },
      { form: "十九", readings: [
        { parts: [{ moras: ["じゅ", "う", "きゅ", "う"], accent: 3 }] },
        { label: "一語型", parts: [{ moras: ["じゅ", "う", "く"], accent: 1 }] },
        { label: "複合型", parts: [
          { moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["く"], accent: 1 }
        ] }
      ]}
    ]
  },
  {
    title: "二十以上",
    rows: [
      { form: "二十", readings: [{ parts: [{ moras: ["に", "じゅ", "う"], accent: 1 }] }] },
      { form: "三十", readings: [{ parts: [{ moras: ["さ", "ん", "じゅ", "う"], accent: 1 }] }] },
      { form: "四十", readings: [{ parts: [{ moras: ["よ", "ん", "じゅ", "う"], accent: 1 }] }] },
      { form: "五十", readings: [{ parts: [{ moras: ["ご", "じゅ", "う"], accent: 2 }] }] },
      { form: "六十", readings: [{ parts: [{ moras: ["ろ", "く", "じゅ", "う"], accent: 3 }] }] },
      { form: "七十", readings: [{ parts: [{ moras: ["な", "な", "じゅ", "う"], accent: 2 }] }] },
      { form: "八十", readings: [{ parts: [{ moras: ["は", "ち", "じゅ", "う"], accent: 3 }] }] },
      { form: "九十", readings: [{ parts: [{ moras: ["きゅ", "う", "じゅ", "う"], accent: 1 }] }] }
    ]
  },
  {
    title: "百",
    rows: [
      { form: "百", readings: [{ parts: [{ moras: ["ひゃ", "く"], accent: 2 }] }] },
      { form: "二百", readings: [{ parts: [{ moras: ["に", "ひゃ", "く"], accent: 3 }] }] },
      { form: "三百", readings: [{ parts: [{ moras: ["さ", "ん", "びゃ", "く"], accent: 1 }] }] },
      { form: "四百", readings: [{ parts: [{ moras: ["よ", "ん", "ひゃ", "く"], accent: 1 }] }] },
      { form: "五百", readings: [{ parts: [{ moras: ["ご", "ひゃ", "く"], accent: 3 }] }] },
      { form: "六百", readings: [{ parts: [{ moras: ["ろ", "っ", "ぴゃ", "く"], accent: 4 }] }] },
      { form: "七百", readings: [{ parts: [{ moras: ["な", "な", "ひゃ", "く"], accent: 2 }] }] },
      { form: "八百", readings: [{ parts: [{ moras: ["は", "っ", "ぴゃ", "く"], accent: 4 }] }] },
      { form: "九百", readings: [{ parts: [{ moras: ["きゅ", "う", "ひゃ", "く"], accent: 1 }] }] }
    ]
  },
  {
    title: "千・万",
    rows: [
      { form: "千", readings: [{ parts: [{ moras: ["せ", "ん"], accent: 1 }] }] },
      { form: "一千", readings: [{ parts: [{ moras: ["い", "っ", "せ", "ん"], accent: 3 }] }] },
      { form: "三千", readings: [{ parts: [{ moras: ["さ", "ん", "ぜ", "ん"], accent: 3 }] }] },
      { form: "八千", readings: [{ parts: [{ moras: ["は", "っ", "せ", "ん"], accent: 3 }] }] },
      { form: "一万", readings: [{ parts: [{ moras: ["い", "ち", "ま", "ん"], accent: 3 }] }] },
      { form: "百万", readings: [{ parts: [{ moras: ["ひゃ", "く", "ま", "ん"], accent: 3 }] }] }
    ]
  },
  {
    title: "億",
    rows: [
      { form: "一億", readings: [{ parts: [{ moras: ["い", "ち", "お", "く"], accent: 2 }] }] },
      { form: "二億", readings: [{ parts: [{ moras: ["に", "お", "く"], accent: 1 }] }] },
      { form: "三億", readings: [{ parts: [{ moras: ["さ", "ん", "お", "く"], accent: 1 }] }] },
      { form: "四億", readings: [{ parts: [{ moras: ["よ", "ん", "お", "く"], accent: 1 }] }] },
      { form: "五億", readings: [{ parts: [{ moras: ["ご", "お", "く"], accent: 1 }] }] },
      { form: "六億", readings: [{ parts: [{ moras: ["ろ", "く", "お", "く"], accent: 2 }] }] },
      { form: "七億", readings: [{ parts: [{ moras: ["な", "な", "お", "く"], accent: 2 }] }] },
      { form: "八億", readings: [{ parts: [{ moras: ["は", "ち", "お", "く"], accent: 2 }] }] },
      { form: "九億", readings: [{ parts: [{ moras: ["きゅ", "う", "お", "く"], accent: 1 }] }] },
      { form: "十億", readings: [{ parts: [{ moras: ["じゅ", "う", "お", "く"], accent: 1 }] }] }
    ]
  },
  {
    title: "何",
    rows: [
      { form: "何十", readings: [{ parts: [{ moras: ["な", "ん", "じゅ", "う"], accent: 1 }] }] },
      { form: "何百", readings: [{ parts: [{ moras: ["な", "ん", "びゃ", "く"], accent: 1 }] }] },
      { form: "何千", readings: [{ parts: [{ moras: ["な", "ん", "ぜ", "ん"], accent: 3 }] }] },
      { form: "何万", readings: [
        { parts: [{ moras: ["な", "ん", "ま", "ん"], accent: 3 }] },
        { parts: [{ moras: ["な", "ん", "ま", "ん"], accent: 1 }] }
      ]},
      { form: "何億", readings: [{ parts: [{ moras: ["な", "ん", "お", "く"], accent: 1 }] }] }
    ]
  }
];

const cardinalNumberNotes = [
  {
    target: "五十一〜五十九・六十一〜六十九・八十一〜八十九",
    text: [
      "五十・六十・八十に一の位が続く場合、十の位の部分は平板型になる。",
      `例えば、五十三：${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["ご", "じゅ", "う", "さ", "ん"], accent: 0 }]
      })}`
    ].join("<br>")
  },
  {
    target: "その他の二十一〜九十九",
    text: "十の位と一の位を分けて読む複合型として示した。"
  },
  {
    target: "千・万",
    text: [
      "アクセント核は後ろから2拍目に置かれる。",
      "四〜：よん〜、七〜：なな〜、九〜：きゅう〜"
    ].join("<br>")
  },
  {
    target: "十五億",
    text: `『NHK日本語発音アクセント新辞典』：
    ${JaPitchTables.renderReadingInline({
      parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "お", "く"], accent: 1 }]
    })}、
    ${JaPitchTables.renderReadingInline({
      parts: [{ moras: ["じゅ", "う", "ご", "お", "く"], accent: 1 }]
    })}`
  }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#numbers",
  sections: cardinalNumberSections,
  notesSelector: "#number-notes",
  notes: cardinalNumberNotes
});
