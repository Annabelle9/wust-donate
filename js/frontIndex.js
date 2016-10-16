// 首页焦点轮播图js设置
myFocus.set({
    id:'indexSlide',//焦点图盒子ID
    pattern:'mF_taobao2010',//风格应用的名称
    time:3,//切换时间间隔(秒)
    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
    width:686,//设置图片区域宽度(像素)
    height:217,//设置图片区域高度(像素)
    txtHeight:'0'//文字层高度设置(像素),'default'为默认高度，0为隐藏

});


//jQuery 开始
$(function(){

	//头部背景图自动切换功能
	function bgChange(){
		if($("#header").attr("class")=="bgA"){
			$("#header").removeClass("bgA").addClass("bgB");
		}else if($("#header").attr("class")=="bgB"){
			$("#header").removeClass("bgB").addClass("bgA");
		}	
	}
	var timer=setInterval(function(){
		bgChange();//需要切换的类名
	},4000);


	//截取文本设定的限制宽度，并自动输出省略号
	function clipWord(myLtter,max){
		var maxWidth=max;
		if($(myLtter).text().length>maxWidth){
			$(myLtter).text($(myLtter).text().substring(0,maxWidth));
			$(myLtter).html($(myLtter).html()+'…');
		}
	}
	//请在这里设置需要截取的元素（如下为ul.alist>li>a）和最大字符数（如下为10），形如下面所示
	$("ul.alist>li>a").each(function(){clipWord(this,15);});
	
})