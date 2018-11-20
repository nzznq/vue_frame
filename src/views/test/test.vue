<template>
	<div class="page">
		ceshite
	</div>
</template>
<script type="text/javascript">
import com from '@/components/npm/methods/index.js'

export default{
	name: 'test',
	data(){
		return {
			
		}
	},
	mounted() {
		let Fun = com.getCountdown
		let result = Fun('2018/12/30 :00')
		console.log(result)
	},
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

