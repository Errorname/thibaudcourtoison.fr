
// Templates

const Intro = { template: '#intro' };
const Education = { template: '#education' };
const Projects = { template: '#projects', props: ['projects']};
const Project = { template: '#project' };
const Contact = { template: '#contact' };

// Routes

const routes = [
	{ name: 'intro', path: '/', component: Intro },
	{ name: 'education', path: '/education', component: Education },
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

const app = new Vue({
	data: {
		projects: ['OER', 'QRManager']
	},
	router: router
}).$mount('#app');
