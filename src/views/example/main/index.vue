<template>
	<div class="page example">
		<div class="example-head">
			<ul class="nav">
				<li class="nav-list">git</li>
				<li class="nav-list">API</li>
				<li class="nav-list">示例页面</li>
				<li class="nav-list">简介</li>
			</ul>
		</div>
		<div class="example-content">
			<div class="main">
				<router-view/>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'example-main',
	data(){
		return {
			nav:[
				{name:'git'},
				{name:'API'},
				{name:'示例页面'}
			]
		}
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
				align-items: center;
				.nav-list{
					padding: 0px 10px;
				}
			}
		}
		.example-content{
			padding-top: 15px;
			flex: 1;
			overflow-y: auto;
			.main{
				margin: 0 auto;
				width: 1200px;
				height:100%;
			}
		}
	}
</style>

