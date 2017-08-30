window.onload=function(){
	


	$("#head button").click(function(){
		var r=confirm("你确定要退出登录！");
		if (r==true)
		{
			window.location.assign("sign.html")
		}
		else
		{
			
		}
	});

//第一个页面

$("#btn-form").click(function(){
	$("#row-from").slideToggle();
});

$("#one-submit").click(function(){
	if ($("*[name='new-password']").val()!=$("*[name='ne-password']").val()) {
		alert("两次密码不相同");
	}

});

//第二个页面

//第三个页面

//第四个页面

$(".twoAlter").click(function(){
	alert($(this).attr("name").split("-")[1]);
	window.location.assign("make-menu.html")
})

$(".menuDelete").click(function(){

	var r=confirm("你确定删除！");
	if (r==true)
	{	
		alert($(this).attr("name").split("-")[1]);
		window.location.assign("boss-four.html")
	}
	else
	{

	}

})

$("#btn-add").click(function(){
	window.location.assign("add-menu.html")
});


//第五个页面


//第六个页面
}


