window.onload=function(){
	$("#btn-form").click(function(){
		$("#row-from").slideToggle();
	});
	
	$("#btn-alt").click(function(){
		$("#alt-red").fadeToggle();
	});


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

	$("#btn-add").click(function(){
		window.location.assign("add-menu.html")
	});
}
