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
					description: 'Fleet management and distribution',
					text: [
						{
							title: 'Description',
							text: "Car fleet management and distribution. We (Neosmose) developed this application for a company which collect and clean cars at the factory outlet. Then, they distribute them through the cars dealer's network."
						},
						{
							title: 'What I learned',
							text: ""
						}
					]
				},
				{
					slug: 'tracetemp',
					name: 'Tracetemp',
					tags: 'Laravel, Vue',
					description: 'IOT temperature data management',
					text: [
						{
							title: 'Description',
							text: "IOT temperature data management. We (Neosmose) developed this application for a company which rent devices that log temperature. These devices were developed primarily for long period of internet isolation: for the transport of medicines or food for example."
						},
						{
							title: 'What I learned',
							text: "This application needs to process quite a lot of data, so we had to think about scalability from the ground up. This is an interesting subject as more and more application need to think \"scalability first\”.<br>" +
								"Moreover, some of theses data are sensitive. I documented myself a lot about security during communication and storage. The #1 rule of cryptography is \"Don't invent your own\". I think this sentence also applies to any design of software security."
						}
					]
				},
				{
					slug: 'coruscant',
					name: 'Coruscant',
					tags: 'Laravel, Vue',
					description: 'In-house professionnal training management',
					text: [
						{
							title: 'Description',
							text: "In-house professionnal training management. We (Neosmose) developed this application for a company which trains entrepreneurs how to embrace the digital revolution taking place all over their respective industries. This requires a lot of administrative work to be regulations-compliant with the current French laws on the subject."
						},
						{
							title: 'What I learned',
							text: ""
						}
					]
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
					description: 'Minimal tool for QR codes creation and management',
					text: [
						{
							title: 'Description',
							text: "Minimal tool for QR codes creation and management. This tool can be used to create and manage QR codes." +
								"You simply need to put a php script in your web server, and everything works." +
								"My goal for this project was to have the smallest size possible."
						},
						{
							title: 'What I learned',
							text: "For this project, I discovered some great css libraries that are really simple to use and gives awesome results quickly. I also learned how to developed a feature that allows a one-click upgrade of the software with a repository mechanism."
						}
					]
				},
				{
					slug: 'oer',
					name: 'OER',
					tags: 'PHP, JS, Vue',
					demo: 'https://errorna.me/tools/OER/',
					description: 'Creates OVH Email Redirections from a CSV file',
					text: [
						{
							title: 'Description',
							text: "This tools allows users to create OVH Email Redirections using a CSV files. You just need to login to the OVH and choose which domain name you wish to use. Then, with a really simple system of variables, you will create any number of redirections you want in one click."
						},
						{
							title: 'What I learned',
							text: "This project was a great way to play with the <a href='https://ovh.com' target='_blank'>OVH</a> API. I also learned about CSV parsing and its subtleties. I also took a lot of pleasure challenging myself to develop this tool in under 4 hours."
						}
					]
				},
				{
					slug: 'vin-decoder',
					name: 'VIN Decoder',
					tags: 'Laravel',
					github: 'https://github.com/ErrOrnAmE/vin-decoder',
					description: 'Laravel package to query a VIN Decoder API',
					text: [
						{
							title: 'Description',
							text: "Laravel package to query a VIN Decoder API. During the development of another project, I needed to query the <a href='https://vindecoder.eu' target='_blank'>Vincario</a> API, to retrieve information about a specific vehicle."
						},
						{
							title: 'What I learned',
							text: ""
						}
					]
				},
				{
					slug: 'jquery-oembed',
					name: 'jQuery oEmbed',
					tags: 'jQuery',
					github: 'https://github.com/ErrOrnAmE/jquery-oembed-mainstream',
					description: 'jQuery plugin to easily embed mainstream services',
					text: [
						{
							title: 'Description',
							text: "jQuery plugin to easily embed mainstream services (like Youtube, SoundClound or Flickr). During the development of another project in which users could input text, I wanted to allow users to also input videos, musics and photos using the <a href='https://oembed.com' target='_blank'>oEmbed</a> protocol."
						},
						{
							title: 'What I learned',
							text: "This project was my first open source project and I took extra time to write the documention to allow people to easily use my tool. Working on this project also made me a huge believer of universal formats and protocols as a way for the web community to improve altogether."
						}
					]
				},
				{
					slug: 'cryptowatcher',
					name: 'Crypto Watcher',
					tags: 'JS, Vue, Bitcoin Cash',
					demo: 'https://errorna.me/tools/cryptowatcher',
					github: 'https://github.com/ErrOrnAmE/CryptoWatcher',
					description: 'Cryptocurrency dashboard to have an eye on my investment',
					text: [
						{
							title: 'Description',
							text: "After reading quite a lot about cryptocurrencies and bitcoin, I finally decided to invest a small amount into <a href='https://www.bitcoincash.org' target='_blank'>Bitcoin Cash</a>. However, I thought that the exchange app I was using was too complicated for the simple thing I wanted to know: How much money do I have?<br>" +
								"So I quickly developed a crazy simple webapp that allows me to see how much I have."
						},
						{
							title: 'What I learned',
							text: "I definitively learned about cryptocurrencies while I was developing this app. I also noticed that I liked developing this kind of small webapp tool."
						}
					]
				}
			]
		},
		{
			title: 'Miscellaneous',
			items: [
				{
					slug: 'this-website',
					name: 'This website',
					tags: 'JS, Vue, Bulma',
					demo: 'https://thibaudcourtoison.fr',
					github: 'https://github.com/ErrOrnAmE/thibaudcourtoison.fr',
					description: 'Website to showcase my work and education',
					text: [
						{
							title: 'Description',
							text: "This website is my way to showcase my work and education to anyone wishing to learn more about me. I entirely developed this website without using a template.<br>" +
								"I used the Javascript framework Vue and the CSS library Bulma. I also used github-calendar to print a pretty calendar of my github activity."
						},
						{
							title: 'What I learned',
							text: "This is the first project where I used routing in JS, using vue-router. Making this website made me think over what I made, what I loved to do, and what I wanted to do."
						}
					]
				},
				{
					slug: 'video-games-website',
					name: 'Video games website',
					tags: 'HTML5, JS, Phaser',
					demo: 'https://errorna.me',
					github: 'https://github.com/ErrOrnAmE/errorna.me',
					description: 'Website to showcase small video games projects',
					text: [
						{
							title: 'Description',
							text: "I developed this website to showcase my small video games projects. I had great fun making these project, and I wanted a place to share them to my friends and family."
						},
						{
							title: 'What I learned',
							text: "I can't list everything I learned developing these projects. I think you should go check them out by yourself!"
						}
					]
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
