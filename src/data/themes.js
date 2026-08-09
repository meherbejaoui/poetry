// Theme picklist. Every poem (original or AI-generated) tags into one or
// more of these. Labels are given in all three site languages so the theme
// picker itself previews the trilingual experience.
export const THEMES = [
  {
    id: "love-longing",
    icon: "🌹",
    label: { en: "Love & Longing", ar: "الحب والشوق", mn: "Хайр ба тэмүүлэл" },
  },
  {
    id: "exile-homeland",
    icon: "🗝️",
    label: { en: "Exile & Homeland", ar: "المنفى والوطن", mn: "Цөллөг ба эх орон" },
  },
  {
    id: "nature-seasons",
    icon: "🍃",
    label: { en: "Nature & Seasons", ar: "الطبيعة والفصول", mn: "Байгаль ба улирал" },
  },
  {
    id: "time-mortality",
    icon: "⏳",
    label: { en: "Time & Mortality", ar: "الزمن والفناء", mn: "Цаг хугацаа ба мөнх бус чанар" },
  },
  {
    id: "freedom-resistance",
    icon: "🔥",
    label: { en: "Freedom & Resistance", ar: "الحرية والمقاومة", mn: "Эрх чөлөө ба эсэргүүцэл" },
  },
  {
    id: "wisdom-reflection",
    icon: "🦉",
    label: { en: "Wisdom & Reflection", ar: "الحكمة والتأمل", mn: "Мэргэн ухаан ба эргэцүүлэл" },
  },
  {
    id: "friendship-loss",
    icon: "🕯️",
    label: { en: "Friendship & Loss", ar: "الصداقة والفقد", mn: "Нөхөрлөл ба алдагдал" },
  },
  {
    id: "pride-resilience",
    icon: "🌳",
    label: { en: "Pride & Resilience", ar: "الفخر والصمود", mn: "Бахархал ба тэсвэр хатуужил" },
  },
];

export const themeById = (id) => THEMES.find((t) => t.id === id);
