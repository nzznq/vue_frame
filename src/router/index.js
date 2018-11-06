import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router)


//业务路由
export const businessRouter = [
	
];

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
			}
	  ]
	}
].concat(businessRouter);

export default new Router({
	routes: baseRouter
});
