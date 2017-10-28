var data = {
	menu: false,
	skills: [
		{
			name: "Languages",
			primary: [
				{
					name: "PHP7",
					value: 90,
					colors: ['#46465e','#5a68a5']
				},
				{
					name: "JS",
					value: 90,
					colors: ['#f7df1e','#f7df1e']
				},
				{
					name: "HTML5",
					value: 75,
					colors: ['#E34C26','#F06529']
				},
				{
					name: "SQL",
					value: 70,
					colors: ['#2980b9','#3498db']
				}
			],
			secondary: ['Java','C','C++','Go','CSS']
		},
		{
			name: "Frameworks",
			primary: [
				{
					name: "Laravel",
					value: 90,
					colors: ['#f4645f','#e67e22']
				},
				{
					name: "Vue.js",
					value: 80,
					colors: ['#35495e','#42b883']
				},
				{
					name: "Symfony",
					value: 70,
					colors: ['#333333','#525252']
				}
			],
			secondary: ['React','Ember','AngularJS']
		}
	],
	career: [
		{
			checked: false,
			title: "Internship Software Architect",
			subtitle: "@Your company?",
			text: "I am currently looking for an internship as a Junior Software Architect.<br>" +
				"If you are interested in having me, don't hesitate to <a href='/#/contact'>contact me</a>.",
			from: "Jan 2018",
			to: "June 2018",
			img: "/img/timeline/YourCompany.png"
		},
		{
			checked: true,
			title: "Software Architect",
			subtitle: "@Neosmose",
			text: "Development of numerous IT projects: e-learning website, data management of connected devices, intranet, showcase websites, etc.",
			from: "2016",
			to: "2017",
			img: "/img/timeline/Neosmose.png"
		},
		{
			checked: true,
			title: "Intership Web Development",
			subtitle: "@Les Polypodes",
			text: "Development of an open-source cultural events management solution for non-profit associations.<br>" +
				"Technologies used: PHP, Symfony, CalDAV, Vagrant",
			from: "2015",
			to: "2015",
			img: "/img/timeline/Polypodes.png"
		}
	],
	education: [
		{
			checked: false,
			title: "Master's degree in Software architecture",
			subtitle: "@University of Nantes",
			text: "I always liked to understand how every piece of software could work together in order to make complex system work seamlessly and smoothly.<br>"+
				"In order to improve my knowledge about this, I went back to Nantes to earn a Master's degree in Software Architecture.",
			from: "2016",
			to: "2018",
			img: "/img/timeline/UnivNantes.png"
		},
		{
			checked: true,
			title: "Bachelor's degree in Computer Games Development",
			subtitle: "@University of the West of Scotland",
			text: "After the DUT, I had the opportunity the spend one year in an english-speaking country to achieve a Bachelor. "+
				"Scotland, its lakes, castles and landscapes, attracted me to Glasgow to learn about Computer Games Engineering.<br>"+
				"Even if I realized that I didn't wanted to pursue in Video Games Development, I still learned a lot about project management and working in a team.",
			from: "2015",
			to: "2016",
			img: "/img/timeline/UWS.png"
		},
		{
			checked: true,
			title: "DUT in Computer Engineering",
			subtitle: "@IUT of Nantes",
			text: "During 2 years, I learned the basics of Computer Engineering ranging from basic algorithms and data structures to conception and realisation through networks and databases.",
			from: "2013",
			to: "2015",
			img: "/img/timeline/IUT_Nantes.gif"
		},
	],
	projects: [
		{
			title: 'Professionnal projects',
			items: [
				{
					slug: 'autoprop',
					name: 'AutoProp',
					tags: 'Laravel, Vue',
					description: 'Fleet management and distribution'
				},
				{
					slug: 'tracetemp',
					name: 'Tracetemp',
					tags: 'Laravel, Vue',
					description: 'IOT temperature data management'
				},
				{
					slug: 'coruscant',
					name: 'Coruscant',
					tags: 'Laravel, Vue',
					description: 'In-house professionnal training management'
				}
			]
		},
		{
			title: 'Small projects',
			items: [
				{
					slug: 'qrmanager',
					name: 'QRManager',
					tags: 'PHP, JS',
					demo: 'https://errorna.me/tools/qr',
					description: 'Minimal tool for QR codes creation and management'
				},
				{
					slug: 'oer',
					name: 'OER',
					tags: 'PHP, JS',
					demo: 'https://errorna.me/tools/OER/',
					description: 'Creates OVH Email Redirections from a CSV file'
				},
				{
					slug: 'vin-decoder',
					name: 'VIN Decoder',
					tags: 'Laravel',
					github: 'https://github.com/ErrOrnAmE/vin-decoder',
					description: 'Laravel package to query a VIN Decoder API'
				},
				{
					slug: 'jquery-oembed',
					name: 'jQuery oEmbed',
					tags: 'jQuery',
					github: 'https://github.com/ErrOrnAmE/jquery-oembed-mainstream',
					description: 'jQuery plugin to easily embed mainstream services'
				},
				/*{
					slug: 'lynceus',
					name: 'Lynceus',
					tags: 'JS',
					description: 'Simple website monitoring dashboard'
				}*/
			]
		},
		{
			title: 'Miscellaneous',
			items: [
				{
					slug: 'this-website',
					name: 'This website',
					tags: 'Vue, Bulma',
					demo: 'https://thibaudcourtoison.fr',
					github: 'https://github.com/ErrOrnAmE/thibaudcourtoison.fr',
					description: 'Website to showcase my work and education'
				},
				{
					slug: 'video-games-website',
					name: 'Video games website',
					tags: 'HTML5, JS, Phaser',
					demo: 'https://errorna.me',
					github: 'https://github.com/ErrOrnAmE/errorna.me',
					description: 'Website to showcase small video games projects'
				}
			]
		}
	],
	contact: [
		{
			name: "email",
			value: "thibaud.courtoison@gmail.com",
			url: "mailto:thibaudcourtoison@gmail.com",
			color: "#D14836"
		},
		{
			name: "linkedin",
			value: "Thibaud Courtoison",
			url: "https://www.linkedin.com/in/thibaud-courtoison/",
			color: "#0077B5"
		},
		{
			name: "github",
			value: "@Errorname",
			url: "https://github.com/ErrOrnAmE",
			color: "DarkSlateGray"
		},
		{
			name: "twitter",
			value: "@Errorname_",
			url: "https://twitter.com/ErrOrnAmE_",
			color: "#1DA1F2"
		}
	]
};
