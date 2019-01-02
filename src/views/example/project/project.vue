<template>
	<div class="page">
		<lw-panel title="一、项目模板">
			<lw-words>用于开发新项目所使用，包含vuex、axios、router、主框架页面、登录页、router/axios拦截器</lw-words>
			<lw-subtitle>1. 项目下载地址</lw-subtitle>
			<lw-words>
				<lw-link href="https://github.com/nzznq/vuepc.git">https://github.com/nzznq/vuepc.git</lw-link>
			</lw-words>
			<lw-subtitle>2. 项目目录结构</lw-subtitle>
			<lw-words>
				<img :src="require('./img/vuepc.png')" alt="" />
			</lw-words>
		</lw-panel>
		<lw-panel title="二、npm包开发模板">
			<lw-words>用于开发vue组件，可以单独针对单个组件进行打包，打包后可上传npm官网。</lw-words>
			<lw-subtitle>1. 项目下载地址</lw-subtitle>
			<lw-words>
				<lw-link href="https://github.com/nzznq/vuenpm.git">https://github.com/nzznq/vuenpm.git</lw-link>
			</lw-words>
			<lw-subtitle>2. 项目目录结构</lw-subtitle>
			<lw-words>
				<img :src="require('./img/pic_porject_npm.png')" alt="" />
			</lw-words>
		</lw-panel>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'project',
	data(){
		return {
			
		}
	},
	mounted(){

	}
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

