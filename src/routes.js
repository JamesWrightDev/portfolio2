import About from './components/about.vue'
import ProjectContainer from './components/projectcontainer.vue'
import Skills from './components/skills.vue'

export default[
	{
		path:'/',
		component: About
	},
	{
		path:'/skills',
		component: Skills
	},
	{
		path:'/projects',
		component: ProjectContainer
	}
]