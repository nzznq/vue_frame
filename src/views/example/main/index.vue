<template>
	<div class="page example">
		<div class="example-head">
			<ul class="nav">
				<li class="nav-list" v-for="item in navMenu" @click="clickMenu(item)">{{item.name}}</li>
			</ul>
		</div>
		<div class="example-content">
			<div class="content" v-bind:class="{'full-content': fullContent}">
				<ul class="sidebar">
					<li v-for="item in secondMenu" >{{item.name}}</li>
				</ul>
				<div class="main">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'example-main',
	data(){
		return {
			fullContent: true,
			navMenu:[
				{name:'Git使用',url:'/',children:[]},
				{name:'npm包开发',url:'/npm',children:[]},
				{name:'组件',url:'/api',children:[
					{name:'按钮',url:'/'},
					{name:'输入框',url:'/'},
					{name:'表格',url:''}
				]},
				{name:'公共方法',url:'/common',children:[]}
			],
			secondMenu:[]
		}
	},
	methods:{
		clickMenu(res){
			this.secondMenu = res.children;
			if(res.children.length > 0){
				this.fullContent = false;
			}else{
				this.fullContent = true;
			}
			this.$router.push(res.url);
		}
	},
	mounted(){
		
	}
}
</script>
<style scoped="scoped" lang="scss">
	.example{
		display: flex;
		flex-direction: column;
		.example-head{
			height: 50px;
			position: relative;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				bottom: 0px;
				width: 100%;
				height: 1px;
				z-index: 1;
				background: linear-gradient(to right, #1b24ff, #fd0371 , deepskyblue , darkmagenta);
			}
			&:before {  
			    content: "";  
			    position: absolute;  
			    width: 8%;  
			    height: 1px;  
			    bottom: 0;  
			    left: 0px;  
			    background: linear-gradient(to right, transparent, white , transparent);
			    z-index: 10;
			    animation:myfirst1 8s linear 0.1s infinite normal;
			}  
			.nav{
				width: 1200px;
				height: 100%;
				margin: 0 auto;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				.nav-list{
					padding: 0px 15px;
					cursor: pointer;
					font-size: 16px; 
					&:hover{
						color: #00BFFF;
					}
				}
			}
		}
		.example-content{
			background: #f9f9f9;
			flex: 1;
			/*overflow-y: auto;*/
			.content{
				padding-top: 15px;
				background: #fff;
				margin: 0 auto;
				width: 1200px;
				height:100%;
				.sidebar{
					float: left;
					width: 200px;
					height: 100%;
					border-right: 1px solid #ccc;
					padding: 0px 15px;
					li{
						padding: 5px 0px;
						cursor: pointer;
						&:hover{
							color: #00BFFF;
						}
					}
				}
				.main{
					float: left;
					width: 1000px;
					padding: 0px 20px;
				}
			}
			.full-content{
				.sidebar{
					width: 0px;
					height: 0px;
				}
				.main{
					width: 100%;
				}
			}
		}
	}
	@keyframes myfirst1
	{
		from {left: 0px;}
		to {left: 90%;}
	}
</style>

