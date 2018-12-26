/**
     * 
      *@Description:插入排序，时间复杂度最坏O(n^2),最好O(n-1)，空间复杂度O(1),平均O(n^2),稳定
      *@param array 被排序序列
      *@author  肖芳
     */
   function insertSort(arr) {
        var len =arr.length;
        for (var i=1;i<len; i++) {
            var temp=array[i];
            var j=i-1;
            while (j>=0 && arr[j]>temp) {
                    array[j+1]=array[j];
                    j--;
                }
            array[j+1]=temp;
            }
        return arr
     }
 /**
     * 
      *@Description:二分插入排序
      *@param array 被排序序列
      *@author  肖芳
     */
   function binaryInsertSort(arr) {
        var len =arr.length;
        for (var i=0;i<len; i++) {
            var key=arr[i],left=0,right=i-1;
            while(left<=right){
              var mid= parseInt((left+right)/2);
              if(key<arr[mid]){
                right = mid-1;
              }else{
                left=mid+1;
              }
            }              
            for(var j=i-1;j>=left;j--){
              arr[j+1]=arr[j];
            }
            arr[left]=key;
          }
        return arr
     }    
