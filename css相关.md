#### css选择器
###### 基本选择器
1. 通配符选择器（＊）
2. 元素选择器(li)
3. 类选择器（.className）  多类不支持IE6
4. id选择器（#ID）
5. 后代选择器（Ｅ Ｆ）E的所有F后代元素
6. 子元素选择器(E>F)后代选择器中Ｆ是Ｅ的后代元素，而子元素，Ｆ仅是Ｅ的子元素。IE6不支持
7. 相邻兄弟选择器（E+F) EF两个元素具有一个父元素，F在E的后面且相邻
8. 通用兄弟选择器（E~F) E元素后面所有的F元素，只有F在E后面即可    IE6不支持
9. 群组选择器（s1,s2)
###### 属性选择器 IE6不支持
1. E[attr]：只使用属性名，但没有确定任何属性值；
1. E[attr="value"]：指定属性名，并指定了该属性的属性值；
1. E[attr~="value"]：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写；
1. E[attr^="value"]：指定了属性名，并且有属性值，属性值是以value开头的；
1. E[attr$="value"]：指定了属性名，并且有属性值，而且属性值是以value结束的；
1. E[attr*="value"]：指定了属性名，并且有属性值，而且属值中包含了value；
1. E[attr|="value"]：指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）;
###### 伪类选择器 CSS3新增加的":nth-child"选择器
1. 动态伪类 Link--visited--hover--active
2. UI元素状态伪类 ":enabled",":disabled",":checked" IE6-IE8不支持
3. CSS3的：nth选择器
- :first-child选择某个元素的第一个子元素；
- :last-child选择某个元素的最后一个子元素；
- :nth-child()选择某个元素的一个或多个特定的子元素；
- :nth-last-child()选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算；
- :nth-of-type()选择指定的元素；
- :nth-last-of-type()选择指定的元素，从元素的最后一个开始计算；
- :first-of-type选择一个上级元素下的第一个同类子元素；
- :last-of-type选择一个上级元素的最后一个同类子元素；
- :only-child选择的元素是它的父元素的唯一一个了元素；
- :only-of-type选择一个元素是它的上级元素的唯一一个相同类型的子元素；
- :empty选择的元素里面没有任何内容。

#### css中的单位
1. 绝对单位
- px:在web上,像素px是典型的度量单位，很多其他长度单位直接映射成像素。最终，他们被按照像素处理
- in:英寸，1in = 2.54cm=96px;
- cm: 1cm = 37.8px;
- mm: 1mm =3.78px;
- q: q=1/4mm=0.954px;
- pt: 点等于1/72英寸 1pt= 1.33px;
2. 字体相对单位长度
- em: 相对于当前对象内文本的字体尺寸,em的计算是基于父级元素font-size的
- rem: css3新增的一个相对单位，与em的区别在于，它是相对于html根元素的(在body标签里面设置字体大小不起作用)；
- vw: viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
- vh: viewpoint height，视窗高度，1vh等于视窗高度的1%。
- vmin: vw和vh中较小的那个。
- vmax: vw和vh中较大的那个。
- %:
#### css预处理语言
1. sass：在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。
- Sass中的变量：$变量名：变量值 声明变量
- sass中的运算会将单位进行运算，注意最终单位
- 嵌套：选择器嵌套 ul{li{}} 后代   ul{>li{}}子代 &表示上一层 ；属性嵌套：border：{color：red;} ; 伪类嵌套： ul{li{&:hover{"ul li:hover"}}};

