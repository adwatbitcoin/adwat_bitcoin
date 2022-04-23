module.exports = {
    base: '/',
    lang: 'ar-SA',
    title: 'أدوات البيتكوين بالعربي',
    description: 'موقع يشرح لك كيف تستخدم البيتكوين بشكل عملي',
    theme: 'default-rtl',
    themeConfig: {
        repo:'adwatbitcoin/adwat_bitcoin',
        repoLabel:'للمساهمة',
        editLinks: 'true',
        editLinkText:'ساعدنا في تحسين هذا المحتوى',
        docsDir: 'docs',
        lastUpdated: 'آخر تحديث',
        editLinks: true,
		
        smoothScroll: true,
        logo: '/logo.png',
        nav: [
            {
                text: 'الرئيسية',
                link: '/bitcoin/'
            },
			
			{
                text: 'عقدة كاملة',
                link: '/full-node/'
            },
			
			{
                text: 'محافظ بيتكوين',
                link: '/wallets/'
            },
			
			{
                text: 'شبكة البرق',
                link: '/lightning/'
            },
            {
                text: 'بيتكوين بالعربي',
                link: 'https://bitcoinarabic.org'
            }
        ],
        sidebar: [
		
		  { 
			title: 'بنك معلومات بيتكوين', // required
			//path: '/bitcoin/',      // optional, link of the title, which should be an absolute path and must exist
			collapsable: false,		// optional, defaults to true
			//sidebarDepth: 3,    	// optional, defaults to 1
            children:[
              ['/bitcoin/','ما هو البيتكوين'],
			  ["wallets/",'ما هي محفظة البيتكوين'],
			  ['/full-node/','ما هي عقدة البيتكوين الكاملة'],
			  ["lightning/",'ما هي شبكة البرق'],
			  //['/bitcoin/coinjoin','ما هو ال- CoinJoin'],
              ['/bitcoin/hash-functions','ما هي دالة الهاش أو التجزئة'],
			  ['/bitcoin/exchanges-risks','مخاطر ترك أموالك على المنصات'],
            ]
          },
		  
		/* للتجربة فقط 
		{
        title: "عنوان للقسم",
        children: [
          "full-node/",
		  "lightning/",
		  '/bitcoin/coinjoin',
		  ["/bitcoin/hash-functions",'ما هي دالة الهاش أو التجزئة'],
		  ['/bitcoin/exchanges-risks','مخاطر ترك أموالك على المنصات'],
			]
		},
		*/ 
		  
		  
		  {
            collapsable: false, 	// optional, defaults to true
			sidebarDepth: 3,    	// optional, defaults to 1
            title:"دليلك العملي",	// required
            children:[
              ["guide/f-droid",'تعلم كيف تتعامل مع متجر F-droid'],
              ["guide/verify-files-with-gpg",'تعلم كيف تتحق من ملفات قبل تنصيبها'],
			  ["guide/tor-browser",'تعلم كيف تُنصب متصفح تور Tor Browser'],
			  //["guide/verify-files-with-gpg",'تعلم كيف تحتفظ بالكلمات المفتاحية'],
			  //["guide/verify-files-with-gpg",'تعلم 5 طرق لزيادة حماية كلماتك المفتاحية'],
			  //["guide/verify-files-with-gpg",'تعلم كيف تنشأ كلماتك المفتاحية بشكل آمن'],	  
			  //["guide/verify-files-with-gpg",'تعلم كيف تقوم بإنشاء حاسوب Air-gap آمن'],
            ]
		   },
		  
		  /*
          {
            collapsable: false,
			title:"محافظ بيتكوين",
            children:[			  
              ["wallets/bluewallet",'محفظة bluewallet'],
              ["wallets/sparrow",'محفظة sparrow'],
              ["wallets/samourai",'محفظة samourai'],
            ]
          },
		  
		  {
            collapsable: false,
			title:"أدوات ومصادر خارجية",
            children:[
			  ["random/websites",'مواقع خارجية'],
			 
            ]
          },
		  */
        ]
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }]
    ]
}
