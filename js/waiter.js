window.onload=function(){
	$("#btn-form").click(function(){
		$("#row-from").slideToggle();
	});
	
	$("#btn-alt").click(function(){
		$("#alt-red").show();
	});


	$("#head button").click(function(){
		var r=confirm("你确定要退出登录！");
		if (r==true)
		{
			window.location.assign("../sign.html")
		}
		else
		{
			
		}
	});

//第一个页面

	$("#one-submit").click(function(){
		if ($("*[name='new-password']").val()!=$("*[name='ne-password']").val()) {
			alert("两次密码不相同");
		}
		
	});

//第二个页面

	$(".twoAlter").click(function(){
		alert($(this).attr("name").split("-")[1]);
	})

	$(".twoDelete").click(function(){

		var r=confirm("你确定要退出登录！");
		if (r==true)
		{	
			alert($(this).attr("name").split("-")[1]);
			window.location.assign("add-menu.html")
		}
		else
		{
			
		}
		
	})

	$("#btn-add").click(function(){
		window.location.assign("add-menu.html")
	});

}
