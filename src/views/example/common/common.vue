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
					width="260"
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
	          },{
	            mothod: 'isMobileNum(num)', 
	            explain: '判断是否为手机号，是true，否false',
	            param: 'num 要判断的数字或者字符串'
	          },{
	            mothod: 'getCurrentTime(formatStr)',
	            explain: '以提供的格式获取当前时间',
							param: 'formatStr 想要获取的时间格式字符串 ， 例如：“{Y}-{MM}-{DD} {hh}:{ii}:{ss}” 其中 Y M D h i s 分别表示 年 月 日 时 分 秒  格式可以自由搭配'
	          },{
							mothod:'getCountdown(endtime)',
							explain: '倒计时 获取剩余时间 ',
							param: 'endtime 结束时间(string)  例如： "2019/01/01 10:00:00" '
						},{
							mothod:'randomNum(min,max,count)',
							explain: '生成随机数 ',
							param: 'min 每位最小值， max 每位最大值， count 随机数位数 '
						}
	          ]
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
	
</style>

