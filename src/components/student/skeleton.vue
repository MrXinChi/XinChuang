<template>
	<div style="width: 100%;" :style="{height:height + 'px',background:background}"></div>
</template>

<script>
	export default{
		props:{
			height:Number,
			background:String
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
</style>