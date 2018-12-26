//冒泡排序
function bubbleSort(arr){
	var len = arr.length;
	var flag= true;//增加标志位的判断，减少比较的次数
	for(var i=0;i<len-1;i++){
		for (var j = i+1;j<len;j++){
			if(arr[i]>arr[j]){
				var temp =arr[i];
				arr[i]=arr[j];
				arr[j]= temp;
				flag=false;
			}
		}
		if(flag == true)
			break;
	}
	 return arr;
}
//选择排序
function selsetSort(arr){
	var len = arr.length;
	var index;
	for(var i=0;i<len-1;i++){
		index=i;
		for(var j=i+1;j<len;j++){
			if(arr[index]>arr[j]){//寻找最小值
				index=j;//保存最小值的索引
			}
		}
		if(index!=i){
		var temp =arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
	}
	return arr;
}