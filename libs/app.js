
// Templates

const Intro = {
	template: '#intro',
	props: ['skills'],
	mounted: function() {
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},2000);
		});
	}
};

const Career = {
	template: '#career',
	props: ['career','education']
};

const Projects = {
	template: '#projects',
	props: ['projects'],
	mounted: function() {
		window.GitHubCalendar('.calendar','Errorname',{
			responsive: true
		});
	}
};

const Project = {
	template: '#project',
	props: ['project'],
	mounted: function() {
		$('.screenshot a').simpleLightbox();
	}
};

const Contact = {
	template: '#contact',
	props: ['contact'],
	mounted: function() {
		twttr.widgets.createTimeline({
			sourceType: "profile",
			screenName: "ErrOrnAmE_"
		},document.getElementsByClassName("twitter-timeline")[0],{
			height: 700,
			dnt: false
		}).then(function() {
			$('.twitter-timeline .loading').hide();
		});
	}
};

// Routes

const routes = [
	{ name: 'intro', path: '/', component: Intro },
	{ name: 'career', path: '/career', component: Career },
	{ name: 'projects', path: '/projects', component: Projects },
	{ name: 'project', path: '/projects/:slug', component: Project, props: function(route) {
		var slug = route.params.slug;
		for (var i = 0; i < data.projects.length; i++) {
			for (var j = 0; j < data.projects[i].items.length; j++) {
				if (data.projects[i].items[j].slug == slug) {
					return {
						project: data.projects[i].items[j]
					};
				}
			}
		}
	} },
	{ name: 'contact', path: '/contact', component: Contact }
];

// Router

const router = new VueRouter({
	routes: routes,
	mode: 'history',
	scrollBehavior: function(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});

var app = new Vue({
	el: '#app',
	data: data,
	router: router
});
