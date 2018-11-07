<template>
	<div class="page example">
		<div class="example-head">
			<ul class="nav">
				<li class="nav-list" v-for="item in navMenu" @click="clickMenu(item)">{{item.name}}</li>
			</ul>
		</div>
		<div class="example-content">
			<div class="content" >
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
			navMenu:[
				{name:'git',url:'/',children:[]},
				{name:'API',url:'/api',children:[
					{name:'按钮',url:'/'},
					{name:'输入框',url:'/'},
					{name:'表格',url:'/'}
				]},
				{name:'示例页面',url:'',children:[]}
			],
			secondMenu:[]
		}
	},
	methods:{
		clickMenu(res){
			this.secondMenu = res.children;
			if(res.children){
				
			}
			this.$router.push(res.url)
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
					&:hover{
						color: #00BFFF;
					}
				}
			}
		}
		.example-content{
			padding-top: 15px;
			flex: 1;
			/*overflow-y: auto;*/
			.content{
				margin: 0 auto;
				width: 1200px;
				height:100%;
				.sidebar{
					float: left;
					width: 200px;
					height: 100%;
					border-right: 1px solid #ccc;
					li{
						padding: 5px 5px;
						cursor: pointer;
						&:hover{
							color: #00BFFF;
						}
					}
				}
				.main{
					float: left;
					width: 1000px;
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
</style>

