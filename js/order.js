window.onload=function(){
	$("#menu-A").click(function(){
		$("#menu-B").removeClass("act");
		$("#menu-C").removeClass("act");
		$("#menu-A").removeClass("act");
		$("#menu-A").addClass("act");
		$("#bav").text("A 类")
	})

	$("#menu-B").click(function(){
		$("#menu-B").removeClass("act");
		$("#menu-C").removeClass("act");
		$("#menu-A").removeClass("act");
		$("#menu-B").addClass("act");
		$("#bav").text("B 类")
	})

	$("#menu-C").click(function(){
		$("#menu-B").removeClass("act");
		$("#menu-C").removeClass("act");
		$("#menu-A").removeClass("act");
		$("#menu-C").addClass("act");
		$("#bav").text("C 类")
	})

	$("#menu-AA").click(function(){
		window.location.assign("order.html");
		$("#menu-B").removeClass("act");
		$("#menu-C").removeClass("act");
		$("#menu-A").removeClass("act");
		$("#menu-A").addClass("act");
		$("#bav").text("A 类")
	})

	$("#menu-BB").click(function(){
		window.location.assign("order.html");
		$("#menu-B").removeClass("act");
		$("#menu-C").removeClass("act");
		$("#menu-A").removeClass("act");
		$("#menu-B").addClass("act");
		$("#bav").text("B 类")
	})

	$("#menu-CC").click(function(){
		window.location.assign("order.html");
		$("#menu-B").removeClass("act");
		$("#menu-C").removeClass("act");
		$("#menu-A").removeClass("act");
		$("#menu-C").addClass("act");
		$("#bav").text("C 类")
	})

	$("#menu").click(function(){
		window.location.assign("order-menu.html");
	});

	$(".food").click(function(){
		alert($(this).attr("name").split("-")[1]);
	})

	$(".reduce").click(function(){
		alert($(this).attr("name").split("-")[1]);
	});

	$("#al-delete").click(function(){

		var r=confirm("你确定要取消！");
		if (r==true)
		{	
			window.location.assign("order.html");
		}
		else
		{

		}

	})

	$("#al-add").click(function(){
		window.location.assign("order.html");
		

	})
}