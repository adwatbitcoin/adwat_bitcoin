# متجر F-droid لتحميل تطبيقات مجانية ومفتوحة المصدر لهواتف اندرويد

كلنا نعرف متجر جوجل (Google Play Store) لتحميل التطبيقات، ولكن هذا ليس المتجر الوحيد. هنالك متجر يسمى F-droid متختص بالتطبيقات المجانية ومفتوحة المصدر لهواتف الاندرويد (Android).

::: tip طجلأ - طويلة جدا لن أقرأها
يفضل دائمًا استخدام تطبيقات مجانية ومفتوحة المصدر (FOSS)  لأنها على الأرجح لن تستخدم أي نوع من أكواد التعقب والمراقبة وستكون خالية من الإعلانات. 
يوصى بتحميلها من متجر [F-Droid](https://f-droid.org/) الذي يضمن لكم ذلك.
:::

متجر [F-Droid](https://f-droid.org/) يهتم بشكل كبير وغير عادي بخصوصية المستخدمين ويمنع اي نوع من اكواد التعقب في تطبيقات المطورين التي يدرجها هناك، ولا يقبل اي تطبيق يعتمد على خدمات جوجل (Google Play Services) حتى وان كانت تتيح خدمة تسهل استقبال التنبيهات مثلا، إذ يرون بها اختراق لخصوصية المستخدمين. ويظهر للمستخدم كل ما يحتاج له التطبيق من صلاحيات الجهاز.  

مطوري المتجر يفحصون كل تطبيق وكل إصدار له بشكل ممنهج  قبل ادراجه كما تفعل شركة أبل مثلا. بل وتتأكد من كود المصدر (الكود مفتوح للجميع) وتقوم ببناء التطبيق من هناك وإرفاق عملية الفحص مع توقيعاتهم عليها وتوقيعات مطوري التطبيقات.


## مميزات متجر F-Droid

- التطبيقات مجانية وتعتمد على مساهمات المطورين والمستخدمين.
- التطبيقات مفتوحة المصدر بإمكان اي شخص الدخول لكود التطبيق.
- التطبيقات خالية من الاعلانات وأكواد التعقب والمراقبة.
- المتجر يضمن لكم تحميل الملفات التي وقعت من قبل المطورين.
- التطبيقات لا تعتمد على خدمات جوجل.
- المتجر نفسه مفتوح المصدر :) 

مجتمع مطوري محافط البيتكوين مهتم جدا في هذا المتجر وتوجد عدة تطبيقات لمحافظ بيتكون عليه. خاصة وان البيتكوين  بنفسه مجاني ومفتوح المصدر (FOSS).



## محافظ بيتكوين على F-Droid
- محفظة [Zeus](https://f-droid.org/en/packages/app.zeusln.zeus/)
- محفظة [Bluewallet](https://f-droid.org/en/packages/io.bluewallet.bluewallet)
- محفظة [SBW](https://f-droid.org/en/packages/com.btcontract.wallet/)
- محفظة [Green](https://f-droid.org/en/packages/com.greenaddress.greenbits_android_wallet/)

::: details إضغط هنا للتحقق من ملف المتجر قبل تثبيته 

## التحقق من التطبيق قبل تثبيته 
> خطوة غير اجبارية ولكن محبذة على مبدأ "لا تثق بل تحقق".

انصحك بتعلم التحقق من صحة الملفات التي تقوم بتحميلها من الانترنت [هنا قمت بشرح كل ما ستحتاجة بالتفصيل](../guide/verify-files-with-gpg.md). لكن اليكم الخطوات بالتفصيل هنا: 

لكي نتاكد من أن ملف ال-APK لتطبيق متجر F-Droid سليم ولم يحدث به اي خلل أثناء عملية التحميل ولنتأكد انه لم يتم العبث بالملف اذا حصل إختراق للموقع مثلا. 

سأريكم كيف يمكنكم التحقق من الملف عبر تحميله على الحاسوب أولا ثم التأكد منه عن طريق التحقق من توقيع المطورين باستخدام PGP وفي النهاية ننقل ملف ال-APK الى الهاتف باستخدام (كابل usb او عن طريق SD card) لنقوم بتثبيته.

### طريقة التحقق من الملف في نظام Windows

1. نقوم بتحميل برنامج GnuPG [إليكم دليل كامل هنا](../guide/verify-files-with-gpg.md#تثبيت-gpg-في-windows)
2. نقوم بتحميل ملف ال APK لتطبيق متجر [F-Droid](https://f-droid.org/) كما موضح بالصورة وحفظة في مجلد جديد او مباشرة من الرابط التالي: <https://f-droid.org/F-Droid.apk>

![f-droid1](/images/f-droid/f-droid1.png)

3. ثم ملف التوقيع من خلال هذا الرابط المباشر [ملف التوقيع ASC](https://f-droid.org/F-Droid.apk.asc) 

نقوم بالضغط على الزر الأيمن بالفأرة ثم **حفظ الملف** كما موضح بالصور ادناة من الرابط.

![f-droid2](/images/f-droid/f-droid2.png)

قم باختيار نوع الملف All Files (*.*) كما موضوح بالصورة

![f-droid3](/images/f-droid/f-droid3.png)

> لاحظ انني قمت بإنشاء مجلد جديد أسميته f-droid وحفظت الملفات هناك

4. الان اصبح لدينا ملفان اثنان بهذا المجلد:
	- ملف التطبيق
	- ملف التوقيع
	
تبقى علينا إحضار المفتاح العام للمطورين وفحص الملفات.

في هذة الروابط تم إدارج المفتاح العام للمطورين[رابط 1 من موقع f-droid](https://f-droid.org/docs/Release_Channels_and_Signing_Keys/) [رابط 2 من موقع gitlab](https://gitlab.com/fdroid/wiki/-/wikis/FAQ#how-can-i-verify-the-downloaded-f-droidapk)

تجدون هناك هذة البصمة الرقمية لمفتاح العام الخاص بالمطور المربوطة بعنوان بريده:
 
- 37D2C98789D8311948394E3E41E7044E1DBA2E89

- admin@f-droid.org

نقوم بالدخول الى برنامج kleopatra الذي يأتي مع برنامج GPG الذي [شرحنا هنا كيف نقوم بتحميله في نظام ويندوز](../guide/verify-files-with-gpg.md#تثبيت-gpg-في-windows)

نقوم بالضغط على lookup on server حيث يمكن البحث عن المفتاح العام للمطور من خلال بريده الإلكتروني 

![f-droid](/images/f-droid/f-droid-import-sig-key.gif)

او من خلال البصمة الرقمية لمفتاحه العام:

![f-droid](/images/f-droid/f-droid-import-sig-key2.gif)

لكي نتأكد من صحة الملف نعود للمجلد الذي وضعنا به ملف التنصيب وملف التوقيع، ونقوم باختيار خاصية verify بعد أن نقف على ملف التوقيع الذي ينتهي ب asc كما موضوح في الصورة المتحركة:

![f-droid](/images/f-droid/f-droid-verify.gif)

النتيجة ستكون مثل هذا 

```shell
gpg: Signature made 8/10/2021 12:17:55 AM Turkey Standard Time
gpg:                using RSA key 802A9799016112346E1FEFF47A029E54DD5DCE7A
gpg: Good signature from "F-Droid <admin@f-droid.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 37D2 C987 89D8 3119 4839  4E3E 41E7 044E 1DBA 2E89
     Subkey fingerprint: 802A 9799 0161 1234 6E1F  EFF4 7A02 9E54 DD5D CE7A
```

ما يهم هو اننا حصلنا على:

```shell
Good signature from "F-Droid <admin@f-droid.org>
```

لا تهتم بهذة الرسالة:

```bash 
WARNING: This key is not certified with a trusted signature
		There is no indication that the signature belongs to the owner.
```

فهي تعني فقط انك لم تشر لحاسوبك بانك تثق يأن هذا المفتاح العام هو للمطور حقا، انا اكتفي التحقق بنفسي من ان العنوان العام قد أرفقه المطور في عدة مواقع مثلا على github او keysend او على صفحته في مواقع التواصل الاجتماعي كتويتر.

### طريقة التحقق في نظام Linux:

نفتح مجلد جديد وندخل الى command line كما بالصورة


```shell
# نقوم بتحميل ملف التوقيع
wget -q https://f-droid.org/F-Droid.apk.asc

# ثم نقوم بتحميل ملف التطبيق
wget -q https://f-droid.org/F-Droid.apk

# ثم نقوم بطلب المفتاح العام للمطور من موقع يوبينتو
gpg --keyserver keyserver.ubuntu.com --recv-key 37D2C98789D8311948394E3E41E7044E1DBA2E89

# ثم نقوم بمقارنة بصمة المفتاح وهي آخر 16 خانة من المفتاح اعلاه
gpg --fingerprint 0x41E7044E1DBA2E89

# ثم نتحقق من الملف هكذا
gpg --verify F-Droid.apk.asc F-Droid.apk
```

النتيجة ستكون مثل هذا 

```shell
gpg: Signature made Mon 09 Aug 2021 11:17:55 PM CEST
gpg:                using RSA key 802A9799016112346E1FEFF47A029E54DD5DCE7A
gpg: Good signature from "F-Droid <admin@f-droid.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 37D2 C987 89D8 3119 4839  4E3E 41E7 044E 1DBA 2E89
     Subkey fingerprint: 802A 9799 0161 1234 6E1F  EFF4 7A02 9E54 DD5D CE7A
```

ما يهم هو اننا حصلنا على:

```shell
Good signature from "F-Droid <admin@f-droid.org>
```

لا تهتم بهذة الرسالة:

```bash 
WARNING: This key is not certified with a trusted signature
		There is no indication that the signature belongs to the owner.
```

فهي تعني فقط انك لم تشر لحاسوبك انك تثق يأن هذا المفتاح العام هو للمطور جقا، انا اكتفي التحقق بنفسي من ان العنوان العام قد أرفقه المطور في عدة مواقع مثلا على صفحته في مواقع التواصل الاجتماعي كتويتر.

تفاصيل إضافية بالانجليزية تجدونها هنا:

<https://gitlab.com/fdroid/wiki/-/wikis/FAQ#how-can-i-verify-the-downloaded-f-droidapk>

## تثبيت تطبيق F-droid على الاندرويد

اذا قمت بالتأكد من صحة الملف كما شرحت اعلاه، هنالك طريقتان للاكمال من هنا الاولى يمكنك الان نقل الملف من حاسوبك الى هاتفك عبر كابل USB او عبر MicroSD الى داخل مجلد في هاتفك (انا افضل مجلد Downloads). ومن ثم تثبيث التطبيق من هاتفك بعد تغيير الاعدادات هناك لتثبيت التطبيق، انظر القسم التالي.

اما الطريقة الثانية فهي تحميل ملف ال APK لمتجر [F-Droid](https://f-droid.org/) من خلال متصفح هاتفك. لكن قبل تثبيته، عليك مقارنة الهاش للملف الذي على حاسوبك (الذي قد تأكدت من صحة، اليكم [شرح هنا كيف تقوم بذلك عبر حاسوبك](/verify-files-with-gpg.html#التحقق-عبر-sha256-في-نظام-ويندوز))، مع هاش الملف الذي حملته على هاتفك. اذا تطابقا يمكنك المباشرة في تثبيت التطبيق. يمكنك الاستعانة بتطبيق [Hash Droid](https://play.google.com/store/apps/details?id=com.hobbyone.HashDroid) الذي يقوم بانتاج هاش للملفات على هاتفك.

عند تحميل ملف ال APK لمتجر [F-Droid](https://f-droid.org/) على هاتفك، عليك تغيير اعدادات الهاتف ليسمح لك بتثبيت التطبيق من مصادر خارجية اليكم التفاصيل:

:::

### تغيير الاعدادات في الاندرويد لتستطيع تثبيت f-droid

لنفرض انك قمت بتحميل الملف من متصفح Chrome، قم بالدخول الى الإعدادات وابحث عن Install unknown apps ثم اختار تطبيق Chrome واضغط على allow from this source. الان يمكن الدخول الى متصفح Chrome وبالتحديد الى مجلد Downloads عبر الضغط على الثلاث نقاط في الاعلى ومن ثم اختيار Downloads. ثم افتح ملف f-droid.apk وابدا بعملية التثبيت.

اما اذا قمت قمت بنقل الملف من حاسوبك الى هاتفك، فعليك بنفس الخطوات اعلاه لكن بدل اختيار تطبيق Chrome قم باختيار التطبيق الذي فتحته لمشاهدة المجلدات (تطبيق Files مثلا او File Manager حسب نوع هاتفك) 


## تطبيقات أخرى من متجر Fdroid
كل هذة التطبيقات مفتوحة المصدر ومجانية:
- تطبيق Tor browser - متصفح تور
- تطبيق Podverse - للاستماع لبودكاستات مع امكانية التبرع عبر شبكة البرق
- تطبيق Orbot - لتحويل اتصالات الانترنت عبر شبكة تور-Tor  في هاتفك لإخفاء الأي بي-IP الحقيقي 
