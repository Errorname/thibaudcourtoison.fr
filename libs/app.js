
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

/*const app = new Vue({
	el: '#app'
});*/

var app = new Vue({
	data: {
		menu: false,
		projects: ['OER', 'QRManager'],
		career: [
			{
				checked: false,
				title: "Internship",
				subtitle: "@Your company?",
				text: "I'm looking for an internship as a Junior Software Architect",
				from: "Jan 2018",
				to: "June 2018"
			},
			{
				checked: true,
				title: "Software Architect",
				subtitle: "@Neosmose",
				text: "Réalisation de nombreux projets informatiques: site d'e-learning, gestion de données d'appareils connectés, intranet, site vitrine, etc.",
				from: "2016",
				to: "2017"
			}
		],
		education: [
			{
				checked: false,
				title: "Master's degree in Software architecture",
				subtitle: "@University of Nantes",
				text: "Some text, blabla blabla bla",
				from: "2016",
				to: "2018"
			},
			{
				checked: true,
				title: "Bachelor's degree in Computer Games Development",
				subtitle: "@University of the West of Scotland",
				text: "Some text, blabla blabla bla",
				from: "2015",
				to: "2016"
			},
			{
				checked: true,
				title: "DUT in Computer Engineering",
				subtitle: "@IUT of Nantes",
				text: "Some text, blabla blabla bla",
				from: "2013",
				to: "2015"
			},
		]
	},
	router: router
}).$mount('#app');
