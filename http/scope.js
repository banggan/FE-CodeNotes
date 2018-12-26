var global ='this is global'
function globalFunction(){
	var local ='this is local'
	console.log('Visit global/local')
	console.log(global)
	console.log(local)
	global = 'this is changed global'
	console.log(global)
	
	function localFunction(){
		var innerLocal='this is innerLocal'
		console.log('Visit glocal/local/innerLocal')
		console.log(global)
		console.log(local)
		console.log(innerLocal)
	}
	localFunction()

}
globalFunction()