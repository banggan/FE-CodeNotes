#### 常见的web攻击
- XSS攻击：Cross-SiteScripting:它允许攻击者将恶意代码植入到提供给其它用户使用的页面中。不同于大多数攻击(一般只涉及攻击者和受害者)，XSS涉及到三方，即攻击者、客户端与Web应用。XSS的攻击目标是为了盗取存储在客户端的cookie或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互。

存储型XSS，主要出现在让用户输入数据，供其他浏览此页的用户进行查看的地方，包括留言、评论、博客日志和各类表单等。应用程序从数据库中查询数据，在页面中显示出来，攻击者在相关页面输入恶意的脚本数据后，用户浏览此类页面时就可能受到攻击。这个流程简单可以描述为：恶意用户的Html输入Web程序->进入数据库->Web程序->用户浏览器。

反射型XSS，主要做法是将脚本代码加入URL地址的请求参数里，请求参数进入程序后在页面直接输出，用户点击类似的恶意链接就可能受到攻击。
防御：httponly、转义过滤、富文本的白名单过滤、csp指定执行的内容
- SQL注入：攻击者成功的向服务器提交恶意的SQL查询代码，程序在接收后错误的将攻击者的输入作为查询语句的一部分执行，导致原始的查询逻辑被改变，额外的执行了攻击者精心构造的恶意代码。
防御：预编译语句，对数据库的特殊字符转义处理
- DDOS：分布式拒绝服务攻击，发送大量的请求使服务器瘫痪 
- Csrf:跨站请求伪造
防御：1、Synchronizer Tokens
Synchronizer Tokens： 在表单里隐藏一个随机变化的 csrf_token csrf_token 提交到后台进行验证，如果验证通过则可以继续执行操作。这种情况有效的主要原因是网站 B 拿不到网站 A 表单里的 csrf_token
2、Hash加密cookie中csrf_token值
3、token校验等
#### js 异步编程的四种方法

- 回调函数，这是异步编程最基本的方法。
- 事件监听，另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
- 发布/订阅，上一节的"事件"，完全可以理解成"信号"。
- Promises对象，Promises 对象是CommonJS 工作组提出的一种规范，目的是为异步编程提供统一接口。

#### js解析url地址

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
#### js实现ajax请求时的锁屏解屏功能（请求时loading，元素不能点击，请求完成消除锁屏）

        
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
#### 封装一个jsonp

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
    function loadScript(url, callback){
       var script = document.createElement("script")
       script.type = "text/javascript";
       if (script.readyState){ //兼容IE
          script.onreadystatechange = function(){
             if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
             }
          };
       } else { //兼容其他浏览器
          script.onload = function(){
              callback();
          };
       }
       script.src = url;
       document.body.appendChild(script);
    }
#### 页面的js保证完全加载

    var n = document.createElement("script");
    n.type = "text/javascript";
    //以上省略部分代码
    //ie支持script的readystatechange属性(IE support the readystatechange event for script and css nodes)
    if(ua.ie){
       n.onreadystatechange = function(){
           if('loaded' === this.readyState || 'complete'===this.readyState){
               n.onreadystatechange = null;
               f(id,url); //回调函数
           }
    };
       n.addEventListener('load',function(){
           f(id,url);
       });
    }else{
       n.onload = function(){
           f(id,url);
       };
    }
#### 图片的懒加载

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
    //分时函数
    var timeChunk = function(arg, fn, count) {//要渲染的数据，渲染数据执行的函数，每次渲染的数量
        var obj,t,len = arg.length;
        var start = function() {
            for (var i = 0; i < Math.min(count || 1, arg.length); i++) {
                var obj = arg.shift();//从数组头部移除一个元素，并返回这个值
                fn(obj);//执行方法
            }
        };
        return function() {
            t = setInterval(function(){
                if(arg.length === 0) {
                    return clearInterval(t);
                }
                start();
            },200);
        }
    };
    var arg = [];
    for( var i = 0; i <= 100; i++ ) {
        arg.push(i);
    }
    var renderList = timeChunk(arg, function(inner){
       console.log(arg);
        var div = document.createElement('div');
        div.innerHTML = inner;
        document.body.appendChild( div );
    }, 10);
    documt.querySelector('.timeChunk').addEventListener('click', renderList, false)

#### js操作cookie

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
#### 写一个函数实现f(a,b)=f(a)(b)=a+b

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
#### 深度拷贝

    //递归实现:不能实现包装类型比如通过new String()或者new Number()创建的对象的深度克隆
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
    //ES6的Object.assign:通过Object.getPrototypeOf函数得到obj被克隆函数的原型上的属性，然后通过Object.assign实现深度克隆
    function clone(obj){
        var proto =Object.getPrototypeOf(obj);//获取obj的原型
        return Object.assign({},Object.create(proto),obj);
    }
    //json序列化 反序列化解析为js对象
    var deepClone = function (obj) {
    var _tmp,result;
    _tmp = JSON.stringify(obj);
    result = JSON.parse(_tmp);
    return result;
}

