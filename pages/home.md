# home.md
# الصفحة الرئيسية — Elmohandes Decor

---

## الهدف العاطفي

```
فضول → إلهام → رغبة → ثقة → فعل
```

أول 5 ثوانٍ: الزائر يشعر أن هذه شركة تفهم الفخامة.  
بعد 30 ثانية: يريد أن يتصل ويحجز استشارة.

---

## المشاهد (Scenes)

---

### 🎬 Scene 01 — Hero
**الهدف:** خلق الفضول والانطباع الأول

```
Layout: Fullscreen — 100vh
الخلفية: صورة معمارية فاخرة edge-to-edge
Overlay: gradient داكن من أسفل

المحتوى (يظهر تدريجياً):
  [Eyebrow]   — "تشطيبات الديكور في مصر"
  [H1]        — "مساحات
                 تحكي قصتك"
  [SubText]   — "نحوّل رؤيتك إلى واقع بتفاصيل دقيقة وتشطيبات تدوم."
  [CTA]       — "ابدأ مشروعك" → /contact
  [Secondary] — "استعرض أعمالنا" → /projects (Ghost button)

Animation:
  الصورة: scale(1.05 → 1.0) — 1200ms
  Eyebrow: fade in + translateY — 300ms delay
  H1 line 1: mask reveal — 600ms delay
  H1 line 2: mask reveal — 900ms delay
  SubText: fade in — 1100ms delay
  CTAs: fade in — 1400ms delay
  Scroll indicator: يظهر أخيراً
```

---

### 🎬 Scene 02 — About Teaser
**الهدف:** بناء الثقة والقرب الإنساني

```
Layout: Editorial Split — 60/40 (صورة + نص)
الخلفية: --color-ivory

الجانب الأيسر (RTL — النص):
  [Eyebrow]    — "عن المهندس"
  [H2]         — "حرفيون في كل تفصيلة"
  [Body L]     — "منذ 2015، نبني مساحات تعيش فيها الأسر وتنجح فيها الأعمال.
                   كل مشروع هو قصة نصنعها معاً من الفكرة حتى آخر لمسة."
  [Stat: 2015] — "عام من الخبرة"
  [CTA Ghost]  — "تعرف علينا أكثر" → /about

الجانب الأيمن (الصورة):
  صورة فريق أو مشروع بزاوية جميلة
  overflow خارج الـ container
```

---

### 🎬 Scene 03 — Services Overview
**الهدف:** إظهار نطاق الخدمات وبناء الثقة

```
Layout: 3 services أفقية على Desktop / Vertical Stack على Mobile
الخلفية: --color-ivory-dark

[H2]    — "كل ما يحتاجه مشروعك"
[Body]  — "من التصميم حتى التسليم — خدمة متكاملة تحت سقف واحد"

الخدمات الثلاثة الرئيسية:
  1. التشطيبات الكاملة
  2. تصميم الديكور الداخلي
  3. الجبس والأسقف المميزة

كل خدمة:
  أيقونة خطية رفيعة
  اسم الخدمة (H3)
  وصف مختصر (2 سطر)

[CTA]   — "جميع خدماتنا" → /services
```

---

### 🎬 Scene 04 — Featured Projects
**الهدف:** الإلهام والإعجاب — الدليل البصري على الجودة

```
Layout: Editorial Grid — غير متماثل
الخلفية: --color-ivory

[H2]    — "من أعمالنا"
[Body]  — "كل مشروع له قصة، وكل مساحة لها روح"

Grid Projects (3 مشاريع):
  - مشروع كبير يأخذ 2/3 العرض (Portrait)
  - مشروعان صغيران يأخذان 1/3 (Square)

كل بطاقة مشروع:
  الصورة تملأ الـ card
  Hover: overlay + عنوان المشروع يظهر
  Click → /projects/:slug

[CTA]   — "عرض كل المشاريع" → /projects
```

---

### 🎬 Scene 05 — Process (كيف نعمل)
**الهدف:** تقليل القلق وبناء الثقة في الخطوات

```
Layout: Horizontal Timeline على Desktop / Vertical على Mobile
الخلفية: --color-charcoal (Dark Scene)

[H2 فاتح] — "رحلتك مع المهندس"

5 خطوات:
  01. نستمع لرؤيتك
  02. نصمم بتفكير
  03. نختار المواد معاً
  04. ننفذ بدقة
  05. نسلّم بفخر

كل خطوة: رقم + عنوان + جملة واحدة
Animation: تظهر الخطوات تدريجياً عند التمرير
```

---

### 🎬 Scene 06 — Stats
**الهدف:** إثبات الخبرة بالأرقام

```
Layout: 4 columns
الخلفية: --color-clay-tint (لمسة دافئة)

الأرقام:
  +6000  — مشروع منجز
  9      — سنوات خبرة (منذ 2015)
  100%   — نسبة رضا العملاء
  +100   — عميل موثوق

Animation: Counter يعد لأعلى عند الظهور في الـ viewport
```

---

### 🎬 Scene 07 — Testimonials
**الهدف:** الدليل الاجتماعي والثقة

```
Layout: شهادة واحدة كبيرة في المنتصف — Carousel
الخلفية: --color-ivory

تنسيق الشهادة:
  [علامة اقتباس كبيرة] — --color-clay-tint
  [نص الشهادة] — Body L, max-width: 700px, centered
  [اسم العميل] — H3
  [المشروع / المنطقة] — caption, --color-ink-muted

Navigation: dots أو سهمان
```

---

### 🎬 Scene 08 — CTA Final
**الهدف:** تحويل الاهتمام لفعل

```
Layout: Cinematic Full Width
الخلفية: صورة داخلية فاخرة + overlay داكن

[H2 فاتح] — "مساحتك القادمة تنتظر"
[Body فاتح] — "تحدث معنا وابدأ رحلة التحول."
[CTA Primary] — "اطلب استشارة مجانية" → /contact
[CTA Ghost]   — "واتساب مباشر" → wa.me/...
```

---

## الـ SEO

```html
<title>المهندس للتشطيبات والديكور — تشطيبات فاخرة في مصر</title>
<meta name="description" content="شركة المهندس متخصصة في التشطيبات الداخلية والديكور الفاخر في مصر. أكثر من 6000 مشروع منجز منذ 2015. اطلب استشارتك المجانية اليوم.">
```

---

## ملاحظات المطور

- الـ Hero يحتاج `fetchpriority="high"` على الصورة
- Scene 04 (Projects): يستخدم CSS Grid مع `grid-template-areas`
- Scene 05 (Process): الخط الأفقي يتمدد تدريجياً مع التمرير
- Scene 06 (Stats): counter animation بـ IntersectionObserver
- Scene 08 (CTA): نفس تقنية الـ Hero (overlay على صورة)
