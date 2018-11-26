<template>
	<div class="page">
		ceshite
	</div>
</template>
<script type="text/javascript">
import {getUrlParam} from '@/components/npm/methods/index.js'

export default{
	name: 'test',
	data(){
		return {
			
		}
	},
	mounted() {
		console.log(getUrlParam());
	},
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

