//递归的实现 时间复杂O(nlogn) 最差O(n2)基准恰好是最大或者最小
function quickSort(arr){
    if(arr.length<2){//数组特殊情况考虑
        return arr; 
    }   
    var left=[];
    var right=[];
//定义基准值
    var mid=arr.splice(Math.floor(arr.length/2),1);
    for(var i=0;i<arr.length;i++){//遍历数组
        if（arr[i]<mid){//小于基准值 
           left.push(arr[i];
        }else{
           right.push(arr[i]);
        }
        return quickSort(left).concat(mid,quickSort(right));//采用递归，并合并数组
}
//递归实现
function quickSort(num) {
    _quickSort(num, 0, num.length - 1); // 将整个num数组快速排序，left和right分别指向数组左右两端。
}
function _quickSort(num,left,right){
    if(left>right) return ;
    var i=left,j=right,flag=left;
    while(i<j){
        while(num[j]>= num[flag] && j>flag) j--;
        //j左移指导找到比flag大的数
        if(i>j) break;
        while(num[i]<= num[flag] && i<j) i++;
        //i右移 找到比基数小的数
        //交换
        var temp =num[flag];
        num[flag]=num[j];num[j]=num[i];num[i]=temp;
        flag=i;//基数在num[i]的位置，调整falg      
    }
    _quickSort(num,left,flag-1);//左边的数
    _quickSort(num,flag+1,right);//右边的数
}

//非递归的实现
//数据量大 递归容易栈溢出，
//采用非递归，数组模拟栈操作，将待排序的left，right保存到数组
function quickSort(arr){
    _quickSort(arr,0,arr.length-1);
}
function _quickSort(num ,left,right){
    var list=[[left,right]];// 将[left,right]存入数组中，类似于递归入栈
    while(list.length>0){
        //若list不为空，循环弹出list的最后一个数组排序
        var now = list.pop();
        if(now[0]>=now[1]){
        continue;
        }
        var i=now[0],j=now[1],flag=now[0];
        while(i<j){
            while (num[j] >= num[flag] && j > flag) j--;
            if (i >= j) break;
            while (num[i] <= num[flag] && i < j) i++;
            let temp = num[flag];
            num[flag] = num[j];
            num[j] = num[i];
            num[i] = temp;
            flag = i;
        }
        list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
        list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
    }
}    
