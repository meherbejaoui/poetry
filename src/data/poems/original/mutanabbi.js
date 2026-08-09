// Al-Mutanabbī pieces are short, independently famous verses/couplets
// rather than full long qaṣīdas — safer to reproduce accurately and a
// better fit for a poem-card UI than a 40+ verse ode. Arabic text is
// cross-checked against multiple published sources; English and Mongolian
// are original AI-assisted translations for this project, not scholarly
// ones — see translationCredit on each entry.
export const mutanabbiPoems = [
  {
    id: "mutanabbi-ana-alladhi",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Complete qiṭʿa (2 bayts)",
    isExcerpt: false,
    sourceNote:
      "A famous, self-contained pair of verses on the reach of his own poetry — widely quoted independently of the longer poem they open.",
    themes: ["pride-resilience", "wisdom-reflection"],
    translationCredit: "AI-assisted translation",
    translations: {
      ar: {
        title: "أَنا الَّذي نَظَرَ الأَعمى",
        lines: [
          "أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي   ***   وَأَسمَعَت كَلِماتي مَن بِهِ صَمَمُ",
          "أَنامُ مِلءَ جُفوني عَن شَوارِدِها   ***   وَيَسهَرُ الخَلقُ جَرّاها وَيَختَصِمُ",
        ],
      },
      en: {
        title: "I Am the One the Blind Have Seen",
        lines: [
          "I am the one whose literary genius made the blind see it, and whose words made the deaf hear them.",
          "I sleep with my eyes shut to the stray thoughts of my verse, while the world stays up all night over it, arguing.",
        ],
      },
      mn: {
        title: "Сохор хүн намайг харсан",
        lines: [
          "Би бол зохиолын билгээрээ сохор хүнийг харуулсан, дүлий хүнд үгээ сонсгосон хүн мөн.",
          "Би шүлгийнхээ учрыг бодолгүй нүдээ анин унтдаг, харин ертөнц үүнийг маргалдан шөнөжин сэрүүн байдаг.",
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
    id: "mutanabbi-idha-raayta",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Single-verse aphorism (bayt)",
    isExcerpt: false,
    sourceNote: "A widely quoted standalone verse from al-Mutanabbī's dīwān.",
    themes: ["wisdom-reflection", "pride-resilience"],
    translationCredit: "AI-assisted translation",
    translations: {
      ar: {
        title: "نُيوبُ الَّليث",
        lines: [
          "إِذا رَأَيتَ نُيوبَ الَّليثِ بارِزَةً   ***   فَلا تَظُنَّنَّ أَنَّ الَّليثَ يَبتَسِمُ",
        ],
      },
      en: {
        title: "The Lion's Fangs",
        lines: [
          "If you see the lion's fangs bared, do not think for a moment that the lion is smiling.",
        ],
      },
      mn: {
        title: "Арслангийн соёо",
        lines: [
          "Хэрэв чи арслангийн ил гарсан соёог харвал, арслан инээмсэглэж байна гэж бүү бод.",
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
