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
}