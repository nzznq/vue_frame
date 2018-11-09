<template>
	<div class="lw-pic-box">
		<img class="lw-pic" :src="url" :alt="this.alt" />
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'lw-pic',
	data(){
		return {
			url: ''
		}
	},
	props:{
		src:{
			type: String
		},
		alt:{
			type: String
		}
	},
	created(){
		console.log(this.src);
		var liu = '../../../assets/git/git_01.png';
//		var url = require(this.src);
//		this.url = url;
	},
	methods:{
		draw(){
//			var liu = '../../../assets/git/git_01.png';
//			var url = require('../../../assets/git/git_01.png');
//			this.url = url;
		}
	},
	mounted(){
		this.draw();
	}
}
</script>
<style scoped="scoped" lang="scss">
	.lw-pic-box{
		.lw-pic{
			height: auto;
			width: 70%;
			margin: 10px 0px;
		}
	}
</style>

