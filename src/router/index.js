import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router)




//基础路由
export const baseRouter = [
	{
		path: '/',
		name: 'example-main',
		component: _import('example/main/index'),
		children:[
			{
				path: '/',
				name: 'git',
				component: _import('example/git/git')
			},
			{
				path: '/api',
				name: 'api',
				component: _import('example/api/api')
			}
		]
	}
]

//业务路由
export const businessRouter = [
	
].concat(baseRouter);

export default new Router({
	routes: businessRouter
});
