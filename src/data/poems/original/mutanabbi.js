// These are famous individual verses of al-Mutanabbī's — widely quoted on
// their own — but each is genuinely pulled from a longer qaṣīda, not a
// complete poem in itself. isExcerpt is true throughout for that reason.
// Arabic text is cross-checked against multiple published sources; English
// and Mongolian are original AI-assisted translations for this project,
// not scholarly ones — see translationCredit on each entry.
export const mutanabbiPoems = [
  {
    id: "mutanabbi-ana-alladhi",
    poet: "mutanabbi",
    sourceLang: "ar",
    era: "10th century CE",
    form: "Qaṣīda excerpt (2 bayts)",
    isExcerpt: true,
    sourceNote:
      "Opening verses of a longer qaṣīda on the reach of his own poetry — extremely famous on their own, but part of a fuller ode.",
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
    form: "Qaṣīda excerpt (single bayt)",
    isExcerpt: true,
    sourceNote:
      "A single verse, extremely widely quoted on its own, but originally part of a longer qaṣīda.",
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
    form: "Qaṣīda excerpt (single bayt)",
    isExcerpt: true,
    sourceNote:
      "A single verse from the qaṣīda known as \"Wa Ḥarra Qalbāh,\" written in reproach to Sayf al-Dawla.",
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
    form: "Qaṣīda excerpt (opening bayt)",
    isExcerpt: true,
    sourceNote:
      "Opening verse of a 36-verse qaṣīda of the same name.",
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
