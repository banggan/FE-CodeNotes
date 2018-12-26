2. js解析url地址

        url="http://www.cnblogs.com/p/d/?a=b&c=d&e=f"
        function get(url){
            var obj=[];
            var data = url.split("?")[1];
            var arr =data.split("&");
            var len = arr.length;
            for(let i=0;i<len;i++){
                var temp =arr[i].replace(/=/ig,":\");
                obj.push(temp);
            }
            console.log(obj);
        }
        function gett(url){
            var index =url.indexOf("?");
            var data = url.substring(index+1);
          var obj = data.replace(/=/igm,":\"").replace(/&/igm,"\",");
            var json=eval("({"+obj+"\"})");
            console.log(json);
        }
        function showWindowHref(){
            var sHref = window.location.href;
            var args = sHref.split('?');
            if(args[0] == sHref){
                return "";
            }
            var arr = args[1].split('&');
            var obj = {};
            for(var i = 0;i< arr.length;i++){
                var arg = arr[i].split('=');
                obj[arg[0]] = arg[1];
            }
            return obj;
        }
3.js实现ajax请求时的锁屏解屏功能（请求时loading，元素不能点击，请求完成消除锁屏）

        
    xhr.onreadystateChange =function(){
        var div = document.getElementById("loading");
        div.innerHTML="loading......";
        div.style.top="0";
        div.style.right="0";
        div.style.display="block";
        if(xhr.status == 200 && xhr.readyState == 4){
            div.style.display="none";
            div.innerHTML=" ";
            var str = xhr.responseText;
            //doing something
        }else{
            console.log("请求错误"+"xhr.statusText");
        }
    }
    <style>
    #loading { 
      position:absolute; 
      width:500px; 
      height:50px; 
      top:50%;
      left:50%; 
      margin: -25px -150px;
      background-color:#FFFFFF;
      border:1px solid #CCCCCC;
      text-align:center;
      padding:20px;
    }
    </style>
    <div id="loading" style="display:none">
    <img src="image/ajax.gif"/> Loading...
    </div>
    <a href="#" onclick="document.getElementById('loading').style.display='';">test</a>
4、封装一个jsonp

    function jsonp(url,callback){
        var scriptEle = document.createElement("script");
        var callbackName="_callback";
        window[callbackName]=function(data){
            callback(data);
            document.body.removeChild(scriptEle);
        }
        scriptEle.src=url;
        document.body.appendChild(scriptEle);
    }
5、判断一个字符串出现最多的字符，并统计次数

    var str="asdfssaaasasasasaa"
    var res =[];
    var len = str.length;
    for(let i=0;i<len;i++){
        if(! res[str.charAt(i)]){
            res[str.charAt(i)]=1
        }else{
            res[str.charAt(i)]++;
        }
    };
    var max=0,index='';
    for(let i in res){
        if(res[i] >max){
            max=res[i];
            index=i;
        }
    }
    console(i,max);
6、合并两个有序的数组
    
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
7、数组去重

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


8、取出空格
    去除所有空格: str = str.replace(/\s*/g,"");      
    去除两头空格: str = str.replace(/^\s*|\s*$/g,"");
    去除左空格： str = str.replace( /^\s*/, “”);
    去除右空格： str = str.replace(/(\s*$)/g, "");
    
9、图片的懒加载

    function lazyload(){
        var seeHeight=document.documentElement.clientHeight;//可视区的高度
        var scrollTop =document.documentElement.scrollTop;//滚动条离顶部的距离
        if(img.offsetTop < (seeHeight+scrollTop)){
            img.src=img.data-src;
        }
    }
    window.onscroll=throttle2(lazyload,500);
    //函数的节流：预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期 
    function throttle2(method, time) {
        var timeout,startTime = new Date();
        return function() {
            var context = this,
            args = arguments,
            curTime = new Date();
            clearTimeout(timeout);// 如果达到了规定的触发时间间隔，触发 handler
            if (curTime - startTime >= time) {
                method.apply(context, args);
                startTime = curTime;//没达到触发间隔，重新设定定时器
            } else {
                timeout = setTimeout(method, delay);
            }
    };
    //函数去抖：当调用动作n毫秒后，才会执行该动作
    function debounce1(method,delay){
        var timer = null;
        return function(){
            var context = this,args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function(){
            method.apply(context,args);
            },delay);
        }
    }
10、js操作cookie

    var cookie = {
        set:function(key,val,time){//设置cookie方法
            var date=new Date(); //获取当前时间
            var expiresDays=time; //将date设置为n天以后的时间
            date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
            document.cookie=key + "=" + val +";expires="+date.toGMTString(); //设置cookie
        },
        get:function(key){//获取cookie方法
        /*获取cookie参数*/
            var getCookie = document.cookie.replace(/[ ]/g,""); //获取cookie，并且将获得的cookie格式化，去掉空
        格字符
            var arrCookie = getCookie.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
            var tips; //声明变量tips
            for(var i=0;i<arrCookie.length;i++){ //使用for循环查找cookie中的tips变量
            var arr=arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
        if(key==arr[0]){     //匹配变量名称
            tips=arr[1]; //将cookie的值赋给变量tips
            break; //终止for循环遍历
            }
        }
        return tips;
        }
    }
