

window.onload=function(){
	$(".naw").click(function(){
		alert($(this).attr("id").split("-")[1]);
		$(this).removeClass("list-group-item-danger");
	});
	var ox=0;

	$(".radioo").click(function(){
		$("#people").slideUp();
		ox=0
	})

	$(".radiox").click(function(){
		$("#people").slideDown();
		ox=1
	})
//ox是是否验证

//验证的按钮
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

//提交的按钮

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

//流帐的按钮

$("#flow").click(function(){

})

}