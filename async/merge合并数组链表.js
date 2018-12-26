//合并数组
function mergeArr(arr1,arr2){
	var index1=0,index2=0,arr=[];
	var len1 = arr1.length;
	var len2 = arr2.length;
	while(index1 <len1 && index2<len2){
		if(arr1[index1] <= arr2[index2]){
			arr.push(arr1[index1]);
			index1 ++;
		}else{
			arr.push(arr2[index2]);
			index2 ++;
		}
	}
	while(index1 <len1){
		arr.push(arr1[index1]);
		index1++;
	}
	while(index2 <len2){
		arr.push(arr2[index2]);
		index2++;
	}
	return arr;
}
//合并链表 递归
function merge(p1,p2){
	if(p1 == null){
		return p2;
	}
	if(p2 == null){
		return p1;
	}
	if(p1.val < p2.val){
		p1.next= merge(p1.next,p2)
		return p1;
	}else{
		p2.next= merge(p1,p2.next)
		return p2;
	}
}