import About from './components/about.vue'
import ProjectContainer from './components/projectcontainer.vue'
import Contact from './components/contact.vue'

export default[
	{
		path:'/',
		component: About
	},
	{
		path:'/contact',
		component: Contact
	},
	{
		path:'/projects',
		component: ProjectContainer
	},
	{
		path:'/bio',
		component: About
	}
]