"use strict";

const dateRows = [
  { form: "一日", readings: [
    { label: "日付", parts: [{ moras: ["つ", "い", "た", "ち"], accent: -1 }] },
    { label: "日数", parts: [{ moras: ["い", "ち", "に", "ち"], accent: -1 }] }
  ] },
  { form: "二日", readings: [{ parts: [{ moras: ["ふ", "つ", "か"], accent: 0 }] }] },
  { form: "三日", readings: [{ parts: [{ moras: ["み", "っ", "か"], accent: 0 }] }] },
  { form: "四日", readings: [{ parts: [{ moras: ["よ", "っ", "か"], accent: 0 }] }] },
  { form: "五日", readings: [{ parts: [{ moras: ["い", "つ", "か"], accent: 0 }] }] },
  { form: "六日", readings: [{ parts: [{ moras: ["む", "い", "か"], accent: 0 }] }] },
  { form: "七日", readings: [
    { parts: [{ moras: ["な", "の", "か"], accent: 0 }] },
    { label: "古典日本語", parts: [{ moras: ["な", "ぬ", "か"], accent: 0 }] }
  ] },
  { form: "八日", readings: [{ parts: [{ moras: ["よ", "う", "か"], accent: 0 }] }] },
  { form: "九日", readings: [{ parts: [{ moras: ["こ", "こ", "の", "か"], accent: -1 }] }] },
  { form: "十日", readings: [{ parts: [{ moras: ["と", "お", "か"], accent: 0 }] }] },
  { form: "十一日", readings: [{ parts: [{ moras: ["じゅ", "う", "い", "ち", "に", "ち"], accent: -1 }] }] },
  { form: "十二日", readings: [{ parts: [{ moras: ["じゅ", "う", "に", "に", "ち"], accent: -1 }] }] },
  { form: "十三日", readings: [
    { parts: [{ moras: ["じゅ", "う", "さ", "ん", "に", "ち"], accent: 3 }] },
    { parts: [{ moras: ["じゅ", "う", "さ", "ん", "に", "ち"], accent: 1 }] }
  ] },
  { form: "十四日", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["よ", "っ", "か"], accent: 0 }] },
    { parts: [{ moras: ["じゅ", "う", "よ", "っ", "か"], accent: 1 }] }
  ] },
  { form: "十五日", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "に", "ち"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "ご", "に", "ち"], accent: 1 }] }
  ] },
  { form: "十六日", readings: [{ parts: [{ moras: ["じゅ", "う", "ろ", "く", "に", "ち"], accent: -1 }] }] },
  { form: "十七日", readings: [{ parts: [{ moras: ["じゅ", "う", "し", "ち", "に", "ち"], accent: -1 }] }] },
  { form: "十八日", readings: [{ parts: [{ moras: ["じゅ", "う", "は", "ち", "に", "ち"], accent: -1 }] }] },
  { form: "十九日", readings: [
    { parts: [{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["く", "に", "ち"], accent: 1 }] },
    { parts: [{ moras: ["じゅ", "う", "く", "に", "ち"], accent: 1 }] }
  ] },
  { form: "二十日", readings: [{ parts: [{ moras: ["は", "つ", "か"], accent: 0 }] }] },
  { form: "二十一日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["い", "ち", "に", "ち"], accent: -1 }
  ] }] },
  { form: "二十二日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["に", "に", "ち"], accent: -1 }
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
    { moras: ["ろ", "く", "に", "ち"], accent: -1 }
  ] }] },
  { form: "二十七日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["し", "ち", "に", "ち"], accent: -1 }
  ] }] },
  { form: "二十八日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["は", "ち", "に", "ち"], accent: -1 }
  ] }] },
  { form: "二十九日", readings: [{ parts: [
    { moras: ["に", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["く", "に", "ち"], accent: 1 }
  ] }] },
  { form: "三十日", readings: [{ parts: [{ moras: ["さ", "ん", "じゅ", "う", "に", "ち"], accent: 3 }] }] },
  { form: "三十一日", readings: [{ parts: [
    { moras: ["さ", "ん", "じゅ", "う"], accent: 1 },
    { separator: "・" },
    { moras: ["い", "ち", "に", "ち"], accent: 4 }
  ] }] },
  null,
  { form: "百日", readings: [
    { parts: [{ moras: ["ひゃ", "く", "に", "ち"], accent: -1 }] },
    { parts: [{ moras: ["ひゃ", "く", "に", "ち"], accent: 2 }] }
  ] },
  { form: "千日", readings: [
    { parts: [{ moras: ["せ", "ん", "に", "ち"], accent: 1 }] },
    { parts: [{ moras: ["せ", "ん", "に", "ち"], accent: -1 }] }
  ] },
  { form: "一万日", readings: [{ parts: [{ moras: ["い", "ち", "ま", "ん", "に", "ち"], accent: 0 }] }] },
  { form: "何日", readings: [{ parts: [{ moras: ["な", "ん", "に", "ち"], accent: 1 }] }] }
];

