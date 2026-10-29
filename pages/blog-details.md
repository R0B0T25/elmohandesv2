# blog-details.md
# صفحة مقالة المدونة — Elmohandes Decor

---

## الهدف العاطفي

```
قراءة ممتعة → ثقة في الخبرة → "أريد التواصل مع هؤلاء"
```

---

## هيكل الصفحة

---

### الـ Hero
```
Layout: 50vh
الصورة: صورة المقالة — كاملة العرض

[Breadcrumb] — الرئيسية > المدونة > [عنوان المقالة]
[الفئة] — pill بلون clay
[H1]    — عنوان المقالة
[Meta]  — [اسم الكاتب] | [التاريخ] | [وقت القراءة]
```

---

### المحتوى
```
Layout: Narrow Column — max-width: 720px, centered
الخلفية: --color-white

Typography للمقالة:
  H2: 28px — لعناوين الأقسام
  H3: 22px — للعناوين الفرعية
  Body: 18px / line-height: 1.8
  
عناصر خاصة:
  [Blockquote] — border-inline-start 3px --color-clay + italic
  [Code]       — background: clay-tint, font: monospace
  [صور داخل المقالة] — full-width + caption أسفلها
  [نقاط] — مع padding وspacing مناسب

Sidebar (Sticky — Desktop فقط):
  Table of Contents
  CTA — "ناقش مشروعك"
```

---

### Author Bio
```
Layout: Card بسيطة
الخلفية: --color-ivory-dark

صورة الكاتب + الاسم + الدور + جملة واحدة
```

---

### مقالات مشابهة
```
3 بطاقات مقالات من نفس الفئة
```

---

### CTA النهائي
```
الخلفية: --color-charcoal

[H3]  — "هل أنت مستعد للبدء؟"
[CTA] — "تحدث مع فريقنا" → /contact
```

---

## الـ SEO

```html
<title>[عنوان المقالة] | مدونة المهندس للتشطيبات</title>
<meta name="description" content="[مقتطف من المقالة — 150 حرف]">
<!-- Schema: Article markup -->
```
