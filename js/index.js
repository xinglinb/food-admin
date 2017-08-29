window.onload=function(){

	$("#btn-in").click(function(){
		var phone=$("*[name='phone']").val();
		var password=$("*[name='password']").val();
		$.ajax({
			type:"get",
			url:"/ldss/user/login",
			data:{
				usertel:phone,
				userpasswd:md5(password)
			},
			dataType:"json",
			success: function (data) {
				if(data.success){
					window.location.href="/ldss/html/waiter.html";
				}else{
					alert("用户名或密码错误");
				}
			}
		})

	});

}
