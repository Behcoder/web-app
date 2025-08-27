# 🚀 راهنمای کامل PWA سیفی مارکت

## 📱 PWA چیست؟

**Progressive Web App (PWA)** نوعی اپلیکیشن وب است که مانند اپ‌های موبایل عمل می‌کند و می‌تواند روی صفحه اصلی دستگاه نصب شود.

## ✨ ویژگی‌های PWA سیفی مارکت

### 🔧 ویژگی‌های فنی
- ✅ **نصب روی صفحه اصلی**: قابل نصب روی iOS و Android
- ✅ **حالت مستقل**: بدون نوار آدرس مرورگر
- ✅ **Service Worker**: پشتیبانی از حالت آفلاین
- ✅ **کش هوشمند**: ذخیره محتوا برای دسترسی سریع‌تر
- ✅ **آیکون‌های بهینه**: سازگار با تمام اندازه‌های iOS

### 🎨 ویژگی‌های کاربری
- 🎯 **تجربه کاربری بهتر**: مانند اپ‌های موبایل
- 📱 **طراحی واکنش‌گرا**: سازگار با تمام دستگاه‌ها
- 🚀 **سرعت بالا**: بارگذاری سریع‌تر با کش
- 🔄 **به‌روزرسانی خودکار**: بدون نیاز به دانلود مجدد

## 📱 نحوه نصب روی iOS

### روش 1: از طریق Safari
1. اپ را در Safari باز کنید
2. روی دکمه Share (اشتراک‌گذاری) کلیک کنید
3. گزینه **"Add to Home Screen"** را انتخاب کنید
4. نام اپ را تأیید کنید و روی **"Add"** کلیک کنید

### روش 2: از طریق منوی Safari
1. در Safari، روی دکمه منو (سه خط) کلیک کنید
2. گزینه **"Add to Home Screen"** را انتخاب کنید
3. نام اپ را تأیید کنید

### روش 3: از طریق دکمه نصب
- اگر اپ از نصب PWA پشتیبانی کند، دکمه نصب نمایش داده می‌شود

## 🔧 تست PWA

### صفحه تست
برای بررسی عملکرد PWA، صفحه `/test-pwa.html` را باز کنید که شامل:
- ✅ بررسی Service Worker
- ✅ بررسی Manifest
- ✅ بررسی HTTPS
- ✅ بررسی آیکون‌ها
- 🔘 دکمه نصب PWA

### ابزارهای تست
1. **Chrome DevTools**: بخش Application > Manifest
2. **Lighthouse**: تست عملکرد PWA
3. **iOS Simulator**: تست روی شبیه‌ساز iOS

## 📁 ساختار فایل‌های PWA

```
build/web/
├── index.html              # صفحه اصلی با تنظیمات PWA
├── manifest.json           # تنظیمات PWA
├── sw.js                  # Service Worker
├── test-pwa.html          # صفحه تست PWA
├── icons/                 # آیکون‌های مختلف
├── robots.txt             # راهنمای ربات‌ها
└── sitemap.xml            # نقشه سایت
```

## ⚙️ تنظیمات فنی

### Manifest.json
```json
{
  "name": "سیفی مارکت",
  "short_name": "سیفی",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d47a1",
  "orientation": "portrait-primary"
}
```

### Service Worker
- کش کردن فایل‌های استاتیک
- پشتیبانی از حالت آفلاین
- به‌روزرسانی خودکار

### آیکون‌های iOS
- اندازه‌های مختلف: 57x57 تا 180x180
- سازگار با تمام مدل‌های iPhone و iPad
- آیکون‌های maskable برای پوشش کامل

## 🚀 استقرار (Deploy)

### نیازمندی‌ها
- ✅ HTTPS فعال
- ✅ فایل‌های PWA موجود
- ✅ Service Worker فعال

### مراحل استقرار
1. فایل‌ها را روی سرور HTTPS آپلود کنید
2. Service Worker را فعال کنید
3. Manifest را بررسی کنید
4. تست PWA را انجام دهید

## 🔍 عیب‌یابی

### مشکلات رایج

#### ❌ Service Worker ثبت نمی‌شود
**علت**: HTTPS الزامی است
**راه‌حل**: اطمینان از فعال بودن HTTPS

#### ❌ آیکون نمایش داده نمی‌شود
**علت**: مسیر آیکون‌ها اشتباه است
**راه‌حل**: بررسی مسیر آیکون‌ها در manifest.json

#### ❌ PWA نصب نمی‌شود
**علت**: manifest.json مشکل دارد
**راه‌حل**: بررسی صحت فایل manifest.json

### راه‌حل‌ها
1. **پاک کردن کش**: کش مرورگر و اپ را پاک کنید
2. **بررسی HTTPS**: اطمینان از فعال بودن HTTPS
3. **تست در مرورگرهای مختلف**: Chrome, Safari, Firefox
4. **بررسی Console**: خطاهای JavaScript را بررسی کنید

## 📊 آمار و عملکرد

### معیارهای PWA
- **Lighthouse Score**: هدف 90+ 
- **First Contentful Paint**: کمتر از 2 ثانیه
- **Largest Contentful Paint**: کمتر از 2.5 ثانیه
- **Cumulative Layout Shift**: کمتر از 0.1

### بهینه‌سازی‌ها
- 🖼️ فشرده‌سازی تصاویر
- 📦 Tree-shaking فونت‌ها
- 🚀 Lazy loading
- 💾 کش هوشمند

## 🔗 لینک‌های مفید

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [iOS PWA Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
- [Flutter Web](https://flutter.dev/web)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## 📞 پشتیبانی

برای سوالات و مشکلات مربوط به PWA:
- 📧 ایمیل: support@seify.com
- 📱 تلگرام: @seify_support
- 🌐 وب‌سایت: https://seify.com

---

**نسخه PWA**: 1.6.3.1  
**تاریخ به‌روزرسانی**: آخرین تغییرات  
**وضعیت**: ✅ آماده برای استفاده
