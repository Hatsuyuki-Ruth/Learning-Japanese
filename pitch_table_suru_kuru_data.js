"use strict";

const suruKuruRows = [
  {
    term: "普通形",
    suru: {
      forms: ["する"],
      readings: [[{ moras: ["す", "る"], accent: 0 }]]
    },
    kuru: {
      forms: ["来る"],
      readings: [[{ moras: ["く", "る"], accent: 1 }]]
    }
  },
  {
    term: "接続形",
    suru: {
      forms: ["して"],
      readings: [[{ moras: ["し", "て"], accent: 0 }]]
    },
    kuru: {
      forms: ["来て"],
      readings: [[{ moras: ["き", "て"], accent: 1 }]]
    }
  },
  {
    term: "過去形",
    suru: {
      forms: ["した"],
      readings: [[{ moras: ["し", "た"], accent: 0 }]]
    },
    kuru: {
      forms: ["来た"],
      readings: [[{ moras: ["き", "た"], accent: 1 }]]
    }
  },
  {
    term: "否定形",
    suru: {
      forms: ["しない"],
      readings: [[{ moras: ["し", "な", "い"], accent: 0 }]]
    },
    kuru: {
      forms: ["来ない"],
      readings: [[{ moras: ["こ", "な", "い"], accent: 1 }]]
    }
  },
  {
    term: "否定過去形",
    suru: {
      forms: ["しなかった"],
      readings: [[{ moras: ["し", "な", "か", "っ", "た"], accent: 2 }]]
    },
    kuru: {
      forms: ["来なかった"],
      readings: [[{ moras: ["こ", "な", "か", "っ", "た"], accent: 1 }]]
    }
  },
  {
    term: "条件形",
    suru: {
      forms: ["すれば"],
      readings: [[{ moras: ["す", "れ", "ば"], accent: 2 }]]
    },
    kuru: {
      forms: ["来れば"],
      readings: [[{ moras: ["く", "れ", "ば"], accent: 1 }]]
    }
  },
  {
    term: "過去条件形",
    suru: {
      forms: ["したら"],
      readings: [[{ moras: ["し", "た", "ら"], accent: 2 }]]
    },
    kuru: {
      forms: ["来たら"],
      readings: [[{ moras: ["き", "た", "ら"], accent: 1 }]]
    }
  },
  {
    term: "命令形",
    suru: {
      forms: ["しろ", "せよ"],
      readings: [
        [{ moras: ["し", "ろ"], accent: 0 }],
        [{ moras: ["せ", "よ"], accent: 1 }]
      ]
    },
    kuru: {
      forms: ["来い"],
      readings: [[{ moras: ["こ", "い"], accent: 1 }]]
    }
  },
  {
    term: "意志形",
    suru: {
      forms: ["しよう"],
      readings: [[{ moras: ["し", "よ", "ー"], accent: 2 }]]
    },
    kuru: {
      forms: ["来よう"],
      readings: [[{ moras: ["こ", "よ", "ー"], accent: 2 }]]
    }
  },
  {
    term: "希望形",
    suru: {
      forms: ["したい"],
      readings: [[{ moras: ["し", "た", "い"], accent: 0 }]]
    },
    kuru: {
      forms: ["来たい"],
      readings: [[{ moras: ["き", "た", "い"], accent: 2 }]]
    }
  },
  {
    term: "丁寧形",
    suru: {
      forms: ["します"],
      readings: [[{ moras: ["し", "ま", "す"], accent: 2 }]]
    },
    kuru: {
      forms: ["来ます"],
      readings: [[{ moras: ["き", "ま", "す"], accent: 2 }]]
    }
  },
  {
    term: "丁寧否定形",
    suru: {
      forms: ["しません"],
      readings: [[{ moras: ["し", "ま", "せ", "ん"], accent: 3 }]]
    },
    kuru: {
      forms: ["来ません"],
      readings: [[{ moras: ["き", "ま", "せ", "ん"], accent: 3 }]]
    }
  },
  {
    term: "丁寧意志形",
    suru: {
      forms: ["しましょう"],
      readings: [[{ moras: ["し", "ま", "しょ", "ー"], accent: 3 }]]
    },
    kuru: {
      forms: ["来ましょう"],
      readings: [[{ moras: ["き", "ま", "しょ", "ー"], accent: 3 }]]
    }
  },
  {
    term: "丁寧過去形",
    suru: {
      forms: ["しました"],
      readings: [[{ moras: ["し", "ま", "し", "た"], accent: 2 }]]
    },
    kuru: {
      forms: ["来ました"],
      readings: [[{ moras: ["き", "ま", "し", "た"], accent: 2 }]]
    }
  },
  {
    term: "連用形",
    suru: {
      forms: ["し", "しに"],
      readings: [
        [{ moras: ["し"], accent: 0 }],
        [{ moras: ["し", "に"], accent: 0 }]
      ]
    },
    kuru: {
      forms: ["来", "来に"],
      readings: [
        [{ moras: ["き"], accent: 1 }],
        [{ moras: ["き", "に"], accent: 1 }]
      ]
    }
  },
  {
    term: "否定連用形",
    suru: {
      forms: ["せず", "せずに"],
      readings: [
        [{ moras: ["せ", "ず"], accent: 1 }],
        [{ moras: ["せ", "ず"], accent: 1 }, { separator: " " }, { moras: ["に"], accent: 0 }]
      ]
    },
    kuru: {
      forms: ["来ず", "来ずに"],
      readings: [
        [{ moras: ["こ", "ず"], accent: 1 }],
        [{ moras: ["こ", "ず"], accent: 1 }, { separator: " " }, { moras: ["に"], accent: 0 }]
      ]
    }
  },
  {
    term: "受身形",
    suru: {
      forms: ["される"],
      readings: [[{ moras: ["さ", "れ", "る"], accent: 0 }]]
    },
    kuru: {
      forms: ["来られる"],
      readings: [[{ moras: ["こ", "ら", "れ", "る"], accent: 3 }]]
    }
  },
  {
    term: "使役形",
    suru: {
      forms: ["させる", "さす"],
      readings: [
        [{ moras: ["さ", "せ", "る"], accent: 0 }],
        [{ moras: ["さ", "す"], accent: 0 }]
      ]
    },
    kuru: {
      forms: ["来させる", "来さす"],
      readings: [
        [{ moras: ["こ", "さ", "せ", "る"], accent: 3 }],
        [{ moras: ["こ", "さ", "す"], accent: 2 }]
      ]
    }
  },
  {
    term: "可能形",
    suru: {
      forms: ["できる"],
      readings: [[{ moras: ["で", "き", "る"], accent: 2 }]]
    },
    kuru: {
      forms: ["来られる"],
      readings: [[{ moras: ["こ", "ら", "れ", "る"], accent: 3 }]]
    }
  }
];

function conjugationEntry(entry) {
  return {
    entries: entry.forms.map((form, index) => ({
      form,
      readings: [{ parts: entry.readings[index] }]
    }))
  };
}

JaPitchTables.renderSectionColumnAccentTable({
  tableSelector: "#suru-kuru",
  rowHeaderTitle: "形式",
  rowHeaders: suruKuruRows.map(row => row.term),
  sectionColumnLabels: ["語形", "アクセント表記"],
  sections: [
    {
      title: "する",
      rows: suruKuruRows.map(row => conjugationEntry(row.suru))
    },
    {
      title: "来る",
      rows: suruKuruRows.map(row => conjugationEntry(row.kuru))
    }
  ]
});
