window.onload=function(){

	$("#btn-in").click(function(){
		var phone=$("*[name='phone']").val();
		var password=$("*[name='password']").val();
		$.ajax({
			type:"get",
			url:"",
			data:{
				userid:"phone",
				userpsswd:md5("password")
			},
			dataType:"json",
			success: function (data) {
				alert("1："+data.userId);
				if(data){
					alert("2："+data.userPasswd);
				}
			}
		})
	});

}
