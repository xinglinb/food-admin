

window.onload=function(){
	$(".naw").click(function(){
		alert($(this).attr("id").split("-")[1]);
		$(this).removeClass("list-group-item-danger");
	})
}