<template>
	<a class="lw-link" target="_blank" :href="this.href">
		<slot></slot>
	</a>
</template>
<script type="text/javascript">
export default{
	name: 'lw-link',
	data(){
		return {
			
		}
	},
	props:{
		href:{
			type: String
		}
	},
}
</script>
<style scoped="scoped" lang="scss">
	.lw-link{
	    color: #4183c4;
    	text-decoration: none;
	}
</style>

