const timeout =ms=>new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve();
	},ms);
});
const ajax1 = ()=>timeout(2000).then(()=>{
	console.log('1');
	return 1;
});
const ajax2 = ()=>timeout(1000).then(()=>{
	console.log('2');
	return 2;
});
const ajax3 = ()=>timeout(2000).then(()=>{
	console.log('3');
	return 3;
});
const mergePromise=function(ajaxArray){
	return new Promise(function(resolve,reject){
		let res=[],count=0,len=ajaxArray.length;
		next();
		function next(){
			ajaxArray[count]().then(function(data){
				res.push(data);
				count++;
				if(count == len){
					resolve(res);
				}else{
					next();
				}
			});
		}
	});
}
mergePromise([ajax1,ajax2,ajax3]).then (data=>{
	console.log('done');
	console.log(data);
});
//promise.all底成实现 
promise.all=function(promises){
	return new Promise(function(resolve,reject){
		let res=[],count=0,len=promises.length;
		for(let i=0;i<len;i++){
			promises[i]().then(function(data){
				res[i]=data;
				count++;
				if(count == len){
					resolve(res);
				}
			},function(error){
				reject(error);
			});
		}
	});
} 


