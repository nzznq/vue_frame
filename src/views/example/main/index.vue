<template>
	<div class="page example">
		<div class="example-head" :class = "{ 'head_fixed' : isFixed }">
			<ul class="nav">
				<router-link :to="item.url"  v-for="(item,index) in navMenu" :key="index" @click.native="clickMenu(item,index)" tag="li">
					<li class="nav-list">{{item.name}}</li>
				</router-link>
			</ul>
		</div>
		<div class="example-content">
			<div class="content" v-bind:class="{'full-content': fullContent}">
				<ul class="sidebar">
					<li v-for="item in secondMenu">{{item.name}}</li>
				</ul>
				<div class="main">
					<router-view />
				</div>
			</div>
		</div>
		<div class="page_up" :class = "{ 'up_show': upFlag }" @click = "goPageTop"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'example-main',
		data() {
			return {
				fullContent: true,
				navMenu: [
					{ name: 'Git使用', url: '/git', children: [] },
					{ name: 'npm包开发', url: '/npm', children: [] },
					{
						name: '组件', url: '/api', children: [
							{ name: '按钮', url: '/' },
							{ name: '输入框', url: '/' },
							{ name: '表格', url: '' }
						]
					},
					{ name: '公共方法', url: '/common', children: [] }
				],
				secondMenu: [],
				upFlag:false,  //回到顶部按钮 显示隐藏
				isFixed: false,  //顶部固定
			}
		},
		methods: {
			clickMenu(res, index) {
				this.nowIndex = index
				this.secondMenu = res.children;
				if (res.children.length > 0) {
					this.fullContent = false;
				} else {
					this.fullContent = true;
				}
			},
			getScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  				if( scrollTop >= 300 ){
					this.isFixed = true
					this.upFlag = true
				}else{
					this.isFixed = false
					this.upFlag = false
				}
			},
			goPageTop() {	
				let animate = setInterval(function(){
					let nowScrollT = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					let speed =  Math.floor(-nowScrollT / 5)
					document.documentElement.scrollTop = nowScrollT + speed;
					if(nowScrollT == 0){
						clearInterval(animate)
					}
				},30)
			}
		},
		mounted() {
			window.addEventListener('scroll', this.getScroll)
		}
	}
</script>
<style scoped="scoped" lang="scss">
	.example {
		display: flex;
		flex-direction: column;
		.example-head {
			height: 50px;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0px;
				width: 100%;
				height: 1px;
				z-index: 1;
				background: linear-gradient(to right, #1b24ff, #fd0371, deepskyblue, darkmagenta);
			}

			&:before {
				content: "";
				position: absolute;
				width: 8%;
				height: 1px;
				bottom: 0;
				left: 0px;
				background: linear-gradient(to right, transparent, white, transparent);
				z-index: 10;
				animation: myfirst1 8s linear 0.1s infinite normal;
			}

			.nav {
				width: 1200px;
				height: 100%;
				margin: 0 auto;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				
				.nav-list {
					padding: 0px 15px;
					cursor: pointer;
					font-size: 16px;

					&:hover {
						color: #00BFFF;
					}
				}
			}
			.nav>li.check{
				color: #00BFFF;
			}
		}
		.head_fixed{
			width: 100%;
			position: fixed;
			top: -50px;
			margin: auto;
			background: white;
			animation: headFixed .3s linear forwards;
		}
		.example-content {
			background: #f9f9f9;
			flex: 1;

			/*overflow-y: auto;*/
			.content {
				padding-top: 15px;
				background: #fff;
				margin: 0 auto;
				width: 1200px;
				height: 100%;

				.sidebar {
					float: left;
					width: 200px;
					height: 100%;
					border-right: 1px solid #ccc;
					padding: 0px 15px;

					li {
						padding: 5px 0px;
						cursor: pointer;

						&:hover {
							color: #00BFFF;
						}
					}
				}

				.main {
					float: left;
					width: 1000px;
					padding: 0px 20px;
				}
			}

			.full-content {
				.sidebar {
					width: 0px;
					height: 0px;
				}

				.main {
					width: 100%;
				}
			}
		}

		.page_up {
			background-color: #fff;
			position: fixed;
			right: 100px;
			bottom: 190px;
			width: 40px;
			height: 40px;
			border-radius: 20px;
			cursor: pointer;
			transition: .3s;
			box-shadow: 0 0 6px rgba(0, 0, 0, .12);
			z-index: -1;
			opacity: 0;
			&:after {
				content: '';
				position: absolute;
				left: 12px;
				top:8px;
				margin:auto;
				width: 0;
				height: 0;
				border: 8px solid transparent;
				border-bottom-color: #00BFFF;
			}
		};
		.up_show {
			z-index: 5;
			opacity: 1;
			bottom: 150px;
		}
	}

	@keyframes myfirst1 {
		from {
			left: 0px;
		}
		to {
			left: 90%;
		}
	}
	@keyframes headFixed {
		from {
			top: -50px;
		}
		to {
			top: 0px;
		}
	}
</style>