11、写一个函数实现f(a,b)=f(a)(b)=a+b


    function sum(x){
        if(arguments.length ==2){
            return arguments[0]+srguments[1];
        }else{
            return function(y){
                return x+y;
            }
        }
    }
    functiom sum(x,y){
        if(y !== undefined){
            return x+y;
        }else{
            return function(y){return x+y;}
        }
    }
12、深度拷贝

    function deepCopy(obj){
        let clone;
        if(obj instanceof Array){
            clone=[];
            let len = obj.length;
            while(len--){
                clone[len]=deepCopy(obj[len]);
            }
            return clone;
        }else if(obj instanceof Object){
            clone={};
            for(let k in obj){
                clone[k]=deepCopy(obj[k]);
            }
            return clone;
        }else{
            return obj;
        }
    }
13、笛卡尔积的实现

    //传入的参数为一个数组,返回一个2维的数组
    function fun1(arr1){
        let res=[],len1=arr1.length;
        for(let i=0;i<len1;i++){
            let temp1 = arr1[i];
            res.push([temp1,temp2])
            }
        return res;
    }
    //传入的参数为两个数组，返回一个2维的数组
    function fun2(arr1,arr2){
        let res=[],len1=arr1.length,len2=arr2.length;
        for(let i=0;i<len1;i++){
            let temp1 = arr1[i];
            for(let j=0;j<len2;j++){
                let temp2=arr2[j];
                res.push([temp1,temp2])
            }
        }
        return res;
    }
    //传入一个2d数组和1d数组 返回一个2d数组
    function fun2d(arr2d,arr1d){
        let res=[],len2d=arr2d.length,len1d=arr1d.length;
        for(let i=0;i<len2d.length;i++){
            let temp2d=arr2d[i];
            for(let j=0;j<arr1d.length;j++){
                let temp1d=arr1d[j];
                res.push(temp2d.concat(temp1d));
            }
        }
        return res;
    }
    //传入的参数为多个数组
    function fun3(list){
        let res=[],len=list.length;
        let arr2d=fun2(list[0],list[1]);//先计算两个数组的
        for(let i=2;i<len;i++){
            let temp=list[i];
            arr2d =fun2d(arr2d,temp);
        }
        return arr2d;
    }
    function fun(list){
        if(!list) return [];
        if(list.length<=0) return [];
        if(list.length == 1) return fun1(list[0]);
        if(list.length == 2) return fun2(list[0],list[1]);
        if(list.length >= 3) return fun3(list);
    }
14、找出数组中重复的数字以及下标
    function duplicate(arr){
        if(arr == null) return [];
        let len=arr.length,res=[];
        for(let i=0;i<len;i++){//遍历数组
            let temp =arr[i];
            let index = arr.indexOf(temp);
            if(index !== i){
            //说明有重复的值
                res.push([temp,index]);
            }
        }
        return res;
    }
    var arr = [0,2,3,2,4,5,2,4,4]; 
    var find = function(arr) {
        var obj = []; //标志位
        var buf = []; //去重后的数组
        var rep = []; //重复值的数组及下标
        if (arr.length == 0) return;
        for (var i = 0; i < arr.length; ++i) {
            if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            buf.push(arr[i]);
            } else {
            rep.push([arr[i],i]);
        }
        }
    }
    find(arr);
    console.log(rep);
    console.log(buf);
15、js实现千分位
    //正则表达式 \d{1,3}(?=(\d{3})+$)  
    //表示前面有1~3个数字，后面的至少由一组3个数字结尾
    //?=表示正向引用，1到3个数字，这个数字后面跟3的倍数的数字，
    //$& 表示与正则表达式相匹配的内容
    function format(arr){
        var reg=/\d{1,3}(?=(\d{3})+$)/g;
        return (arr.toString()).replace(reg,'$&,')
    }
    //for循环 
    function format(arr){
        arr=arr+'';//数字转字符串
        var res="",len=arr.length;
        for(var i=len-1,j=1;i>=0;j++,i--){
            if(j%3 ==0 && i!=0){
                //每隔三位加，
                res+=arr[i]+',';
                continue;
            }
            res+=arr[i];
        }
        return res.split('').reverse().join('');
    }
    //slice+while
    //长度大于3，就截取放在新数组 
    function format(num) {
        var arr=[],str=num+'',len=str.length;
        while(len>=3){
            arr.unshift(str.slice(len-3,len));
            len=len-3;
        }
        str.length%3 && arr.unshift(str.slice(0,str.length%3));
        return arr+'';
    }
15、写出一个数组展开函数, 如输入：[1,[2,[3,4,2],2],5,[6]],  则输出：[1,2,3,4,2,2,5,6]
    // 因为和深度无关，所以说最简单可以这样
    function flatten(arr){
        var res = arr.join().split(',');
        res = res.map( ele => +ele)
        return res;
    }
    // 递归实现
    function flatten(arr){
        var array = [];
        arr.forEach(ele => {
            if(Array.isArray(ele)){
                array.push(...flatten(ele));
            } else {
                array.push(ele);
            }
        })
        return array;
    }