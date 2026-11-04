# 🎂 Birthday Surprise Website

موقع سوربرايز عيد ميلاد جاهز، تقدري تعدّلي فيه كل حاجة بسهولة.

---

## 📁 الملفات

- `index.html` → الصفحة الرئيسية
- `style.css` → التصميم
- `script.js` → كل المحتوى القابل للتعديل موجود هنا

---

## ✏️ إزاي تعدّلي المحتوى

افتحي ملف **`script.js`** وهتلاقي في الأول جزء اسمه:

```js
const config = {
  name: "Hamody",
  yourName: "Shahodaa",
  ...
}
```

### 1. غيّري الاسم
```js
name: "اسمه",
yourName: "اسمك",
```

### 2. غيّري الرسائل
عدّلي `arabicMessage` و `englishMessage`.

### 3. غيّري الأسئلة
في مصفوفة `questions`:
```js
{
  question: "السؤال هنا؟",
  options: ["اختيار 1", "اختيار 2", "اختيار 3"],
  correct: 0   // رقم الإجابة الصحيحة (0 = الأول، 1 = الثاني...)
}
```

### 4. غيّري الصور
في مصفوفة `photos`:
```js
{ src: "رابط الصورة أو اسم الملف", date: "NOV 2024 23" }
```

**طريقتين للصور:**
- تحطي لينك مباشر (من Google Drive / Imgur / أي موقع)
- أو ترفعي الصور في نفس المجلد وتكتبي اسم الملف زي `"photo1.jpg"`

### 5. الفيديو
ارفعي ملف الفيديو باسم `video.mp4` في نفس المجلد،  
أو غيّري السطر ده في `index.html`:
```html
<source src="video.mp4" type="video/mp4">
```

---

## 🚀 طريقة الرفع على GitHub Pages (مجاني)

1. اعملي حساب على [github.com](https://github.com) لو معندكيش.
2. اضغطي **New repository** → اسمه مثلاً `birthday` أو `surprise`.
3. ارفعي الـ 3 ملفات (`index.html` + `style.css` + `script.js`) + الصور + الفيديو.
4. روحي **Settings** → **Pages**.
5. تحت Source اختاري **main** branch واضغطي Save.
6. استني دقيقة أو اتنين، هيديلك لينك زي:
   `https://yourusername.github.io/birthday/`

---

## نصيحة
جرّبي الموقع محليًا الأول:
- افتحي `index.html` في المتصفح
- أو استخدمي VS Code + Live Server

لو عايزة تعديلات إضافية قولي وأنا أساعدك ❤️
