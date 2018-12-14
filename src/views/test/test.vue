<template>
	<div class="page">
		ceshite
	</div>
</template>
<script type="text/javascript">
import {getUrlParam , deepObjectMerge} from '@/components/npm/methods/index.js'
export default{
	name: 'test',
	data(){
		return {
			
		}
	},
	mounted() {
		let a = {
			b:1,
			c:{
				d:666
			}
		};
		let b = {
			c: {
				d: 666
			}
		};
		let liu = deepObjectMerge(a,b);
		console.log(liu);
		
	},
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

