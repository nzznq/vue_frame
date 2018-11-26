<template>
	<div class="page">
		
		<lw-panel title="一、使用说明">
			<lw-words>
				Git是一款分布式版本控制系统。我们使用Git的目的是，方便我们多人协作进行代码编写，把我们DIY的‘vue项目’推送到github上进行免费的托管。
			</lw-words>
			<lw-words>
				此文档简单的给出git的提交代码的常用命令，想进一步了解git见
				<lw-link href="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001373962845513aefd77a99f4145f0a2c7a7ca057e7570000">
					廖雪峰博客
				</lw-link>
			</lw-words>
		</lw-panel>
	
		<lw-panel title="二、安装Git">
			<lw-words>
				从Git官网直接下载
				<lw-link href="https://git-scm.com/downloads">
					安装程序
				</lw-link>
			</lw-words>
			<lw-words>安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！</lw-words>
			<!--<lw-pic src="../../../assets/git/git_01.png"></lw-pic>-->
			<img src="../../../assets/git/git_01.png" alt="" />
		</lw-panel>
	
		<lw-panel title="三、创建本地版本库">
			<lw-words>在开始菜单里找到“Git”->“Git Bash”打开，在命令行窗口中输入下列命令</lw-words>
			<lw-code>
				$ mkdir <文件名字>		//创建文件夹
				$ git rm -r <文件名字>	//删除文件夹
				$ git rm <文件名字>		//删除文件
				$ git init          //把当前目录编程可管理的仓库
			</lw-code>
		</lw-panel>
		
		<lw-panel title="四、提交代码到本地版本库">
			<lw-words>git add .  表示提交当前目录下的所有文件 </lw-words>
			<lw-code>
				$ git add  <文件名字>		//把文件添加到暂存区; 
				$ git commit -m '注释'	//把暂存区的内容提交到本地版本库
			</lw-code>
		</lw-panel>
		
		<lw-panel title="五、从远程库克隆、提交代码">
			<lw-code>
				$ git remote add origin 远程库路径	//连接远程库
				$ git clone 远程库路径				//克隆代码
				$ git push -u origin master     //把代码提交到远程库上面
				
				$ git remote -v					//显示所连接的克隆地址
				$ git remote remove origin		//断开远程库
			</lw-code>
		</lw-panel>
		
		<lw-panel title="六、分支相关操作命令">
			<lw-code>
				$ git branch					//查看分支
				$ git branch <分支名称> 			//创建分支
				$ git checkout <分支名称>    		//切换分支
				$ git checkout -b <分支名称>		//创建并切换分支 
				$ git merge <分支名称>				//合并分支到当前分支
				$ git branch -d <分支名称>			//删除分支
			</lw-code>
		</lw-panel>
		
		
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'git',
	data(){
		return {
			
		}
	},
	methods:{
		draw(){
			
		}
	},
	mounted(){
		this.draw();
	}
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

