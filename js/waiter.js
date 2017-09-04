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

// //第二个页面

// $(".twoAlter").click(function(){
// 	alert($(this).attr("name").split("-")[1]);
// 	window.location.assign("make-menu.html")
// })

// $(".menuDelete").click(function(){

// 	var r=confirm("你确定删除！");
// 	if (r==true)
// 	{	
// 		alert($(this).attr("name").split("-")[1]);
// 		window.location.assign("waiter-two.html")
// 	}
// 	else
// 	{

// 	}

// })

// $("#btn-add").click(function(){
// 	window.location.assign("add-menu.html")
// });

//第二个页面
var ox=0;

$(".radioo").click(function(){
	$("#people").slideUp();
	ox=0
})

$(".radiox").click(function(){
	$("#people").slideDown();
	ox=1
})

$("#btn-alt").click(function(){

	$.ajax({
		type:"get",
		url:"",
		data:{
			userid:$("*[name='three-oldphone']").val(),

		},
		dataType:"json",
		success: function (data) {
			if(data.success){
				sessionStorage.refereeId = data.message;
				$("input").removeAttr("disabled");
				$("button").removeAttr("disabled");
				$("select").removeAttr("disabled");
				alert("验证通过！")
			}
			else{
				$("#alt-red").show();
			}

		}
	})

});

$("#three-submit").click(function(){

	if ($("*[name='three-password']").val()==$("*[name='three-bpassword']").val()) {
		$.ajax({
			type:"get",
			url:"",
			data:{
				userid:sessionStorage.refereeId,
				userid:$("*[name='three-name']").val(),
				userid:$("*[name='three-phone']").val(),
				userid:$("*[name='three-password']").val(),
				// userid:$("*[name='three-money']").val(),
			},
			dataType:"json",
			success: function (data) {
				if(data.success){
					$("input").val("")
					alert("添加成功")
				}
				
			}
		})
	}
	else{
		alert("两次密码不相同")
	}



});


}
