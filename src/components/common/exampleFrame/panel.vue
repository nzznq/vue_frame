<template>
	<div class="lw-box" 
		:class="[this.title ? '': 'no-padding']"
		>
		<div class="lw-box-title">{{this.title}}</div>
		<div class="lw-box-body">
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'lw-panel',
	data(){
		return {
			
		}
	},
	props:{
		title:{
			type: String
		}
	},
	watch:{
		title(val){
			
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
	.lw-box{
		margin-bottom: 20px;
		.lw-box-title{
			font-size: 19px;
			color: #666;
		}
		.lw-box-body{
			padding: 10px 40px;
			font-size: 15px;
		}
	}
	.no-padding{
		.lw-box-body{
			padding: 10px 0px;
			font-size: 15px;
		}
	}
</style>

