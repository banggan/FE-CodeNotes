//数组去重
//way1：利用indexof实现
function unique(array){
	var temp=[];
	var len=array.length;
	for(let i=0;i<len;i++){
		if(temp.indexOf(array[i]) == -1){
			temp.push(array[i]);
		}
	}
	return temp;
}
//利用es6  set实现
function unique(array){
	return Array.from(new Set(array));
}
/*
* 给传入数组排序，排序后相同值相邻，
* 然后遍历时,新数组只加入不与前一值重复的值。
* 会打乱原来数组的顺序
* */
function uniq(array){
    array.sort();
    var temp=[array[0]];
    for(var i = 1; i < array.length; i++){
        if( array[i] !== temp[temp.length-1]){
            temp.push(array[i]);
        }
    }
    return temp;
}
// 思路：获取没重复的最右一值放入新数组
/*
* 推荐的方法
* 实现思路：获取没重复的最右一值放入新数组。
* （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/
function uniq(array){
    var temp = [];
    var len = array.length;
    for(var i = 0; i < len; i++) {
        for(var j = i + 1; j < len; j++){
            if (array[i] === array[j]){
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
    }
    return temp;
}