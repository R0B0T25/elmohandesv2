# project-details.md
# صفحة تفاصيل المشروع — Elmohandes Decor

---

## الهدف العاطفي

```
انغماس → إعجاب → إلهام → "أريد شيئاً مثل هذا"
```

هذه أهم صفحة في الموقع للتحويل.  
الزائر هنا مهتم بالفعل — المهمة هي تحويل الاهتمام لتواصل.

---

## هيكل الصفحة

---

### 🎬 Scene 01 — Hero الكامل
```
Layout: 100vh
الصورة: أجمل صورة في المشروع — edge-to-edge
Overlay: gradient خفيف من الأسفل

[Project Info — floating bottom]:
  [الفئة] — caption + clay color
  [H1]     — اسم المشروع أو "فيلا القاهرة الجديدة"
  [Meta]   — المنطقة | سنة التنفيذ | المساحة

Navigation Arrows (للمشروع التالي/السابق)
```

---

### 🎬 Scene 02 — Project Overview
```
Layout: 60/40 — نص يسار، معلومات يمين
الخلفية: --color-ivory

الجانب الأيسر (النص):
  [H2]    — "التحدي"
  [Body]  — ما كان طلب العميل والتحدي التصميمي (3-4 أسطر)

الجانب الأيمن (Info Card):
  خلفية: --color-ivory-dark
  border-radius: --radius-md
  
  المعلومات:
    نوع المشروع: [شقة / فيلا / مكتب]
    الموقع: [المدينة / الحي]
    المساحة: [xxx م²]
    المدة: [x أشهر]
    الخدمات: [tags بلون clay-tint]
```

---

### 🎬 Scene 03 — الحل الإبداعي
```
Layout: Editorial — كبير ومتنفّس
الخلفية: --color-white

[H2]    — "الحل"
[Body L] — كيف حللنا التحدي وما القرارات التصميمية (4-5 أسطر)
[صورة] — صورة مصاحبة تُظهر الحل
```

---

### 🎬 Scene 04 — المعرض الكامل
```
Layout: Gallery Grid
الخلفية: --color-ivory

Grid:
  أول صورة: كاملة العرض (16/9)
  بعدها: Masonry — 3 columns desktop / 2 tablet / 1 mobile

كل صورة:
  Hover: overlay خفيف + أيقونة zoom
  Click: تفتح Lightbox

Lightbox:
  صورة كاملة الشاشة
  navigation بالأسهم وSwipe
  عداد (3/12 مثلاً)
  إغلاق بـ Esc أو ×
```

---

### 🎬 Scene 05 — المواد المستخدمة
```
Layout: Horizontal Scroll أو Grid بسيط
الخلفية: --color-ivory-dark

[H3]    — "المواد المستخدمة"

كل مادة:
  صورة close-up للمادة
  اسم المادة
  
مثال: رخام كلاكاتا | خشب بلوط | دهان ماتي فينيسي
```

---

### 🎬 Scene 06 — Before / After (اختياري)
```
إذا توفرت صور قبل التشطيب:

Layout: Interactive Slider
[H3]  — "قبل وبعد"

Slider:
  الصورتان side by side مع handle متحرك
  المستخدم يسحب للمقارنة
  
لا تُستخدم هذه المكوّن إلا إذا كانت الصور عالية الجودة
```

---

### 🎬 Scene 07 — مشاريع مشابهة
```
Layout: 3 بطاقات مشاريع
الخلفية: --color-ivory

[H3]  — "قد يعجبك أيضاً"
3 مشاريع من نفس الفئة
```

---

### 🎬 Scene 08 — CTA
```
Layout: Dark Scene
الخلفية: --color-charcoal

[H2 فاتح]  — "هل أعجبك هذا المشروع؟"
[Body]      — "دعنا نصنع شيئاً مميزاً لك"
[CTA]       — "ناقش مشروعك معنا" → /contact
```

---

## الـ SEO

```html
<title>[اسم المشروع] — تشطيب [النوع] في [المنطقة] | المهندس</title>
<meta name="description" content="[وصف موجز للمشروع] — تنفيذ شركة المهندس للتشطيبات والديكور.">
```

---

## ملاحظات المطور

- استخدم `<dialog>` للـ Lightbox
- Focus trap داخل الـ Lightbox
- الـ Before/After يعمل بـ `clip-path: inset()`
- الـ Schema Markup: `CreativeWork` أو `ImageObject` للـ SEO
