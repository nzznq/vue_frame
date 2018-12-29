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
				path:'/',
				redirect:'/common'
			},
			{
				path: 'git',
				name: 'git',
				component: _import('example/git/git')
			},
			{
				path: 'api',
				name: 'api',
				component: _import('example/api/api')
			},
			{
				path: 'npm',
				name: 'npm',
				component: _import('example/npm/npm')
			},
			{
				path: 'common',
				name: 'common',
				component: _import('example/common/common')
			},
			{
				path: 'project',
				name: 'project',
				component: _import('example/project/project')
			}
		]
	},{
		path: '/test',
		name: 'test',
		component: _import('test/test')
	}
]

//业务路由
export const businessRouter = [
	
].concat(baseRouter);

export default new Router({
	linkActiveClass:"check", //路由激活类名
	routes: businessRouter
});
