//爬虫
var http = require('http')
var cheerio = require('cheerio')
var url ='http://www.imooc.com/learn/348'

function filter(html){
	var $ = cheerio.load(html)
	var chapters = $('.learnchapter')

	[{
		chapterTitle:'',
		videos:[
		title:''
		id:''
		]
	}]
	var courseData=[]
	chapters.each(function(item){
		var chapter =$(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(item){
			var video=$(this).find(".studyvideo")
			var videoTitle=video.text()
			var id = video.attr('href')
		})
	})
}
http.get(url,function(res){
	var html=''

	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		filter(html)
	})
}).on('error',function(){
	console.log('error')
})