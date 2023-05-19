# ابني محفظتك الباردة بنفسك مع نظام SeedSigner

يمكنك بناء محفظة باردة صلبة بنفسك، تستطيع شراء مكوناتها (شاشة صغيرة، كاميرا ووحدة معالجة) من الانترنت والتي لا تتعدى 50 دولار كحد اقصى، تركبها وتحمل عليه برنامج مفتوح المصدر ومجاني يسمى **سيدساينر**، تستعمله لإنشاء كلمات مفتاحية وتوقيع عمليات بيتكوين بشكل مفصول تماما عن الانترنت. 

![seedsigner-1](/images/seedsigner/SeedSigner-1.png)


## قم ببناء جهاز توقيع بيتكوين ومحفظة باردة غير متصلة بالإنترنت بسعر أقل من 50 دولار

مشروع SeedSigner يهدف لتسهيل واتاحه استخدام محافظ بيتكوين باردة (اي غير متصلة بالانترنت) ومحافظ متعددة التواقيع من خلال بناء جهاز لتوقيع عمليات بيتكوين باستخدام مكونات وأجهزة غير مكلفة ومتوفرة للجمهور، اذ يمكن الحصول عليها باقل من 50 دولار عادة.

الجهاز يحتوي على كاميرا وشاشة ليسمح بتبادل المعلومات عبر QR Code بشكل آمن ومفصول بشكل تام عن الانترنت.

الجهاز عبارة عن محفظة باردة، حيث يتيح إنشاء كلمات مفتاحية خاصة بشكل امن من خلال تصوير صورة رقمية او بشكل يدوي عن طريق ادخال نتائج رمي حجر نرد (مكعب 6 ارقام) لعشوائية تامة.

![SeedSigner-Back](/images/seedsigner/back.png)

### الجهاز ليس لمحفظة واحدة انما لمحافظ متعددة      

الجهاز يسمى جهاز توقيع كونه يقوم بحفظ الكلمات المفتاحية مؤقتا ما دام متصل بالكهرباء وفورا عند فصله عن مصدر الكهرباء تختفي بتاتا مع كل المفاتيح الخاصة. ليكون جاهزا للاستعمال من جديد بشكل امن من قبل حتى اشخاص اخرين او لاستعمالة لمحافظ باردة اخرى مختلفه ومنفصله تماما عن الاولى. لذلك هو اقرب لان يكون جهاز توقيع من كونه محفظة باردة فقط.

الجهاز يمكن تصدير واستيراد الكلمات المفتاحية كما تفعله المحافظ العادية. لكن روعته انه يتيح لك ايضا تصديرهم كرمز QR Code حيث يسهل عملية رسمهم يدويا على ورقة لتستطيع استيراد المحفظة مجددا بشكل سريع مستقبلا.

**يمكن تصدير الكلمات المفتاحية على شكل QR code ايضا على قطعة معدنية**

![metal-seed-qr](/images/seedsigner/metal-seed-qr.jpg)

