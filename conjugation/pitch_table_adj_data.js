"use strict";

const adjectiveRows = [
  {
    term: "普通形",
    asai: {
      form: "浅い",
      readings: [
        [{ moras: ["あ", "さ", "い"], accent: 0 }]
      ]
    },
    fukai: {
      form: "深い",
      readings: [
        [{ moras: ["ふ", "か", "い"], accent: 2 }]
      ]
    }
  },
  {
    term: "接続形",
    asai: {
      form: "浅くて",
      readings: [
        [{ moras: ["あ", "さ", "く", "て"], accent: 2, circled: [2] }]
      ]
    },
    fukai: {
      form: "深くて",
      readings: [
        [{ moras: ["ふ", "か", "く", "て"], accent: 2, circled: [2] }],
        [{ moras: ["ふ", "か", "く", "て"], accent: 1, circled: [2] }]
      ]
    }
  },
  {
    term: "連用形",
    asai: {
      form: "浅く",
      readings: [
        [{ moras: ["あ", "さ", "く"], accent: 0 }]
      ]
    },
    fukai: {
      form: "深く",
      readings: [
        [{ moras: ["ふ", "か", "く"], accent: 2 }],
        [{ moras: ["ふ", "か", "く"], accent: 1 }]
      ]
    }
  },
  {
    term: "否定形",
    asai: {
      form: "浅くない",
      readings: [
        [
          { moras: ["あ", "さ", "く"], accent: 0 },
          { separator: "・" },
          { moras: ["な", "い"], accent: 1 }
        ]
      ]
    },
    fukai: {
      form: "深くない",
      readings: [
        [
          { moras: ["ふ", "か", "く"], accent: 2 },
          { separator: "・" },
          { moras: ["な", "い"], accent: 1 }
        ],
        [
          { moras: ["ふ", "か", "く"], accent: 1 },
          { separator: "・" },
          { moras: ["な", "い"], accent: 1 }
        ]
      ]
    }
  },
  {
    term: "過去形",
    asai: {
      form: "浅かった",
      readings: [
        [{ moras: ["あ", "さ", "か", "っ", "た"], accent: 2 }]
      ]
    },
    fukai: {
      form: "深かった",
      readings: [
        [{ moras: ["ふ", "か", "か", "っ", "た"], accent: 2 }],
        [{ moras: ["ふ", "か", "か", "っ", "た"], accent: 1 }]
      ]
    }
  },
  {
    term: "否定過去形",
    asai: {
      form: "浅くなかった",
      readings: [
        [
          { moras: ["あ", "さ", "く"], accent: 0 },
          { separator: "・" },
          { moras: ["な", "か", "っ", "た"], accent: 1 }
        ]
      ]
    },
    fukai: {
      form: "深くなかった",
      readings: [
        [
          { moras: ["ふ", "か", "く"], accent: 2 },
          { separator: "・" },
          { moras: ["な", "か", "っ", "た"], accent: 1 }
        ],
        [
          { moras: ["ふ", "か", "く"], accent: 1 },
          { separator: "・" },
          { moras: ["な", "か", "っ", "た"], accent: 1 }
        ]
      ]
    }
  },
  {
    term: "条件形",
    asai: {
      form: "浅ければ",
      readings: [
        [{ moras: ["あ", "さ", "け", "れ", "ば"], accent: 2 }]
      ]
    },
    fukai: {
      form: "深ければ",
      readings: [
        [{ moras: ["ふ", "か", "け", "れ", "ば"], accent: 2 }],
        [{ moras: ["ふ", "か", "け", "れ", "ば"], accent: 1 }]
      ]
    }
  },
  {
    term: "終止形",
    asai: {
      form: "浅い",
      readings: [
        [{ moras: ["あ", "さ", "い"], accent: 0 }],
        [{ moras: ["あ", "さ", "い"], accent: 2 }]
      ]
    },
    fukai: {
      form: "深い",
      readings: [
        [{ moras: ["ふ", "か", "い"], accent: 2 }]
      ]
    }
  },
  {
    term: "丁寧形",
    asai: {
      form: "浅いです",
      readings: [
        [{ moras: ["あ", "さ", "い", "で", "す"], accent: 2 }]
      ]
    },
    fukai: {
      form: "深いです",
      readings: [
        [{ moras: ["ふ", "か", "い", "で", "す"], accent: 2 }]
      ]
    }
  }
];

const adjectiveNotes = [
  {
    target: "深い",
    text: "深いの活用形では「ふ」も無声化する。",
    translation: "The ふ in the inflected forms of 深い is also devoiced."
  }
];

function adjectiveEntry(entry) {
  return {
    form: entry.form,
    readings: entry.readings.map(parts => ({ parts }))
  };
}

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#adj",
  rowHeaderTitle: "形式",
  rowHeaders: adjectiveRows.map(row => row.term),
  sectionColumnLabels: ["語形", "アクセント表記"],
  sections: [
    {
      title: "浅い",
      rows: adjectiveRows.map(row => adjectiveEntry(row.asai))
    },
    {
      title: "深い",
      rows: adjectiveRows.map(row => adjectiveEntry(row.fukai))
    }
  ],
  notesSelector: "#adj-notes",
  notes: adjectiveNotes
});
