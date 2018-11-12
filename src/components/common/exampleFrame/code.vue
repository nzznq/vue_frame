<template>
<pre data-title="examples">
<slot></slot>	
</pre>
</template>
<script type="text/javascript">
//import '../utils/css/styles.scss'
//import '../utils/css/syntaxy_dark.css'
import '../utils/css/syntaxy_light.scss'
//import '../utils/css/syntaxy_purple.css'
import Syntaxy from '../utils/syntaxy.js'
export default{
	name: 'lw-code',
	data(){
		return {
			
		}
	},
	props:{
		href:{
			type: String
		}
	},
	methods:{
		draw(){
			var options = {};
			var syntaxy = new Syntaxy( this.$el, options );
			syntaxy.render();
		}
	},
	mounted(){
		this.draw();
	}
}
</script>
<style scoped="scoped" lang="scss">
	/*@import '../utils/css/styles.scss'*/
	/*@import '../utils/css/syntaxy_light_min.scss'*/
</style>