const dateNotes = [
  {
    target: "日数",
    text: [
      "日数の意味で用いる場合は、",
      `「〜${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["よ", "ん", "に", "ち"], accent: -4 }]
      })}」、`,
      `「〜${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["な", "な", "に", "ち"], accent: -3 }]
      })}・〜${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["な", "な", "に", "ち"], accent: -1 }]
      })}」、`,
      `「〜${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["きゅ", "う", "に", "ち"], accent: -4 }]
      })}」、`,
      `「${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["に", "じゅ", "う", "に", "ち"], accent: 1 }]
      })}・${JaPitchTables.renderReadingInline({
        parts: [{ moras: ["に", "じゅ", "う", "に", "ち"], accent: 2 }]
      })}」もよい。`
    ].join(""),
    translation: "When used to mean a number of days, the above alternatives are also acceptable."
  },
  {
    target: "尾高型",
    text: "副詞的に用いられると、尾高型は平板型になる。",
    translation: "When used adverbially, odaka forms become heiban."
  }
];

const dayDurationRows = [
  null,
  { form: "二日間", readings: [{ parts: [{ moras: ["ふ", "つ", "か", "か", "ん"], accent: -3 }] }] },
  { form: "三日間", readings: [{ parts: [{ moras: ["み", "っ", "か", "か", "ん"], accent: -3 }] }] },
  { form: "四日間", readings: [{ parts: [{ moras: ["よ", "っ", "か", "か", "ん"], accent: -3 }] }] },
  { form: "五日間", readings: [{ parts: [{ moras: ["い", "つ", "か", "か", "ん"], accent: -3 }] }] },
  { form: "六日間", readings: [{ parts: [{ moras: ["む", "い", "か", "か", "ん"], accent: -3 }] }] },
  { form: "七日間", readings: [{ parts: [{ moras: ["な", "の", "か", "か", "ん"], accent: -3 }] }] },
  { form: "八日間", readings: [{ parts: [{ moras: ["よ", "う", "か", "か", "ん"], accent: -3 }] }] },
  { form: "九日間", readings: [{ parts: [{ moras: ["こ", "こ", "の", "か", "か", "ん"], accent: -3 }] }] },
  { form: "十日間", readings: [{ parts: [{ moras: ["と", "お", "か", "か", "ん"], accent: -3 }] }] },
  { form: "二十日間", readings: [{ parts: [{ moras: ["は", "つ", "か", "か", "ん"], accent: -3 }] }] },
  { form: "何日間", readings: [{ parts: [{ moras: ["な", "ん", "に", "ち", "か", "ん"], accent: -3 }] }] }
];

const dayOrdinalRows = [
  { form: "一日目", readings: [{ parts: [{ moras: ["い", "ち", "に", "ち", "め"], accent: -1 }] }] },
  { form: "二日目", readings: [{ parts: [{ moras: ["ふ", "つ", "か", "め"], accent: -1 }] }] },
  { form: "三日目", readings: [{ parts: [{ moras: ["み", "っ", "か", "め"], accent: -1 }] }] },
  { form: "四日目", readings: [{ parts: [{ moras: ["よ", "っ", "か", "め"], accent: -1 }] }] },
  { form: "五日目", readings: [{ parts: [{ moras: ["い", "つ", "か", "め"], accent: -1 }] }] },
  { form: "六日目", readings: [{ parts: [{ moras: ["む", "い", "か", "め"], accent: -1 }] }] },
  { form: "七日目", readings: [{ parts: [{ moras: ["な", "の", "か", "め"], accent: -1 }] }] },
  { form: "八日目", readings: [{ parts: [{ moras: ["よ", "う", "か", "め"], accent: -1 }] }] },
  { form: "九日目", readings: [{ parts: [{ moras: ["こ", "こ", "の", "か", "め"], accent: -1 }] }] },
  { form: "十日目", readings: [{ parts: [{ moras: ["と", "お", "か", "め"], accent: -1 }] }] },
  { form: "二十日目", readings: [
    { parts: [{ moras: ["は", "つ", "か", "め"], accent: -1 }] },
    { parts: [{ moras: ["に", "じゅ", "う", "に", "ち", "め"], accent: -1 }] }
  ] },
  { form: "何日目", readings: [{ parts: [{ moras: ["な", "ん", "に", "ち", "め"], accent: -1 }] }] }
];

