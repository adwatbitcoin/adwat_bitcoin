# موقع أدوات بيتكوين بالعربي

رابط الموقع https://adwat.bitcoinarabic.org

كل محتوى الموقع تجدونه هنا على Github بشكل حُر مجاني ومفتوح المصدر، بإمكان اي شخص استعمال المواد المعروضة هنا، التعديل عليها وتقديم مواده الخاصة لدمجها في الموقع بشكل حُر ومفتوح للجميع.

هذا الموقع يستعمل [VuePress](https://vuepress.vuejs.org/) لبناء محتوى الموقع من ملفات نصية محفوظة بنهاية md (markdown) لبناء موقع HTML كامل بواسطة القالب الإفتراضي الملائم للغات التي تكتب من اليمين لليسار، من تصميم [Hassan Alizadeh](https://github.com/alizadeh118/vuepress-theme-default-rtl.git#readme).

- المحتوى النصي على شكل ملفات md تجدونهم في المجلد [docs](https://github.com/adwatbitcoin/adwat_bitcoin/tree/main/docs)
- الصور تجدونها داخل مجلدات مختلفه هنا: [/docs/.vuepress/public/images](https://github.com/adwatbitcoin/adwat_bitcoin/tree/main/docs/.vuepress/public/images)

## للمساهمة والتعديل على محتوى الموقع

هنالك طريقتين للمساهمة والتعديل على محتوى الموقع:

### ✅ لتعديلات بسيطة بواسطة Github هنا

لتعديلات بسيطة: مثل تصحيح خطأ إملائي، تدقيق لغوي، تصحيح رابط لا يعمل وهكذا...

1. قم بإنشاء حساب على [Github](https://github.com/signup) اذا لم يكن لديك حساب مسبقا.
2. إذهب للمقالة التي ترغب بالتعديل عليها في موقع [**أدوات بيتكوين بالعربي**](https://adwat.bitcoinarabic.org) في نهاية كل المقالة ستجد رابط **"ساعدنا في تحسين هذا المحتوى"** عند الضغط عليه، سيأخدك لملف المقالة في Github (بعد تسجيل الدخول بواسطة حسابك).
3. قم بالضغط على **صورة القلم ✏️** في الزاوية اليمنى من الأعلى في Github.
4. قم بالتعديل على محتوي النص. بإمكانك استخدام رموز [Markdown](https://www.markdownguide.org/basic-syntax/).
5. وفي النهاية عند Propose changes اكتب في الخانة العليا عنوان يصف ما قمت به وفي الخانة تحتها شرح وافي لجميع التغييرات. ثم إضغط على زر `Propose changes`. 
  

### ✅ لتعديلات كبيرة عن طريق بناء الموقع على حاسوبك الشخصي، إضافة محتواك وطلب دمجه

لتغيرات وتعديلات كبيرة: مثل إضافة مقالة، قسم جديد، أو شرح كامل على محتوى الموقع 

بامكانك بناء الموقع محليا على حاسوبك الشخصي، إضافة محتواك وطلب دمجه في الموقع الرئيسي، عبر اتباع الخطوات التالية:

1. قم بإنشاء حساب على [Github](https://github.com/signup) اذا لم يكن لديك حساب هناك.
2. تحميل وتنصيب هذة البرامج:
	- [تحميل وتنصيب برنامج NodeJS](https://nodejs.org/ar/)
		- قم بتحميل الإصدار **الموصى به لجميع المستخدمين**
		- بعد تنصيب البرنامج سيتم اضافة cmd جديد قم بالبحث عنه `Node.js command prompt` وافتحه.
		- ستظهر شاشة سوداء مثل هذة:
			```bash
			Your environment has been set up for using Node.js 16.13.2 (x64) and npm.
			C:\Users\YOUR_PC_USERNAME>
			```

	- [تنصيب إضافة Yarn](https://classic.yarnpkg.com/en/docs/install)
		- عن طريق كتابة الكود التالية في نافذة ال cmd التي فتحناها اعلاه:
			- `npm install --global yarn`
	
	- [تحميل وتنصيب برنامج GitHub Desktop](https://desktop.github.com/)
	
	- [تحميل وتنصيب برنامج تحرير نصوص Notepad++ ](https://notepad-plus-plus.org/downloads/)
3. نقوم بتحميل الموقع من GitHub
	- نقوم بالدخول الى [رابط الموقع في GitHub](https://github.com/adwatbitcoin/adwat_bitcoin)
	- نضغط على زر `Code` باللون الاخضر من اليمين في الاعلى
	- ثم على `Open with GitHub Desktop`
	- في النافذة التي ستظهر لك قم باختيار `Open GitHubDesktop.exe`
	- انتبه في أي مجلد سيتم حفظ الملفات. 
		- المسار الافتراضي سيكون: `C:\Users\YOUR_PC_USERNAME\Documents\GitHub\adwat_bitcoin`
		- سيكون `YOUR_PC_USERNAME` اسم المستخدم لحاسوبك
	- ثم قم بالضغط على `Clone`
4. سنقوم بالعودة `Node.js command prompt` الى الشاشة السوداء
	```bash
	Your environment has been set up for using Node.js 16.15.0 (x64) and npm.
	C:\Users\YOUR_PC_USERNAME>
	```
	- سنقوم بتغيير المسار الى المسار الذي يحتوي على ملفات الموقع داخل مجلد docs هكذا:
		```sh
		cd C:\Users\YOUR_PC_USERNAME\Documents\GitHub\adwat_bitcoin\docs
		```
		- قم بتغيير `YOUR_PC_USERNAME` لاسم المستخدم الخاص بحاسوبك
		
	- سنقوم ببناء الموديوز المطلوبة للموقع عبر ادخال الكود التالي:
		```sh
		yarn install
		```
	- لتشغيل الموقع
		```sh
		yarn dev
		```
		- ستظهر لك هذة الرسالة:
		```sh
		> VuePress dev server listening at http://localhost:8080/
		```
	- لمشاهدة الموقع يرجى الدخول من المتصفح الى العنوان التالي:
		<http://localhost:8080/>
	

		
