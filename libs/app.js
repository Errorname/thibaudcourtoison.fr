
// Templates

const Intro = { template: '#intro' };
const Career = { template: '#career', props: ['career','education'] };
const Projects = { template: '#projects', props: ['projects']};
const Project = { template: '#project' };
const Contact = { template: '#contact' };

// Routes

const routes = [
	{ name: 'intro', path: '/', component: Intro },
	{ name: 'career', path: '/career', component: Career },
	{ name: 'projects', path: '/projects', component: Projects },
	{ name: 'project', path: '/projects/:project_slug', component: Project },
	{ name: 'contact', path: '/contact', component: Contact}
];

// Router

const router = new VueRouter({
	routes: routes
});

var app = new Vue({
	el: '#app',
	data: {
		menu: false,
		projects: ['OER', 'QRManager', 'ThisWebsite', 'ErrOrnAmE'],
		career: [
			{
				checked: false,
				title: "Internship Software Architect",
				subtitle: "@Your company?",
				text: "I'm looking for an internship as a Junior Software Architect.<br>" +
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
				text: "Some text, blabla blabla bla",
				from: "2016",
				to: "2018",
				img: "/img/timeline/UnivNantes.png"
			},
			{
				checked: true,
				title: "Bachelor's degree in Computer Games Development",
				subtitle: "@University of the West of Scotland",
				text: "Some text, blabla blabla bla",
				from: "2015",
				to: "2016",
				img: "/img/timeline/UWS.png"
			},
			{
				checked: true,
				title: "DUT in Computer Engineering",
				subtitle: "@IUT of Nantes",
				text: "Some text, blabla blabla bla",
				from: "2013",
				to: "2015",
				img: "/img/timeline/IUT_Nantes.gif"
			},
		]
	},
	router: router
});
