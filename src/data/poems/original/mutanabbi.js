// Al-Mutanabbī pieces are short, independently famous verses/couplets
// rather than full long qaṣīdas — safer to reproduce accurately and a
// better fit for a poem-card UI than a 40+ verse ode. Arabic text is
// cross-checked against multiple published sources; English and Mongolian
// are original AI-assisted translations for this project, not scholarly
// ones — see translationCredit on each entry.
export const mutanabbiPoems = [
  {
    id: "mutanabbi-ala-qadr-al-azm",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Qaṣīda excerpt (opening couplet)",
    isExcerpt: true,
    sourceNote:
      "Opening couplet of a 46-verse qaṣīda in praise of Sayf al-Dawla, composed on the recapture of al-Ḥadath.",
    themes: ["pride-resilience", "wisdom-reflection", "freedom-resistance"],
    translationCredit: "AI-assisted translation",
    translations: {
      ar: {
        title: "عَلى قَدرِ أَهلِ العَزمِ",
        lines: [
          "عَلى قَدرِ أَهلِ العَزمِ تَأتي العَزائِمُ   ***   وَتَأتي عَلى قَدرِ الكِرامِ المَكارِمُ",
          "وَتَعظُمُ في عَينِ الصَغيرِ صِغارُها   ***   وَتَصغُرُ في عَينِ العَظيمِ العَظائِمُ",
        ],
      },
      en: {
        title: "In the Measure of Resolve",
        lines: [
          "Resolve arrives in the measure of those who hold it — and generosity arrives in the measure of the noble.",
          "Small things loom large in the eyes of the small; mighty things shrink in the eyes of the great.",
        ],
      },
      mn: {
        title: "Зоригийн хэмжээгээр",
        lines: [
          "Шийдэмгий байдал эзнийхээ зоригийн хэмжээгээр ирдэг — өгөөмөр чанар ч эрхэм хүний хэмжээгээр ирдэг.",
          "Өчүүхэн зүйл жижиг сэтгэлтэй хүний нүдэнд асар том харагдана, харин агуу их зүйл агуу сэтгэлтэй хүний нүдэнд өчүүхэн харагдана.",
        ],
      },
    },
  },
  {
    id: "mutanabbi-madhammati",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Single-verse aphorism (bayt)",
    isExcerpt: false,
    sourceNote: "A widely quoted standalone verse from al-Mutanabbī's dīwān.",
    themes: ["pride-resilience"],
    translationCredit: "AI-assisted translation",
    translations: {
      ar: {
        title: "مَذَمَّتي مِن ناقِصٍ",
        lines: [
          "وَإِذا أَتَتكَ مَذَمَّتي مِن ناقِصٍ   ***   فَهِيَ الشَهادَةُ لي بِأَنِّيَ كامِلُ",
        ],
      },
      en: {
        title: "Testimony",
        lines: [
          "If disparagement of me should reach you from one deficient — that itself is testimony that I am complete.",
        ],
      },
      mn: {
        title: "Гэрчлэл",
        lines: [
          "Хэрэв над тухай гүтгэлэг дутагдалтай хүнээс чамд хүрвэл, энэ нь өөрөө миний төгс болохын гэрчлэл мөн.",
        ],
      },
    },
  },
  {
    id: "mutanabbi-wa-harra-qalbah",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Qaṣīda excerpt (opening verse)",
    isExcerpt: true,
    sourceNote:
      "Opening verse of the qaṣīda known as \"Wa Ḥarra Qalbāh,\" written in reproach to Sayf al-Dawla.",
    themes: ["friendship-loss", "pride-resilience"],
    translationCredit: "AI-assisted translation",
    translations: {
      ar: {
        title: "واحَرَّ قَلباه",
        lines: [
          "واحَرَّ قَلبَاهُ مِمَّن قَلبُهُ شَبِمُ   ***   وَمَن بِجِسمي وَحالي عِندَهُ سَقَمُ",
        ],
      },
      en: {
        title: "The Burning of My Heart",
        lines: [
          "Oh, the burning of my heart — from one whose own heart is frost, to whom my body and my state are nothing but an illness.",
        ],
      },
      mn: {
        title: "Зүрхний шаталт",
        lines: [
          "Ай, миний зүрхний шаталт — зүрх нь мөс мэт хүйтэн хүнээс болж; миний бие, миний байдал түүнд зөвхөн өвчин мэт л санагддаг.",
        ],
      },
    },
  },
  {
    id: "mutanabbi-dhu-al-aql",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Single-verse aphorism (bayt)",
    isExcerpt: false,
    sourceNote: "A widely quoted standalone verse from al-Mutanabbī's dīwān.",
    themes: ["wisdom-reflection"],
    translationCredit: "AI-assisted translation",
    translations: {
      ar: {
        title: "ذو العقل يشقى",
        lines: [
          "ذُو العَقلِ يَشقى فِي النَعيمِ بِعَقلِهِ   ***   وَأَخو الجَهالَةِ فِي الشَقاوَةِ يَنعَمُ",
        ],
      },
      en: {
        title: "The Clear-Sighted Man",
        lines: [
          "The clear-sighted man suffers, even amid ease, because of his own clear sight — while the fool, even amid misery, lives content.",
        ],
      },
      mn: {
        title: "Ухаантай хүн",
        lines: [
          "Ухаантай хүн тайван цагтаа ч гэсэн өөрийн ухаанаас болж зовдог — харин мунхаг хүн зовлон зүдгүүрийн дунд ч сэтгэл хангалуун амьдардаг.",
        ],
      },
    },
  },
];
