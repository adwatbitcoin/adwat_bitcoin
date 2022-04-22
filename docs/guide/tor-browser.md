# كيف تقوم بتحميل متصفح تور Tor Browser

## عملية تحميل المتصفح 

نقوم بالدخول الى موقع <https://www.torproject.org/download> او قم بالبحث عن تور "tor browser" في في جوجل او من خلال محرك البحث [StartPage](https://www.startpage.com/) الذي يحافظ على خصوصية المستخدم:

![torproject](/images/tor/tor_0.png)

قم باختيار نظام التشغيل المناسب لكم، سنختار نظام تشغيل ويندوز، لانني اعتقد ان الاغلبية يستخدمون هذا النظام للاسف، لكن نصيحتي ابدأ بتعلم استخدام نظام لينوكس الاكثر أمانا والذي يحافظ اكثر على خصوصية المستخدم.

![torproject](/images/tor/tor_1-1.png)

## التحقق من ملف التحميل قبل تنصيبه
> خطوة غير اجبارية ولكن محبذة على مبدأ "لا تثق بل تحقق".

هذة خطوة مهمة ولكن غير إلزامية،انصحك بتعلم التحقق من صحة الملفات التي تقوم بتحميلها من الانترنت [هنا قمت بشرح كل ما ستحتاجة بالتفصيل](../guide/verify-files-with-gpg.md). 

اليكم الخطوات سريعا:

![torproject](/images/tor/tor_2.png)

نضع ملف التنصيب وملف التوقيع في مجلد جديد اسميته tor، يتبقى لدينا المفتاح العام لمطور تور ندخل الى الرابط (علامة الاستفهام كما موضح بالصورة)
<https://support.torproject.org/tbb/how-to-verify-signature/>

![torproject](/images/tor/tor_3.png)

هناك نجد ان المفتاح العام هو:
0xEF6E286DDA85EA2A4BA7DE684E2C6E8793298290

نقوم بالدخول الى برنامج kleopatra الذي يأتي مع برنامج GPG الذي [شرحنا هنا كيف نقوم بتحميله في نظام ويندوز](../guide/verify-files-with-gpg.md#تثبيت-gpg-في-windows)

نقوم بالضغط على lookup on server

![torproject](/images/tor/tor_4.png)

ثم نقوم بالبحث عن المفتاح العام للمطور  في خادم للتواقيع 

![torproject](/images/tor/tor_5.png)

كما بالصورة المتحركة هنا:

![torproject](/images/tor/tor-import-devs-pub-key.gif)

لكي نتأكد من صحة الملف نعود للمجلد الذي وضعنا به ملف التنصيب وملف التوقيع، ونقوم باختيار خاصية verify بعد أن نقف على ملف التوقيع الذي ينتهي ب asc لنحصل على:

```bash
Good signature from "Tor Browser Developers (signing key) <torbrowser@torproject.org>"
```
كما وضحت هنا في الصورة المتحركة:

![torproject](/images/tor/tor-verify-file.gif)

```bash
gpg: Signature made 4/6/2022 3:17:29 AM Turkey Standard Time
gpg:                using RSA key E53D989A9E2D47BF
gpg: Good signature from "Tor Browser Developers (signing key) <torbrowser@torproject.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: EF6E 286D DA85 EA2A 4BA7  DE68 4E2C 6E87 9329 8290
     Subkey fingerprint: 6131 88FC 5BE2 176E 3ED5  4901 E53D 989A 9E2D 47BF
```

## تنصيب متصفح تور

قم بفتح الملف الذي ينتهي ب exe وأبدأ عملية التنصيب كالتالي:

![torproject](/images/tor/tor-setup.gif)

عند الانتهاء افتح المتصفح واضغط على connect. عندما تظهر لك الشاشة باللون البنفسجي انت جاهز للتصفح في اي موقع وخاصة المواقع التي تنتهي ب onion.  




