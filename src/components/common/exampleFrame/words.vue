<template>
	<p class="lw-words">
		<slot></slot>
	</p>
</template>
<script type="text/javascript">
export default{
	name: 'lw-words',
	data(){
		return {
			
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
	.lw-words{
	    padding: 0px 10px;
	    line-height: 22px;
	    font-size: 14px;
	    color: #666;
	}
</style>

