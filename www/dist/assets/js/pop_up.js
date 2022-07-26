$(".pop_trigger").on("click",function(){
    $("#pop_up_area").css("display","block");
    var src = $(this).children(".image_area").children("img").attr('src');
    var text =$(this).children(".pop_text").text();
    $("#pop_open_img").attr("src",src);
    $("#pop_up_text").text(text);
    $("#gray_back").css("display","block");
    $("#pop_close_btn").css("display","block");
})

$("#pop_close_btn").on("click",function(){
    $("#pop_up_area").css("display","none");
    $("#gray_back").css("display","none");
    $("#pop_close_btn").css("display","none");
})
$("#gray_back").on("click",function(){
    $("#pop_up_area").css("display","none");
    $("#gray_back").css("display","none");
    $("#pop_close_btn").css("display","none");
})