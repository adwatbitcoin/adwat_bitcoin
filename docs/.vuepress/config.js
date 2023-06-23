module.exports = {
    base: '/',
    lang: 'ar-SA',
    title: 'أدوات بيتكوين',
    description: 'موقع يشرح لك كيف تستخدم البيتكوين بشكل عملي',
    theme: 'default-rtl',
    themeConfig: {
        repo:'adwatbitcoin/adwat_bitcoin',
        repoLabel:'للمساهمة',
        editLinks: 'true',
        editLinkText:'ساعدنا في تحسين هذا المحتوى',
        docsDir: 'docs',
		docsBranch: 'main',
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
			{title: 'بنك معلومات بيتكوين', // required
				//path: '/bitcoin/',      // optional, link of the title, which should be an absolute path and must exist
				collapsable: false,		// optional, defaults to true
				//sidebarDepth: 3,    	// optional, defaults to 1
				children:
				[
					 ['/bitcoin/','ما هو البيتكوين'],
					 ["wallets/",'ما هي محفظة البيتكوين'],
					 ['/full-node/','ما هي عقدة البيتكوين الكاملة'],
					 //["lightning/",'ما هي شبكة البرق'],
					 //["lightning/Non-custodial-LN-wallet",'ما هي محفظة البرق الغير وصائية'],
					 //['/bitcoin/coinjoin','ما هو ال- CoinJoin'],
					 ['/bitcoin/hash-functions','ما هي دالة الهاش أو التجزئة'],
					 ['/bitcoin/privacy-matters','لماذا الخصوصية على البيتكوين'],
					 ['/bitcoin/exchanges-risks','مخاطر ترك أموالك على المنصات'],
				]
			},
			{title: "شبكة البرق",	
				collapsable: false,
				children: 
				[
					["lightning/",'ما هي شبكة البرق'],
					["lightning/Non-custodial-LN-wallet",'ما هي محفظة البرق الغير وصائية'],
				]
			},
			{title: "تطبيقات محافظ بيتكوين",
				collapsable: false,	// optional, defaults to true
				children: 
				[
					["/wallets/bluewallet",'محفظة بلو-واليت BlueWallet'],
					["/wallets/sparrow",'محفظة سبارو Sparrow Wallet'],
					["wallets/samourai",' محفظة ساموراي Samourai Wallet'],
				]
			},
			{title:"دليلك العملي",	// required
				collapsable: false, 	// optional, defaults to true
				sidebarDepth: 3,    	// optional, defaults to 1
				children:
				[
					["guide/f-droid",'تعلم كيف تتعامل مع متجر F-droid'],
					["guide/verify-files-with-gpg",'تعلم كيف تتحق من ملفات قبل تنصيبها'],
					["guide/tor-browser",'تعلم كيف تُنصب متصفح تور Tor Browser'],
					["guide/seedsigner",'تعلم كيف تبني بنفسك محفظة باردة صلبة SeedSigner'],
					["guide/air-gap-pc-using-tails_os",'تعلم كيف تقوم بتنصيب نظام تشغيل Tails'],
					//["guide/verify-files-with-gpg",'تعلم كيف تحتفظ بالكلمات المفتاحية'],
					//["guide/verify-files-with-gpg",'تعلم 5 طرق لزيادة حماية كلماتك المفتاحية'],
					//["guide/verify-files-with-gpg",'تعلم كيف تنشأ كلماتك المفتاحية بشكل آمن'],	  

				]
			},
			/*  
			{title:"أدوات ومصادر خارجية",
				collapsable: false,
				children:
				[
					["random/websites",'مواقع خارجية'],
				]
			},
			*/
        ]
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['container', 
			{
				type: 'vue',
				before: '<pre class="vue-container"><code>',
				after: '</code></pre>'
			}
		]
    ]
}