const dayDurationNotes = [
  {
    target: "〜日間",
    text: "アクセント核は常に「間」の直前の拍に置かれる。",
    translation: "The accent kernel is always placed on the mora immediately before 間."
  },
  {
    target: "〜日目",
    text: "アクセントは尾高型になる。",
    translation: "The accent kernel is on the last mora."
  },
  {
    target: "十日間・十日目以上",
    text: "「〜よっか〜・〜よんにち〜」、「〜しちにち〜・〜ななにち〜」、「〜くにち〜・〜きゅうにち〜」のいずれもよい。",
    translation: "For 10+ days, the pairs above are all acceptable."
  }
];

function ordinalDateReading(parts) {
  return {
    parts: [
      { moras: ["だ", "い"], accent: 1 },
      { separator: "・" },
      ...parts
    ]
  };
}

const ordinalDateRows = [
  { form: "第一日", readings: [ordinalDateReading([{ moras: ["い", "ち", "に", "ち"], accent: -1 }])] },
  { form: "第二日", readings: [ordinalDateReading([{ moras: ["に", "に", "ち"], accent: -1 }])] },
  { form: "第三日", readings: [ordinalDateReading([{ moras: ["さ", "ん", "に", "ち"], accent: 1 }])] },
  { form: "第四日", readings: [ordinalDateReading([{ moras: ["よ", "ん", "に", "ち"], accent: 1 }])] },
  { form: "第五日", readings: [ordinalDateReading([{ moras: ["ご", "に", "ち"], accent: 1 }])] },
  { form: "第六日", readings: [ordinalDateReading([{ moras: ["ろ", "く", "に", "ち"], accent: -1 }])] },
  { form: "第七日", readings: [ordinalDateReading([{ moras: ["し", "ち", "に", "ち"], accent: -1 }])] },
  { form: "第八日", readings: [ordinalDateReading([{ moras: ["は", "ち", "に", "ち"], accent: -1 }])] },
  { form: "第九日", readings: [
    ordinalDateReading([{ moras: ["く", "に", "ち"], accent: 1 }]),
    ordinalDateReading([{ moras: ["きゅ", "う", "に", "ち"], accent: 1 }])
  ] },
  { form: "第十日", superscript: "☆", readings: [ordinalDateReading([{ moras: ["じゅ", "う", "に", "ち"], accent: -1 }])] },
  { form: "第十一日", readings: [ordinalDateReading([{ moras: ["じゅ", "う", "い", "ち", "に", "ち"], accent: -1 }])] },
  { form: "第十二日", superscript: "☆", readings: [ordinalDateReading([{ moras: ["じゅ", "う", "に", "に", "ち"], accent: 3 }])] },
  { form: "第十三日", readings: [
    ordinalDateReading([{ moras: ["じゅ", "う", "さ", "ん", "に", "ち"], accent: 3 }])
  ] },
  { form: "第十四日", readings: [
    ordinalDateReading([{ moras: ["じゅ", "う", "よ", "ん", "に", "ち"], accent: 3 }])
  ] },
  { form: "第十五日", readings: [
    ordinalDateReading([{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["ご", "に", "ち"], accent: 1 }]),
    ordinalDateReading([{ moras: ["じゅ", "う", "ご", "に", "ち"], accent: 1 }])
  ] },
  { form: "第十六日", readings: [ordinalDateReading([{ moras: ["じゅ", "う", "ろ", "く", "に", "ち"], accent: -1 }])] },
  { form: "第十七日", readings: [ordinalDateReading([{ moras: ["じゅ", "う", "し", "ち", "に", "ち"], accent: -1 }])] },
  { form: "第十八日", readings: [ordinalDateReading([{ moras: ["じゅ", "う", "は", "ち", "に", "ち"], accent: -1 }])] },
  { form: "第十九日", readings: [
    ordinalDateReading([{ moras: ["じゅ", "う"], accent: 1 }, { separator: "・" }, { moras: ["く", "に", "ち"], accent: 1 }]),
    ordinalDateReading([{ moras: ["じゅ", "う", "く", "に", "ち"], accent: 1 }]),
    ordinalDateReading([{ moras: ["じゅ", "う", "きゅ", "う", "に", "ち"], accent: 3 }])
  ] },
  { form: "第二十日", readings: [ordinalDateReading([{ moras: ["に", "じゅ", "う", "に", "ち"], accent: 2 }])] },
  { form: "第何日", readings: [ordinalDateReading([{ moras: ["な", "ん", "に", "ち"], accent: 1 }])] }
];

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#dates",
  sections: [
    { title: "日付・日数", rows: dateRows, rowsPerColumn: 10 }
  ],
  notesSelector: "#date-notes",
  notes: dateNotes
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#day-durations",
  sections: [
    { title: "日間", rows: dayDurationRows },
    { title: "日目", rows: dayOrdinalRows }
  ],
  notesSelector: "#day-duration-notes",
  notes: dayDurationNotes
});

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#ordinal-dates",
  sections: [
    { title: "第◯日", rows: ordinalDateRows, rowsPerColumn: 10 }
  ]
});
