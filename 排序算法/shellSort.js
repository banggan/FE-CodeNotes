function shellSort(arr){
	var gap=1;
	while(gap<len/3) gap=gap*3+1;
	for(gap;gap>0;gap=Math.floor(gap/3)){
		for(let i=gap;i<len;i++){
			var temp=arr[i],j=i-gap;
			while(j>=0 && arr[j]>temp){
				arr[j+gap]=arr[j];
				j=j-gap;
			}
		}
		arr[j+gap]=temp;
	}
	return arr;
}