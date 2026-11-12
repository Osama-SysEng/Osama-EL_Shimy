# 🚀 Osama Mohamed Fathy — 3D Portfolio & AI Platform

[![NASA Space Apps Challenge 2025](https://img.shields.io/badge/NASA%20Space%20Apps-Local%20Winner%202025-gold.svg)](https://www.spaceappschallenge.org/)
[![Google DevFest](https://img.shields.io/badge/Google%20DevFest%20Egypt%202025-1st%20Place-blue.svg)](https://developers.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-cyan.svg)](https://osama-syseng.github.io/osama-fathy-portfolio/)

> **الموقع الشخصي التفاعلي ثلاثي الأبعاد للمهندس أسامة محمد فتحي**  
> مهندس نظم تكنولوجيا المعلومات، معماري الأتمتة الذكية والذكاء الاصطناعي، ومبتكر النموذج الهجين **OS_V1**.

---

## 🌟 مميزات المنصة (Key Features)

- **تصميم ثلاثي الأبعاد تفاعلي (Interactive 3D Graphics):** مبني باستخدام **Three.js** مع نواة عصبية رقمية متحركة ومصفوفة جسيمات متفاعلة مع حركة الفأرة.
- **دعم لغوي كامل ومتزامن (Bilingual Arabic/English with RTL/LTR):** تبديل فوري وسلس بين اللغتين العربية (مع دعم كامل لاتجاه اليمين لليسار) والإنجليزية.
- **الوضع الليلي والنهاري (Dark & Light Mode):** دعم كامل للثيمين الداكن والفاتح مع حفظ التفضيل في المتصفح.
- **مساعد ذكي تفاعلي مدمج ("مساعد أسامة" - Osama AI):**
  - نافذة محادثة ذكية عائمة للإجابة عن تفاصيل السيرة الذاتية، الجوائز، والابتكارات.
  - أسئلة مقترحة سريعة تفاعلية (Interactive Prompt Chips).
- **معرض مرئي عالي الدقة (3D Visuals Showcase):** صور ثلاثية الأبعاد مولدة لكل مشروع وجائزة:
  - 🩺 **طبيبي (Tabeeby):** نظام تشغيل الرعاية الصحية (المركز الأول في Google DevFest، عُرض على وزير الصحة).
  - ⚽ **اللعّيب (Al-La'eeb):** منصة التنقيب عن مواهب كرة القدم (المركز الأول بمبادرة مليون مبرمج، عُرض على وزير الشباب والرياضة).
  - 🚆 **مواصلاتي (Mawasilati):** تطبيق النقل الذكي الوطني (أفضل أثر مجتمعي، عُرض على وزير النقل).
  - 🚀 **OSS Work & OS_V1:** النموذج الهجين والوكيل المكتبي المستقل (الفائز المحلي في تحدي ناسا لتطبيقات الفضاء NASA Space Apps 2025).
- **متوافق مع الهواتف الذكية (Fully Responsive):** تجربة استخدام مثالية على الشاشات الكبيرة والمحمولة.

---

## 📂 هيكلية المشروع (Project Architecture)

```
osama-fathy-portfolio/
├── index.html               # الصفحة الرئيسية والواجهة المتكاملة
├── css/
│   └── styles.css           # تنسيقات Glassmorphism والثيمات والتأثيرات ثلاثية الأبعاد
├── js/
│   ├── app.js               # منطق التطبيق، الفلترة، النوافذ المنبثقة، وتغيير اللغات
│   ├── translations.js      # القاموس اللغوي الشامل (عربي / إنجليزي)
│   ├── three-scene.js       # مشهد Three.js التفاعلي والجسيمات الحركية
│   └── assistant.js         # محرك المساعد الذكي "أسامة" وقاعدة المعرفة
├── assets/
│   └── images/              # الصور ثلاثية الأبعاد للمشاريع والجوائز والملف الشخصي
│       ├── tabeeby.jpg
│       ├── al-laeeb.jpg
│       ├── mawasilati.jpg
│       ├── os-v1.jpg
│       ├── awards-showcase.jpg
│       └── osama-profile.jpg
├── README.md                # دليل التثبيت والنشر
└── LICENSE                  # ترخيص MIT المفتوح
```

---

## 🚀 كيفية الاستضافة المجانية (Free Deployment)

### 1. الاستضافة عبر GitHub Pages (الأسهل والموصى بها)
المشروع عبارة عن Static Web Application خالص، لا يحتاج أي أوامر بناء (Zero-build)!
1. ادخل إلى مستودعك على GitHub: `https://github.com/Osama-SysEng/osama-fathy-portfolio`
2. اذهب إلى **Settings** ← **Pages**.
3. في خيار **Source** اختر: `Deploy from a branch`، واختر فرع `main` والمجلد `/ (root)`.
4. اضغط **Save** — سيتم نشر الموقع مجاناً وفورياً على:
   `https://osama-syseng.github.io/osama-fathy-portfolio/`

### 2. الاستضافة بنقرة واحدة عبر Vercel أو Netlify
- يمكنك ربط المستودع مباشرة بـ Vercel أو Netlify ليتم النشر التلقائي مجاناً مع نطاق مخصص وشهادة SSL مجانية.

---

## 📜 الترخيص (License)
هذا المشروع مفتوح المصدر ومتاح للجميع تحت ترخيص [MIT License](LICENSE).