[فيديو لرسم 12 كلمة على شكل QR Code على ورقة](https://www.youtube.com/watch?v=c1-PqTNx1vc)

[![SeedSigner Is AWESOME](https://img.youtube.com/vi/c1-PqTNx1vc/0.jpg)](https://www.youtube.com/watch?v=c1-PqTNx1vc)

[رابط لتحميل ملفات طباعة QR فارغة جاهزة للرسم عليها ](https://github.com/SeedSigner/seedsigner/tree/dev/docs/seed_qr/printable_templates)

## مميزات جهاز التوقيع SeedSigner

- يتيح إنشاء كلمات مفتاحية بشكل اوتوماتيكي وسهل من خلال تصوير صورة رقمية او بشكل يدوي عبر ادخال نتائج رمي حجر نرد 99 مرة لإنشاء عشواية عالية High Entropy.
- يحتوي على خاصية لحساب الكلمة الاخيرة (الكلمة 12 او الكلمة ال-24).
- بالإمكان ادخال عدة كلمات مفتاحية بنفس الوقت أثناء تشغيل الجهاز بشكل مؤقت (عدة محافظ او عدة مفاتيح).
- توقيع المعاملات ونقل البيانات يتم عن طريق استخدام رموز QR فقط (بشكل offline).
- متوافق مع Specter Desktop و Sparrow و BlueWallet Vaults.

![SeedSigner-Front](/images/seedsigner/front.png)

## بماذا تختلف فكرة SeedSigner عن باقي المحافظ الباردة المتوفرة في السوق

المحافظ الباردة كليدجر او تريزور (Trezor,Ledger) وغيرها تطلب منك دائما كتابة الكلمات المفتاحية السرية (العبرات التذكيرية 12 أو 24 كلمة) وحفظها في مكان آمن في حال نسيت رقم الPIN او حصل اي عطل بالجهاز او تم سرقته لا قدر الله، اذ يمكنك من خلال الكلمات استرجاع عناوين المحفظة وما بها.

من يسرق او يجد الجهاز سيستصعب سرقتك كون هذة الاجهزة تحتوي على عُنصر ووحدة معالجة أمنية تخفي المفاتيح الخاصة او تمنع محاولات اختراق الكود السري واذا تكررت محاولات ادخال الكود يتم اتلاف وحذف المعلومات والمفاتيح به عادة.

لكن كل من تقع يده على الكلمات المفتاحية عمليا ليس بحاجة اصلا لجهاز المحفظة الباردة لسرقتك. عندها تتلاشى كل التعقيدات الأمنية التي وفرها لك الجهاز الصلب. حيث يمكن بكل بساطة ادخال هذة الكلمات لاي تطبيق محفظة على الجوال ونهب كل ما بها.

لذلك **الكلمات مهمة اكثر بكثير من الجهاز الصلب نفسه**. هنا تأتي فكرة SeedSigner العبقرية والمختلفة عن باقي المحافظ. إذ أن الجهاز لا يحتوي على ذاكرة طويلة الامد اصلا. لذلك هو ليس بحاجة لكل التعقيدات الامنية التي تتوفر في باقي المحافظ الصلبة لحفظ المعلومات بها. 

عند تشغيل جهاز SeedSigner يطلب منك استيراد كلمات مفتاحية او إنشاء كلمات مفتاحية جديدة حيث تظهر لك على شاشة الجهاز مؤقتا ما دام الجهاز متصل بالكهرباء. عندها يطلب منك كتابتها على ورقة والتأكد منها وربط النسخة العامة من المحفظة مع هاتفك او حاسوبك المتصل هو بالانترنت [عن طريق XPUB](../wallets/#ما-هو-ال-xpub) بالضبط كسائر المحافظ الصلبة الباردة [إقرا المزيد هنا كيف تعمل المحافظ الباردة](../wallets/#كيف-تعمل-أجهزة-المحافظ-الباردة-الصلبة-h-w؟-وكيف-لها-ان-تنقل-المعلومات-للإنترنت)، لكن بما ان المعلومات ستختفي عن الجهاز فور فصله عن الكهرباء سيساعدك SeedSigner ايضا على حفظ هذة الكلمات بشكل رمز QR code ليسهل عملية استيراد المحفظة لاحقا. [شاهد هذا الفيديو](https://twitter.com/SeedSigner/status/1519431833498365952) 

في المرة التالية التي تشغل الجهاز ستقوم بعرض ال qcode الذي رسمته وسيقوم سيدساينر ببناء نفس المحفظة بنفس العناوين والمفاتيح الخاصة السابقة. عندها تستطيع التعامل معه كمحفظة عادية، تستطيع توقيع معاملات والدفع وحتى استعماله كجزء من محافظ متعددة التواقيع. بمساعدة كاميرا وشاشة هاتقك وكاميرا وشاشةال SeedSigner لنقل المعلومات بينتهم. 

لكن كل هذا مؤقتا حتى لحظة فصله عن الكهرباء اذ سيعود جهاز جديد تماما. تسمى هذة الميزة (Statless) اذ لا يعرف الحالة السابقة التي كان بها قبل فصله عن مصدر الطاقة.

باختصار ما تقوم به المحافظ الباردة الصلبة العادية فقط في حالات السرقة، التلف او نسيان للPIN. جهاز SeedSigner يقوم بهذة العملية في كل مرة تشغل الجهاز، لكن بطريقة سهلة جدا جدا.

![paper-seed-qr.jpg](/images/seedsigner/paper-seed-qr.jpg)

## أهمية هذا المشروع: 

هذا المشروع يجسد ويفند فكرة ان البيتكوين غير قابل للايقاف، اذ يمكن لأي احد بناء محفظة باردة بدون الاعتماد على حسن نية اي دولة بالسماح لأجهزة المحافظ الباردة بالدخول الى حدودها في حال قررت دولة معينة منعها، مع هذا المشروع لا يمكن لاحد حتى معرفة انك ستقوم باستعمال هذة المكونات لبناء محفظة باردة حتى. تذكروا هذا المشروع مكون من شاشة صغيرة، كاميرا بسيطة، وحدة معالجة وبرنامج تحمله من الانترنت مجانا.

هذا المشروع يساهم في حماية خصوصية المستخدمين للبيتكوين، فبدل شراء جهاز محفظة باردة من شركة معينة لا تعرف كيف ستتعامل هذة الشركة بتفاصيلك الشخصية مثل عنوان إقامتك، بريدك الإلكتروني تاريخ الشراء. هذة معلومات قيمة للهاكرز والمخترقين. [اقرأوا ماذا حدث لعملاء محفظة ليدجر الشهيرة عندما اخترقت قاعدة بياناتها](https://securitytouch.com/ar/قصص-مشهورة/تسريب-عناوين-عملاء-محفظة-ليدجر/) اذ تعرض الكثير منهم لمحاولات التصيد الاحتيالي(Phishing Attacks)وما زالوا يتعرضون لها حتى اليوم.

هذة المعلومات قيمة ايضا للعديد من الجهات الرقابية والتنظيمية التي قد تلزم الشركات على تسليمها لهم دون علم عملائها. وخاصة ان اغلب هذة المحافظ تأتي مرتبطة مع عُقد الشركات الكاملة لاستقبال معلومات من سلسلة الكتل (مثلLedger Live و Trezor Suite). بالتالي لديهم القدرة نظريا على ربط تفاصيلكم الشخصية بالعملات الذي تمتلكونها وبالتالي متابعة ومراقبة استعمالاتكم لأموالكم في البيتكوين. [إقرا عن عقدة البيتكوين ولماذا ننصحك بتشغيل عقدتك الكاملة](../full-node/#لماذا-ننصحك-بتشغيل-عقدك-الخاصة)

هذا المشروع يساهم في حل مشكلة [هجومات سلسلة التوريد Supply Chain attack](https://www.youtube.com/watch?v=nGTK3AogrdY) للمحافظ الباردة. اذ يمكن لمخترق معين ان يقوم باعتراض أجهزة المحافظ الباردة في مرحلة ما من عملية توريد الجهاز اليك، ليقوم بتثبيت برمجيات خبيثة اضافية هدفها سرقة اموالك. [شاهد هذا الفيديو](https://www.youtube.com/watch?v=BZnflNZB3bw) كيف استطاعت مختبرات الأمان في منصة Kraken استغلال ثغرة امنية في  محافظ Ledger Nano X لاضافة برمجية خبيثة سمحت للمحفظة باستعمال لوحة المفاتيح بالحاسوب دون اذن، فتح المتصفح  وارسال معلومات اليه. فقط من خلال ايصال المحفظة الى الحاسوب. 

[هذا فيديو اخر](https://www.youtube.com/watch?v=nGTK3AogrdY) لوصول محفظة صلبة باردة مُعدلة لزبون مع قطعة اضافية كان هدفها اختراق امواله.

في المحافظ الصلبة الباردة لديك ثقة شبه كاملة بالشركة المصنعة لها، كيف لك ان تعرف على ماذا يحتوي هذا الجهاز، ماذا لو كانت الكلمات المفتاحية التي تظهر لك هي جزء من كلمات مفتاحية ليست عشوائية تماما بل منشأة مسبقا.   

طبعا هنالك حلول لكل هذة الأمور، لكن كلها حلول معقدة ومكلفة. اما مع مشروع SeedSigner فانت تشتري القطع من محال ومواقع مختلفة وانت من تركب الجهاز بنفسك. وانت من يحمل ويتحقق ويثبت البرنامج على الجهاز الذي هو مفتوح المصدر.

![SeedSigner-Orange_Pill](/images/seedsigner/Orange_Pill.JPG)

## قائمة تسوق المكونات والأجهزة المطلوبة لبناء SeedSigner

لبناء SeedSigner، سوف تحتاج إلى:

- `Raspberry Pi Zero 1.3` - يفضل الإصدار 1.3 الذي يأتي بدون WiFi وبدون Bluetooth، لكن سيعمل أي طراز Raspberry Pi 2/3/4 أو Zero اخر. 
	- اذا اخترت Raspberry Pi Zero يمكنك شراء غطاء واقي بسيط له `Acrylic Protector Cover Case For Raspberry Pi Zero`
	- أو اذا كانت لديك طابعة ثلاثية الابعاد يمكنك تحميل ملفات لطباعة مجسم لغطاء له من Github مجانا [من هنا](https://github.com/SeedSigner/seedsigner/tree/dev/enclosures)

- شاشة `Waveshare 1.3" 240x240 pxl LCD` - عدد البكسلات 240 مهم جدا. [إضغط هنا للمزيد من المعلومات عنها](https://www.waveshare.com/wiki/1.3inch_LCD_HAT)
	- رابط للشاشة من [Aliexpress](https://www.aliexpress.com/item/32908723538.html)

- كاميرا متوافقة مع Pi Zero، (قم بشراءها مع الكابل).  تم تجربة الكاميرات التالية بنجاح:
	- `Aokin 5MP 1080p with OV5647 Sensor`
	- أو `AuviPal 5MP 1080p with OV5647 Sensor`
	
- كرت ذاكرة من نوع `MicroSD Card` بسعة 4 GB على الاقل.


### ملاحظاتي لقائمة الشراء:

- اختر شاشة Waveshare بعناية، تأكد من شراء الطراز الذي تبلغ دقته 240 × 240 بكسل.

![screen-back](/images/seedsigner/screen-back.jpg)

- اذا اشتريت طراز Raspberry Pi بدون `GPIO Hammer Header (Solderless)` مثل النوع اعلاه `Raspberry Pi Zero 1.3` ستوفر بعض النقود ولكن ستحتاج إلى [لحام](https://www.youtube.com/watch?v=8Z-2wPWGnqE) 40 سنًا GPIO pins (20 سنًا لكل صف) بلوحة Raspberry Pi Zero لتركيب الشاشة عليها. 
	- رابط لشراء الاسنان من موقع [Aliexpress](https://www.aliexpress.com/item/1005003649134658.html)
	- او ابحث في مواقع اخرى عن: `2x20 Male Gpio Dual Pin Header 20pin Pins Double Row 2.54mm Gold Plated Two Rows Nano Connector for Arduino PCB Raspberry Pi`
	- ستحتاج الى جهاز لحام وسيخ لحام [شاهد هذا الفيديو لمعرفة كيف تتم عملية اللحام](https://www.youtube.com/watch?v=9cS17JiohjY)
	 
	
- اما إذا كنت لا ترغب في اللحام، وجدت [هذا الفيديو](https://www.youtube.com/watch?v=PdDo1pkvFK8&t=682s) لاسنان ليست بحاجة الى لحام. أو يمكنك شراء طراز RP مع "GPIO Hammer Headers".
	- مثلا `Raspberry Pi Zero WH` يأتي ملحوم جاهز (لكن أغلى).
	- الحرف H يعني انه ملحوم جاهز، عندها لا حاجة لك بشراء أسنان توصيل.
	- اما الحرف W فيعني انه مع WIFI و BT لكن نظام SeedSigner سيقوم بتعطيلهم عند تشغيله للحماية. 
	

- كاميرات أخرى، المزودة بوحدة المستشعر (OV5647 Sensor) ستعمل جيدا، لكنها قد لا تتناسب مع غطاء Orange Pill اذا كنت تريد طباعة غطاء بطابعة ثلاثية الابعاد لجهازك.

- ستحتاج ايضا الى كابل microUSB لايصال الكهرباء للجهاز ومصدر للطاقة ( من محول 5V او من بطارية لتخزين الكهرباء)

- قد تحتاج الى بعض البراغي التالية اذا اخترت طباعة غطاء بنفسك:
	- `M2.5 20mm screw` رابط من [Amazon](https://www.amazon.ae/MroMax-M2-5-20mm-Stainless-Fasteners/dp/B07YS65R52) أو [Aliexpress](https://www.aliexpress.com/item/2251832624557792.html)
	- `M2.5 nuts` رابط من [Amazon](https://www.amazon.com/HONJIE-100pcs-M2-5-M5Hex-Nuts/dp/B08547D6C4) أو من [Aliexpress](https://www.aliexpress.com/item/2251832790859685.html)
	
- حاليا عند كتابة هذة السطور توجد أزمة في رقائق أشباه الموصلات حول العالم بسبب أزمة كورونا. قد تجدون صعوبة بالحصول على أجهزة Raspberry Pi أنصحكم بالدخول الى صفحة المنتج في موقع [raspberrypi.com]( https://www.raspberrypi.com/products/raspberry-pi-zero/) الرسمي والضغط على زر الشراء وفحص اذا كان المنتج متوفر في محال معتمدة في دولتك او الدول المجاورة.

![SeedSigner-all-parts](/images/seedsigner/seedsigner-all-parts.png)

## فيديوهات لطريقة تركيب مكونات جهاز SeedSigner

- [طريقة تركيب مكونات الجهاز مع اللحام](https://www.youtube.com/watch?v=aIIc2DiZYcI)
- [فيديو لتركيب جهاز SeedSigner مفتوح الغطاء](https://www.youtube.com/watch?v=gXPFJygZobE)
- [فيديو لتركيب جهاز SeedSigner مغلق الغطاء مع طريقة لحام اسنان التوصيل (الدبابيس )](https://www.youtube.com/watch?v=aIIc2DiZYcI)
- [ بن من BTC Sessions قام بفيديو شرح عن خصائص الجهاز ايضا](https://www.youtube.com/watch?v=oBd8ZhsXnrA)


## كيف تقوم بتحميل النسخة الاخيرة من أصدار SeedSigner
 
نقوم بالدخول الى موقع مشروع SeedSigner في Github، نجد تحت قسم الإصدارات Releases النسخة الاخيرة من ملف التحميل تحت خانة Assets:

[إضغط هنا لرابط الدخول مباشرة](https://github.com/SeedSigner/seedsigner/releases)

نقوم بتحميل الملف الذي ينتهي ب img.zip كالتالي:

![SeedSigner-0](/images/seedsigner/seedsigner-0.gif)


## التحقق من ملف التحميل قبل تنصيبه
> خطوة غير اجبارية ولكن محبذة على مبدأ "لا تثق بل تحقق".

هذة خطوة مهمة جدا ولكن غير إلزامية،انصحك بتعلم التحقق من صحة الملفات التي تقوم بتحميلها من الانترنت بشكل عام، [هنا قمت بشرح كل ما ستحتاجة بالتفصيل](../guide/verify-files-with-gpg.md). 

اليكم الخطوات سريعا:

بالاضافة الى ملف التنصيب (ينتهي ب img.zip) سنقوم بتحميل ملف التوقيع (ينتهي ب sig.)

![seedsigner-downloads-files](/images/seedsigner/seedsigner-files.png)

::: warning انتبهوا
لقد قام المُطور بالتوقيع على ملف هاش التنصيب(الذي ينتهي ب sha256) وليس ملف التنصيب بشكل مباشر(الذي ينتهي ب img.zip)
:::

لذلك سنقوم ايضا بتحميل ملف الهاش (ينتهي ب sha256)، سنجلب المفتاح العام للمًطور لنتحقق من ملف الهاش، بعدها سنقوم بعمل هاش لملف التنصيب ومقارنته مع ملف الهاش.

اذا تطابقت نتيجة الهاش فان الملف سليم ويمكننا البدأ بعملية التنصيب.


سأقوم بوضع جميع الملفات في مجلد جديد ساسميه seedsigner:
- ملف التنصيب (الذي ينتهي ب img.zip) 
- ملف التوقيع (ينتهي ب sig.)
- ملف الهاش ( ينتهي ب sha256)


### استيراد المفتاح العام للمُطور

يتبقى علينا جلب المفتاح العام للمُطور GPG. المفتاح العام نفسه قد قام المطور بوضعه في Github في [هذا الرابط](https://github.com/SeedSigner/seedsigner/blob/main/seedsigner_pubkey.gpg)


لكن لاحظوا ان المطور قد قام بوضع البصمة الرقمية لمفتاحه العام تحت حسابه في github هنا:

![seedsigner-GPG](/images/seedsigner/seedsigner-gpg.png)

ايضا في حسابه على تويتر [@SeedSigner](https://twitter.com/SeedSigner) هنا:

![seedsigner-GPG-twitter](/images/seedsigner/seedsigner-gpg-twitter.png)

و[ايضا هنا في تويته](https://twitter.com/SeedSigner/status/1389617642286329856) بتاريخ 04-ايار-2021 


كل هذا لكي نتأكد بان المفتاح العام GPG وبصمتة الرقمية هذه ادناه، هي لمُطور SeedSigner بحيث يمكننا التحقق من الملفات التي سيصدرها مستقبلا من خلاله. 

```
4673 9B74 B56A D88F 14B0 882E C7EF 7090 0726 0119
```

تذكروا ان البصمة الرقمية تُنتج من مفتاح عام واحد فقط لا غير ولا يمكن العودة للمفتاح العام من خلال البصمة الرقمية one way function، لذلك ساقوم بجلب المفتاح العام من خلال البحث عن البصمة الرقمية في سيرفير للتوقيع باستخدام برنامج Kleopatra.   

نقوم بالدخول الى برنامج kleopatra الذي يأتي مع برنامج Gpg4win-GnuPG الذي [شرحنا هنا كيف نقوم بتحميله في نظام ويندوز](../guide/verify-files-with-gpg.md#تثبيت-gpg-في-windows)

نقوم بالضغط على lookup on server

![kleopatra-Lookup-on-server](/images/tor/tor_4.png)

ثم نقوم بالبحث عن المفتاح العام للمطور  في خادم للتواقيع من خلال البصمة الرقمية، واضافة المفتاح العام الى برنامج Kleopatra كما بالصورة المتحركة هنا:

```
4673 9B74 B56A D88F 14B0 882E C7EF 7090 0726 0119
```

![seedsigner-GPG](/images/seedsigner/seedsigner-import-gpg-public-key.gif)

::: details طريقة اخرى هي تحميل المفتاح العام نفسه كملف من Github.

كما ذكرت فقد قام المًطور بوضعه في Github في [هذا الرابط](https://github.com/SeedSigner/seedsigner/blob/main/seedsigner_pubkey.gpg)

نقوم بالضغط على raw ليظهر لنا المفتاح العام كنص فقط، بعدها نقوم بحفظ الصفحة كملف عن طريق الضغط على زر الفأرة الأيمن ثم **Save Page As..**. قم باختيار نوع الملف All Files (*.*) عندها ينزل ملف المفتاح العام (والذي ينتهي ب gpg) نقوم بالدخول الى المجلد، نقف على ملف التوقيع الذي ينتهي ب .gpg ونقوم بالضغط على (زر الفأرة الأيمن) ثم اختيار (More GpgEX options) ثم اختيار (Import keys) لنحصل على رسالة  تقول ان Certificates imported: 1 . اذا فتحنا تطبيق Kleopatra سنجد ان المفتاح العام الذي تم استيراده هو ل seedsigner وال Key-ID يطابق اخر 16 من البصمة الرقمية لمفتاحه العام. 

```
C7EF 7090 0726 0119
```

اذا بهذا نكون قد تأكدنا باننا جلبنا المفتاح العام الصحيح الخاص ب SeedSigner.

 كل الخطوات اعلاه موضحة بالصورة ادناة:

![seedsigner-import-GPG-public-key](/images/seedsigner/seedsigner-import-gpg-public-key-1.gif)

::: 

### عملية التحقق من ملف الهاش 
لكي نتأكد من صحة الملف نعود للمجلد الذي وضعنا به كل الملفات، نقف على ملف التوقيع الذي ينتهي ب .sig ونقوم بالضغط على (زر الفأرة الأيمن) ثم اختيار (More GpgEX options) ثم اختيار (Verify) لنحصل على:

![seedsigner-sig-verify](/images/seedsigner/seedsigner-sig-verify.png)

لتظهر لنا الرسالة ان الملف بالفعل تم توقيعه من قبل المفتاح العام ل SeedSigner كالتالي:

```bash
Verified ‘seedsigner_0_5_0.img.zip.sha256’ with ‘seedsigner_0_5_0.img.zip.sha256.sig’: 
The data could not be verified.

Signature created on Monday, April 25, 2022 6:31:10 PM
With certificate:
seedsigner <btc.hardware.solutions@gmail.com> (C7EF 7090 0726 0119)
The used key is not certified by you or any trusted person.
```
اذا اردت مزيد من التفاصيل يمكنكم الضغط على Show Audit Log  ستظهر الرسالة التالية:

```bash
gpg: Signature made 4/25/2022 6:31:10 PM Turkey Standard Time
gpg:                using RSA key 46739B74B56AD88F14B0882EC7EF709007260119
gpg: Good signature from "seedsigner <btc.hardware.solutions@gmail.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 4673 9B74 B56A D88F 14B0  882E C7EF 7090 0726 0119
```

أنتبهوا لجملة Good signature from والبصمة الرقمية الكاملة لمفتاحه العام. 

لا تكترثوا بالرسائل التي تقول:

``` shell
The data could not be verified.
# أو
The used key is not certified by you or any trusted person.
# أو
WARNING: This key is not certified with a trusted signature!
There is no indication that the signature belongs to the owner.
```

فهي تعني فقط انك لم تُشر لحاسوبك انك تثق بأن هذا المفتاح العام هو للمُطور، 

هكذا نكون قد تحققنا من ان الملف الذي ينتهي ب sha256 قد تم توقيعه من قبل المفتاح العام للمطور.

هذة صورة متحركة تنجز ما شرحته:
![seedsigner-file-verify](/images/seedsigner/seedsigner-file-verify.gif)


### الخطوة الاخيرة: فحص تطابق الهاش

الان يتبقى علينا التأكد من تطابق الهاش لملف التنصيب مع محتوى ملف الهاش الذي وقع عليه المُطور. 

سنقوم بأختيار الملف المراد معرفة البصمة الرقمية له ثم الضغط على (زر الفأرة الأيمن) ثم اختيار (More GpgEX options) ثم اختيار (Create checksums)

بعدها نقارن ملف الهاش الذي ارفقه المُطور، اذا تطابق الهاش فإن الملف سليم ويمكننا الان مباشرة تنصيبة.

لاحظوا الرسالة من تطبيق Kleopatra والتي تقول ان ملف text جديد قد إضيف تحت اسم sha256sum.txt

افتح ملف sha256sum.txt ستجد ان نتيجة الهاش موجودة 
كما وضحت هناك

سنقوم بنسخ النتيجة ونذهب الى ملف الهاش الذي ارفقه المُطور ونقارن النتائج.

اذا تطابقت النتائج فهذا يعني اننا حملنا الملف السليم ويمكننا عندها البدأ بتنصيب البرنامج.

![seedsigner-final-verify](/images/seedsigner/seedsigner-final-verify.gif)


## تنصيب SeedSigner على كرت MicroSD 

لكي نستطيع تنصيب نظام SeedSigner على كرت ال MicroSD سنحتاج اولا الى محول MicroSD Adapter اذا كان حاسوبك يدعم مدخل SD فقط. في حال لا يوجد مدخل، عليك بشراء [محول لمدخل USB كهذا مناسب لجميع الاجهزة](https://www.amazon.com/Vanja-Reader-Adapter-Portable-Memory/dp/B01JJ1VDQK/) 

سنقوم بالاستعانة ببرنامج مفتوح المصدر يسمى Balena Etcher [إضغط هنا لتحميل  Balena's Etcher tool](https://www.balena.io/etcher/)

![download-balena-etcher](/images/balena-etcher/download-balena-etcher.png)

نقوم بتنصيب برنامج balenaEtcher
![download-balena-etcher](/images/balena-etcher/simple-install.png)

في صفحة البداية نقوم بالضغط على Flash from file ونختار ملف التنصيب الذي ينتهي ب img.zip ذو الحجم الكبير.
![select-image-file](/images/balena-etcher/select-image-file.png)

ثم نضغط على Select target لاختيار كرت الذاكرة
![select-microsd-name](/images/balena-etcher/select-microsd-name.png)
 
 نضغط على Flash! لكي نبدأ في عملية تنصيب الملفات على كرت الـ MicroSD
![select-microsd-name-2](/images/balena-etcher/select-microsd-name-2.png)


![flash image file](/images/balena-etcher/flash.png)

![decompressing](/images/balena-etcher/decompressing.png)

![flashing_image_file](/images/balena-etcher/flashing.png)

عندما نصل لهذة الشاشة، نكون قد انتهينا من عملية التنصيب وبإمكاننا إخراج الـ MicroSD من الحاسوب
![flash-complete](/images/balena-etcher/flash-complete.png)

## تشغيل جهاز التوقيع SeedSigner بعد تثبيت النظام على كرت MicroSD

بعد الانتهاء من عملية التنصيب أصبح لدينا كرت MicroSD يحتوي على نظام SeedSigner
سنقوم بإدخال كرت الذاكرة MicroSD في جهاز ال Raspberry Pi ثم نقوم بتوصيله الى مصدر الكهرباء.

يمكن اخراج كرت الذاكرة بعد توصيل الكهرباء اليه واكمال العمل عليه. فلن يتم حفظ اي معلومات تتعلق بالمفاتيح الخاصة.

[شاهد هذا الفيديو لشرح عملية نقل و توقيع تحويل بيتكوين من الحاسوب الى SeedSigner](https://twitter.com/KeithMukai/status/1508905034150469632)

<img src="/images/seedsigner/psbt.jpg" alt="psbt" width="200"/>
<img src="/images/seedsigner/psbt1.jpg" alt="psbt1" width="200"/>
<img src="/images/seedsigner/psbt2.jpg" alt="psbt2" width="200"/>
<img src="/images/seedsigner/psbt3.jpg" alt="psbt3" width="200"/>
<img src="/images/seedsigner/psbt4.jpg" alt="psbt4" width="200"/>
<img src="/images/seedsigner/coordinator-softwares.jpg" alt="coordinator-softwares.jpg" width="200"/>

## روابط مفيدة
- [موقع سيدساينر - seedsigner.com](https://seedsigner.com/)
- [@SeedSigner على تويتر](https://twitter.com/SeedSigner)
- [مجموعة SeedSigner على التلجرام](https://t.me/joinchat/GHNuc_nhNQjLPWsS)
- [المشروع على  Github](https://github.com/SeedSigner/seedsigner)