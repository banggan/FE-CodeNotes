 /**
     * 
      *@Description:堆排序
      *@param arr
      *@author  肖芳   
     */
function headSort(arr){
	buildHeap(arr);//构建堆
	var len = arr.length;
	for(var i=len-1;i>0;i--){
		swap(arr,0,i);//交换堆的第一个元素和最后一个元素
		heapify(arr,i);//调整堆
	}
	return arr;
}
 /**
     * 
      *@Description:创建堆
      *@param arr
      *@author  肖芳  
     */
function buildHeap(arr){
	var len = arr.length;
	if(len == 0)
		return;
	for(var i=Math.floor(len/2);i>0;i--){
		heapify(arr,i);
	}
}
/**
     * 
      *@Description:大根堆调整堆
      *@param arr 调整数组
      *@param i 跟
      *@author  肖芳  
     */
function heapify(arr,i){
	var left = 2*i+1;
	var right = 2*i+2;
	var largest = i;
	var len = arr.length;
	if(left <len && arr[left]>arr[largest]){//先判断左节点还否超出
		largest=left;
	}
	if(right <len && arr[right]>largest){//有节点是否超出 找出最大的子节点
		largest=right;
	}
	if(largest != i){
		swap(arr,i,largest);//交换 largrst为i
		heapify(arr,largest);//递归调整
	}
}

/**
     * 
      *@Description:交换
      *@param arr
      *@author  肖芳  
     */
function swap(arr,i,j){
	var temp=arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}