# projects.md
# صفحة المشاريع — Elmohandes Decor

---

## الهدف العاطفي

```
إلهام → إثارة → رغبة → "أريد مشروعاً مثل هذا"
```

---

## المشاهد (Scenes)

---

### 🎬 Scene 01 — Hero
```
Layout: 60vh
الخلفية: Collage من 3 مشاريع متداخلة

[H1]    — "أعمالنا"
[Body]  — "كل مشروع قصة. كل مساحة تحول."
```

---

### 🎬 Scene 02 — Filter Bar
```
فلاتر المشاريع:
  [الكل] [فيلات] [شقق] [مكاتب] [تجاري] [ديكور داخلي]

تصميم الفلتر:
  أزرار Pills — لا dropdown
  Active: --color-clay + white text
  Inactive: border + --color-ink-soft
  Animation: تلاشي ناعم عند تغيير الفلتر (350ms)
```

---

### 🎬 Scene 03 — Projects Grid
```
Layout: Masonry أو Asymmetric Grid
الخلفية: --color-ivory

Grid Pattern (تتكرر):
  Row 1: بطاقة كبيرة (2/3) + بطاقة صغيرة (1/3)
  Row 2: بطاقة صغيرة (1/3) + بطاقة كبيرة (2/3)
  Row 3: 3 بطاقات متساوية
  
لا grid متساوي من البداية للنهاية

كل بطاقة:
  الصورة تملأ الـ card
  aspect-ratio: 3/4 أو 4/3 حسب الموضع
  Hover: overlay داكن + عنوان المشروع + الفئة
  Click: → /projects/:slug

Load More Button:
  يظهر بعد أول 9 مشاريع
  Ghost button
  يحمّل 6 مشاريع إضافية
```

---

## الـ SEO

```html
<title>مشاريع التشطيب والديكور — المهندس للتشطيبات</title>
<meta name="description" content="استعرض أكثر من 6000 مشروع تشطيب وديكور منجز. فيلات، شقق، مكاتب، مشاريع تجارية في جميع أنحاء مصر.">
```

---

## ملاحظات المطور

- استخدم CSS Grid مع `grid-template-rows: masonry` أو JavaScript masonry
- الـ filter يعمل بـ CSS class toggling + fade transition
- الصور lazy loaded كلها عدا أول صف
- اللود مور يضيف عناصر DOM dynamically مع animation