#### 实现以下的样式 三角形

 ![image](http://uploadfiles.nowcoder.net/images/20141201/59_1417438684174_QQ%E6%88%AA%E5%9B%BE20141201205750.png)

    .chart{
    width:100px;
    height:100px;
    border:2px solid #000;
    background-color:#fff;
    position:relative;
    }
    .chart:before{
        content:"";
        right:-12px;
        top:20px;
        border-top:10px solid transparent;
        border-bottom:10px solid transparent;
        border-left:10px solid #000;
        position:absolute;
    }
    .chart:after{
        content:"";
        right:-10px;
        top:20px;
        border-top:10px solid transparent;
        border-bottom:10px solid transparent;
        border-left:10px solid #fff;
        position:absolute;
    }
#### 垂直居中实现的几种方式


    文字垂直水平居中：
    水平：text-align:center
    单行：line-heigth =height
    多行：display:table-cell,vertical-align:middle
    图片的垂直水平居中：
    水平居中：
    img设display:inline-block;然后父级text-align：center；
    img设display:block; 同时设margin: 0 auto;
    垂直居中：
    img父级display:table-cell; vertical:middle; height:xxx;
    
    方式一:绝对定位（定高宽）
    .child{
        position:absolute;
        width:200px;
        height:200px;
        top:50%;
        left:50%;
        margin-left:-100px;
        margin-top:-100px;
    }
    方式二:绝对定位 transform替换margin
    .child{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    	background-color:red;
    }
    方式：:before和display:inline-block通过伪类:before在元素内增加新元素后在用display:inline-block，通过高度的处理得到想要的效果
    .container{
        text-align: center;
    }
    .container:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    .inner {
        display: inline-block;
    }
    方式三:tabel布局 （不定高宽)
    
    .parent {
      display: table;
      width: 200px;
      height: 200px;
      background: red;
    }
    .child {
      display: table-cell;
      vertical-align:middle;
      text-align:center;
    }
    
    方式四:flex布局 
    .parent{
    	display:flex;
    	justify-content:center;
    	align-items:center;
    	width:200px;
    	height:200px;
    	background-color:red;
    		
    	}
    .child{
    	flex：1;
    	background-color:yellow;
    	width:10%;
    	height:10%;
    }
#### 三列布局的实现方式
高度已知，左栏、右栏宽度300px，中间宽度自适应。 

    方式一：浮动（清除浮动）
        .left{
                float:left;
                width:100px;
                background: red;
              }
         .center{
                background: yellow;
              }
        .right{
                float:right;
                width:100px;
                background: blue;
              }
    方式二：绝对定位（脱离文档流）
        .left{
		  position: absolute;
          left:0;
          width: 100px;
          background: red;
        }
       .center{
		   position: absolute;
          left: 100px;
          right: 100px;
          background: yellow;
        }
       .right{
		  position: absolute;
          right:0;
          width: 100px;
          background: blue;
        }
    
    方式三：flex布局（不兼容IE8）
        .left-center-right{
    		display:flex;		
    	}       
        .left{
            width: 100px;
            background: red;
        }
       .center{
		  flex:1;
          background: yellow;
        }
       .right{	
          width: 100px;
          background: blue;
        }
    方式四：表格table布局（一边的高度超过，均超过
    .left-center-right{
			display:table;
			width:100%;
			height:100%;
		}
        .left{
		  display:table-cell;
          width: 100px;
          background: red;
        }
       .center{
		 display:table-cell;
          background: yellow;
        }
       .right{	
		   display:table-cell;
          width: 100px;
          background: blue;
        }
    方式五：grid栅格布局
    .left-center-right{
		  width:100%;
          display: grid;
          grid-template-rows: 100px;
          grid-template-columns: 100px auto 100px;
		}
        .left{
		  width:100px;
          background: red;
        }
       .center{	
          background: yellow;
        }
       .right{		  
          background: blue;
        }
#### 动画 

    方式一：animation keyframes
    div{
    width:100px;
    height:100px;
    background:red;
    animation:myfirst 5s liner;
    -moz-animation:myfirst 5s; /* Firefox */
    -webkit-animation:myfirst 5s; /* Safari and Chrome */
    -o-animation:myfirst 5s; /* Opera */
    }
    
    @keyframes myfirst
    {
    from {background:red;}
    to {background:yellow;}
    }
    方式二：transition 加transform
    transform:rotate(180deg);
    transition:transform 1s liner;
    transition-property:属性的效果
    transition-duration:持续时间
    transition-timing-function:动画曲线
    transition-delay：效果开始时间
    方式三：利用定时器实现 动画不会与屏幕的刷新率同步
    window.onload=function(){
        var current=0,target=400;
        clearInterval(timer);
        timer=setInterval(function(){
            current +=(target-current)/20;
            obj.style.top=current+"px";
        },20);
    }
    方式四：requestAnimationFrame实现把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成,并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率,
    function render(time){
        time=Date.now();
        if(starttime === undefined){
            starttime=time;
        }
        ele.style.top=((time-starttime)/10)%300+"px";
    }
    ele.onclick=function(){
        (function animloop(){
            render();
            reauestAnimationFrame(animloop,ele);
        })();
    }
    //旋转动画
    var deg = 0; 
    block.addEventListener("click", function(){ 
        var self = this; 
        requestAnimationFrame(function change(){ 
            self.style.transform = "rotate(" + (deg++) +"deg)"; 
            requestAnimationFrame(change); });});

