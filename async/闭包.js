//每次实例化id+1
function getConstruct(){
	var id = 0;
	return function(){
		this.id=++id;
	}
}
var GeneratorId=getConstruct();
let a = new GeneratorId();
let b = new GeneratorId();
console.log(a.id,b.id);
//打印1-5
for(var i=0;i<5;i++){
	setTimeout(function(){
		console.log(i)
	},1000);//55555
}
//way1：使用let
//way2:使用闭包
for(var i=0;i<5;i++){
	(function(a){
		setTimeout(function(){
			console.log(a);
		},1000);
	})(i);//0 1 2 3 4 
}