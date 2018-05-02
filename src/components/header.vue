<template>
	<div>
	  
	</div>
</template>
<script>
export default {
	data(){
		return{
		}
	},
	mounted(){
	},
	methods: {
	}
}
</script>
<style lang="scss" scoped>
  $fontColor: #fefefe;
  $h_17: 17px;
	.g-left {
		width: 40%;
		margin-left: 20%;
		img:nth-child(1) {
		  margin-left: 8px;
		  width: 75px;
		  height: $h_17;
		}
		img:nth-child(2) {
			height: $h_17;
			padding: 0 5px 0 5px;
		}
 		span {
			color: $fontColor;
		}
	}
	.g-right {
		width: 20%;
		img {
			margin-top: 15px;
			width: 30px;
			height: 30px;
		}
		span {
		  color: $fontColor;
		  font-size: 12px;
		  padding-left: 10px;
		}
		div:nth-child(1) {
			width: 95px;
			height: 60px;
		}
		ul {
	    width: 95px;
	    height: 75px;
	    position: relative;
	    top: 0;
	    left: 18px;
	    float: right;
	    line-height: 24px;
	    z-index: 999;
	    li {
	    	text-align: center;
	    	height: 50%;
	    	font-size: 12px;
	    	line-height: 37.5px;
	      cursor: pointer;
	    }
	    li:nth-child(1) {
	    	background: #2f3843;
	    	color: #fff;
	    }
	    li:nth-child(2) {
	    	background: #3b434e;
	    	color: #bec4ca;
	    }
		}
		span:after {
			content: "";
			position: relative;
			left: 8px;
			top: 10px;
			border: 1px solid #fff;
			width:0;
	    border-width:7px;
	    border-style:solid;
	    border-color:#8692a0 transparent transparent transparent;
		}
	}
</style>