1.JS动画
缺点：
(1)JavaScript在浏览器的主线程中运行，而主线程中还有其它需要运行的JavaScript脚本、样式计算、布局、绘制任务等,对其干扰导致线程可能出现阻塞，从而造成丢帧的情况。
(2)代码的复杂度高于CSS动画
优点：
(1)JavaScript动画控制能力很强, 可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。
(2)动画效果比css3动画丰富,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有JavaScript动画才能完成
(3)CSS3有兼容性问题，而JS大多时候没有兼容性问题

CSS动画
缺点：
(1)运行过程控制较弱,无法附加事件绑定回调函数。CSS动画只能暂停,不能在动画中寻找一个特定的时间点，不能在半路反转动画，不能变换时间尺度，不能在特定的位置添加回调函数或是绑定回放事件,无进度报告
(2)代码冗长。
优点： 
(1)浏览器可以对动画进行优化。
 浏览器使用与 requestAnimationFrame 类似的机制，requestAnimationFrame比起setTimeout，setInterval设置动画的优势主要是:1)requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成,并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率,一般来说,这个频率为每秒60帧。2)在隐藏或不可见的元素中requestAnimationFrame不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
(2)强制使用硬件加速 （通过 GPU 来提高动画性能）
#### 轮播图

    //html代码
    <div class="banner">
		    <!--无序列表承载轮播的图片-->
		    <ul class="img">
		        <li><a href="#"><img src="img/1.jpg" alt="第1张图片"></a></li>
		        <li><a href="#"><img src="img/2.jpg" alt="第2张图片"></a></li>
		        <li><a href="#"><img src="img/3.jpg" alt="第3张图片"></a></li>
		        <li><a href="#"><img src="img/4.jpg" alt="第4张图片"></a></li>		 
		    </ul>
		    <!--用来放置圆点具体实施在js代码中呈现-->
		    <ul class="num"></ul>
		    <!--左右点击按钮-->
		    <div class="btn">
		        <span class="prev"><</span>
		        <span class="next">></span>
		    </div>
		</div>
	//css
    /*取消列表的图标内容*/
    ul{
        list-style: none;
    }
    /*对整体部分的控制，浏览图片的窗口*/
    .banner{
        width: 1024px;
        height: 520px;
        border: 2px solid #ccc;
        margin: 100px auto;
        position: relative;
        overflow: hidden;
    }
    /*图片的初步设置后面的动态内容会在js中实现*/
    .img{
        width:1024px;
        height: 520px;
        position: absolute;
        top: 0;
        left: 0;
    }
    /*让没长图片向左浮动*/
    .img li{
        float: left;
    }
    /*圆点承载部分的设计*/
    .num{
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
        font-size: 0;
    }
    /*圆点设计*/
    .num li{
        width: 10px;
        height: 10px;
        background:rgba(0,0,0,0.5);
        border-radius: 100%;
        display: inline-block;
        margin: 0 5px;
        cursor: pointer;
    }
    /*按钮部分初始不可见*/
    .btn{
        display: none;
    }
    /*按钮形状设计*/
    .btn span{
        display: block;
        width: 50px;
        height: 100px;
        background: rgba(0,0,0,0.6);
        color: #fff;
        font-size: 40px;
        line-height: 100px;
        text-align: center;
        cursor:pointer;
    }
    /*上一个设计*/
    .btn .prev{
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -50px;
    }
    /*下一个设计*/
    .btn .next{
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -50px;
    }
    /*对按妞动态呈现的变换进行类选择器的设计为js代码部分进行铺垫*/
    .num .active{
        background-color: #fff;
    }
    .hide{
        display: none;
    }
    //js代码
    //轮播图的实现方式：
    //例如：有4张轮播的图片，每张图片的宽度为1024px、高度为520px.
    //那么轮播的窗口大小就应该为一张图片的尺寸，即为：1024×520。
    //之后将这4张图片0px水平相接组成一张宽度为：4096px,高度依然为：520px。
    //最后将这张合成后的大图每次向左移动1024px即可实现轮播图。
    $(function(){
        //定义i变量为动态控制图片轮播做准备，i的值与每张图片进行一一的对应
        var i=0;
        //时间变量，为自动轮播以及对光标的影响做出相应的反应
        var timer=null;
        //根据图片的张数动态添加圆点个数
        for (var j = 0; j < $('.img li').length; j++) {
            $('.num').append('<li></li>');
        }
        //默认情况下的第一个圆点进行背景设计
        $('.num li').first().addClass('active');
        //根据光标的影响控制按钮的显示和隐藏
        $('.banner').hover(function(){
            $('.btn').show();
        },function(){
            $('.btn').hide();
        });
        //将第一张图片复制并添加到img部分下与前四张图片相接
        var firstimg=$('.img li').first().clone(); //复制第一张图片
        //设置宽度为图片张数*图片的宽度
        $('.img').append(firstimg).width($('.img li').length*($('.img img').width()));
        //定时器自动轮播
        timer=setInterval(function(){
            i++;
            if (i==$('.img li').length) {
                i=1;
                $('.img').css({left:0});//保证无缝轮播，设置left值
            }
            //进行下一张图片
            $('.img').stop().animate({left:-i*1024},500);
            //圆点跟着变化
            if (i==$('.img li').length-1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },1000);
        //鼠标移入，暂停自动播放，移出，开始自动播放
        $('.banner').hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(function(){
                i++;
                if (i==$('.img li').length) {
                    i=1;
                    $('.img').css({left:0});
                };
                //进行下一张图片
                $('.img').stop().animate({left:-i*1024},500);
                //圆点跟着变化
                if (i==$('.img li').length-1) {
                    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
                }else{
                    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
                }
            },1000)
        });
        //上一个按钮
        $('.prev').click(function(){
            i--;
            if (i==-1) {
                i=$('.img li').length-2;
                $('.img').css({left:-($('.img li').length-1)*1024});
            }
            $('.img').stop().animat
            e({left:-i*1024},500);
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        });
        // 下一个按钮
        $('.next').click(function(){
            i++;
            if (i==$('.img li').length) {
                i=1; //这里不是i=0
                $('.img').css({left:0});
            };
            $('.img').stop().animate({left:-i*1024},500);
            if (i==$('.img li').length-1) { //设置小圆点指示
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            };
     
        });
        //鼠标划入圆点
        $('.num li').mouseover(function(){
            var _index=$(this).index();
            //维持i变量控制的对应关系不变
            i = _index;                 
            $('.img').stop().animate({left:-_index*1024},300);
            $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
        });
     
    })
    
#### 纵横比
基于width的百分比来设置padding百分比值：padding-top:高度/宽度*100%

    .container {position: relative; width: 100%; height: 0; padding-top: 56.25% // 9 / 16 * 100% } 
    .embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
    //使用::after或者::before来控制容器比例：
    .container { position: relative; width: 75%; &:before { content: ""; display: block; width: 100%; padding-top: 56.25%; } }
    //grid来实现 使用viewpor单位实现
    .container { display: grid; grid-template-columns: repeat(16, 5.625vw); grid-auto-rows: 5.625vw; }
    //grid-column合并的横向比例，示例中是span 16；grid-row合并的是纵向比例，示例中是span 9。同时把嵌入width和height都设置为100%，用来足以填补整个网格区域
    .embed { grid-column: span 16; grid-row: span 9; width: 100%; height: 100%; }