#### 闭包的使用

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
#### 设计模式 发布订阅者模式

    class EventEmiter {
    	constructor() {
    		this.eventHandlers = {};
    	}
    	on(event, handler) {//注册事件
    	if (!this.eventHandlers[event]) this.eventHandlers[event] = [];
    	this.eventHandlers[event].push(handler);
    	}
        off(event,handler){//解除事件
    		if(this.eventHandlers[event]){
    			if(this.eventHandlers[event]=handler){
			   this.eventHandlers[event].filter(function(v){
    				v!==handler;
    			})
    		}else{
    			this.eventHandlers[event]=[];
    		}
	    }
    	emit(){//触发事件
    	let e = Array.prototype.shift.call(arguments);
    	if(!this.eventHandlers[e]) return;
    		let arg = arguments;
    		let context = this;
    		this.eventHandlers[e].forEach(function(handler) {
    			handler.apply(context, arg);
    		})
    	}
    }
    //
    function EventEmitter() {
        var onEvents = {}, onceEvents = {};
        this.on = function(event, listener){
            if (event in onEvents) {
                onEvents[event].push(listener);
            } else {
                onEvents[event] = [listener];
            }
        };
        this.once = function(event, listener){
            if (event in onceEvents) {
                onceEvents[event].push(listener);
            } else {
                onceEvents[event] = [listener];
            }
        };
        this.emit = function(event, ...args){
            var onList = onEvents[event],
                onceList = onceEvents[event];
            if (onList)
                for (var i in onList)
                    onList[i].apply(null, args);
            if (onceList) {
                for (var i in onceList)
                    onceList[i].apply(null, args);
                delete onceEvents[event];
                //onceEvents[event].length = 0;//清空once的监听器
            }
             
        };
        this.remove = function(event, listener){
            var onList = onEvents[event],
                onceList = onceEvents[event];
            if (onList)
                while(onList.indexOf(listener) !== -1) {
                    onList.splice(onList.indexOf(listener),1);
                }
            if (onceList)
                while(onceList.indexOf(listener) !== -1) {
                    onceList.splice(onceList.indexOf(listener),1);
                }
        };
         
    }
#### 设计模式 单例模式

    var Singleton = (function () { 
        var instantiated; 
        function init(){ 
            return { 
                publicMethod: function (){     
                    console.log('hello world'); 
                }, 
                publicProperty: 'test' 
            }; 
        } 
        return {
        getInstance: function () { 
            if (!instantiated) { //确保只有一个实例 
                instantiated = init(); 
            } 
            return instantiated; 
            } 
        }; 
    })(); 
    Singleton.getInstance().publicMethod(); // hello world
#### 设计模式 构造函数模式

    function Person(name, age, job) { 
        if (!(this instanceof Person)) { 
            return new Person(name, age, job); 
        } 
        this.name = name; 
        this.age = age; 
        this.job = job; 
        this.sayName = function(){
            return this.name + 'is' + this.age + 'years old';
        } 
    }
    var person1 = new Person("Davis", 22, "student"); 
    var person2 = Person("Faker", 21, "player"); console.log(person1.sayName()); // Davis is 22 years old console.log(person2.sayName()); // Faker is 21 years old

    
#### promise.all的地城实现

    promise.all=function(promises){
        return new Promise(function(resolve,reject){
            let res=[],len=promises.length,count=0;
            for(let i=0;i<len;i++){
                promises[i]().then(function(data){
                    res[i]=data;
                    count++;
                    if(count ==len){
                        resolve(res);
                    }
                },function(error){
                    reject(error);
                });
            }
        });
    }
#### 找出一天中时针和分针重合的点

    let minAngle = 0;
    let hourAngle = 0;
    let ans = [];
    for (let i = 0; i < 12 * 60 * 60; i++) {
      if (minAngle >= 360) minAngle -= 360;
      if (Math.abs(minAngle - hourAngle) < 0.045)
        //这里阈值要多试几次调整到相邻时间超过一小时
        ans.push(i);
      minAngle += 360 / (60 * 60);
      hourAngle += 360 / (12 * 60 * 60);
    }
    ans.forEach(ele => {
      ele /= 60;
      let hour = Math.floor(ele / 60);
      let min = (ele % 60).toFixed();
      console.log(hour + ":" + min);
      console.log(hour + 12 + ":" + min);
    });
    console.log("count=" + ans.length * 2);
#### 当年还剩多少时间

     function counter() {
          var date = new Date();
          var year = date.getFullYear();
          var date2 = new Date(year, 12, 31, 23, 59, 59);
          var time = (date2 - date)/1000;
          var day =Math.floor(time/(24*60*60))
          var hour = Math.floor(time%(24*60*60)/(60*60))
          var minute = Math.floor(time%(24*60*60)%(60*60)/60);
          var second = Math.floor(time%(24*60*60)%(60*60)%60);
          var str = year + "年还剩"+day+"天"+hour+"时"+minute+"分"+second+"秒";
         console.log( str);
       }
#### 对象属性枚举的方法

- for ... in：遍历对象中所用可枚举的对象属性（包括对象自身的和继承的）hasOwnProperty只获取对象的事列属性
- Object.keys()返回一个由给的对象的所有所以可枚举自身属性的属性名的集合，自身属性，而不是从原型继承的
- Object.getOwnPropertyNames()返回一个由指定对象的所有自身属性的属性名（包括不可枚举的）数组，不会获取原型的
- for ... of：ES6，遍历可迭代的对象（Array,Map,Set,arguments)获取对象的属性值，for  in获取的属性名，Array.prototype.forEach也可以直接获取属性值
#### 对象属性的监测
- in 存在true 右侧必须为一个对象，不能是一个字符串原始值
- hasOwnProperty 是否含有指定的自身属性，不包括继承
- propertyIsEnumerable:判断指定的对象的属性是否可枚举，是否可以通过for..in遍历到 但也不包括继承
- ！==undefined 监测自身和继承的属性 严格区分 null和undefined 当属性存在且为undefined 无法准确判断
