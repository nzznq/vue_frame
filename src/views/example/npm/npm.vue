<template>
	<div class="page">
		<lw-panel title="一、注册npm账号">
			<lw-words>登录
				<lw-link href="https://www.npmjs.com">https://www.npmjs.com </lw-link>
				注册一个npm账号并邮箱验证
			</lw-words>
		</lw-panel>
		
		<lw-panel title="二、封装npm包">
			<lw-subtitle>1. 创建文件夹npmtext cd进去</lw-subtitle>
			<lw-subtitle>2. 初始化<i>package.json</i>文件, 命令:<i>npm init</i></lw-subtitle>
			<lw-words>
				name字段的规则:<br/>
				a. name不能以"."(点)或者"_"(下划线)开头<br/>
				b. name中不能包含大写字母<br/>
				c. 不要使用已存在的name作为包名,否则无法发布到npm上面
			</lw-words>
			<img :src="require('./img/pic_npm_package.png')" alt="" />
			<lw-subtitle>3. 在文件夹下创建index.js文件</lw-subtitle>
			<lw-words>文件夹结构如下</lw-words>
			<img :src="require('./img/pic_npm_file.png')" alt="" />
			<lw-subtitle>4. index.js文件写一个验证手机号的方法</lw-subtitle>
			<lw-code>
				/**
				 * 验证手机号
				 * @param phone 手机号
				 * @returns boolean
				 */
				
				const checkPhone = function(phone){
					let reg = /^1[34578]\d{9}$/;
				    if(reg.test(phone) && phone != ""){
				        return true; 
				    }
				    return false; 
				}
				
				export {
					checkPhone
				}
			</lw-code>
		</lw-panel>
		<lw-panel title="三、发布npm包">
			<lw-subtitle>1. 登录npm</lw-subtitle>
			<img :src="require('./img/pic_npm_login.png')" alt="" /><br/>
			<img :src="require('./img/pic_npm_password.png')" alt="" /><br/>
			<img :src="require('./img/pic_npm_success.png')" alt="" />
			<lw-subtitle>2. 发布  命令：<i>npm publish</i></lw-subtitle>
			<img :src="require('./img/pic_npm_publish.png')" alt="" />
		</lw-panel>
		<lw-panel title="三、删除npm包">
			<lw-subtitle>命令：<i>npm --force unpublish 包名称</i>;<i>发布超过24小时就不能删除了</i></lw-subtitle>
			<img :src="require('./img/pic_npm_delect.png')" alt="" />
		</lw-panel>
		<lw-panel title="四、上传npm包命令汇总">
			<lw-subtitle>1. 登录：<i>npm login</i></lw-subtitle>
			<lw-subtitle>2. 发布：<i>npm publish</i></lw-subtitle>
			<lw-subtitle>3. 删除：<i>npm --force unpublish 包名称</i></lw-subtitle>
		</lw-panel>
		<lw-panel title="五、发布遇到的问题">
			<lw-subtitle>1. 问题一：</lw-subtitle>
			<lw-code>
				npm ERR! no_perms Private mode enable, only admin can publish this module:
			</lw-code>
			<lw-words>
				这里注意的是因为国内网络问题，许多小伙伴把npm的镜像代理到淘宝或者别的地方了，这里要设置回原来的镜像。
			</lw-words>
			<lw-code>
				npm config set registry=http://registry.npmjs.org
			</lw-code>
		</lw-panel>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'npm',
	data(){
		return {
			
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

