<template>
	<div class="page">
		<lw-panel title="一、使用">
			<lw-subtitle>1. npm 安装</lw-subtitle>
			<lw-code>
				npm i lwcommon -s
			</lw-code>
			<lw-subtitle>2. 引入模块</lw-subtitle>
			<lw-words>在使用本方法的vue页面中，任选一种方式引入模块</lw-words>
			<lw-code>
				import {方法名,方法名} from 'lwcommon' 
			</lw-code>
		</lw-panel>
		<lw-panel title="二、方法">
			
			<el-table
			  :data="tableData"
			  style="width: 100%">
			  
				<el-table-column
					prop="mothod"
					label="方法"
					width="200"
					>
				</el-table-column>
				<el-table-column
					prop="explain"
					label="说明"
					
					>
				</el-table-column>
				<el-table-column
					prop="param"
					label="参数"
					>
				</el-table-column>
				
			</el-table>

		</lw-panel>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'common',
	data(){
		return {
			tableData:[{
	            mothod: 'getUrlParam(url)',
	            explain: '获取URL参数，获取的参数以对象形式返回',
	            param: 'url地址，不传默认为当前页面地址'
	          }, {
	            mothod: 'isNull(data)',
	            explain: '判断是否为空，空返回true，不为空返回false',
	            param: 'data判断的数据'
	          },{
	            mothod: 'isFunction(fn)',
	            explain: '判断是否为function，是true，否false',
	            param: 'fn判断的function'
	          },{
	            mothod: 'deepObjectMerge(obj,obj)',
	            explain: '深度合并对象',
	            param: 'obj 对象,两个对象相同key值不同value的，后一个对象覆盖前一个对象的value'
	          }
	          ]
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

