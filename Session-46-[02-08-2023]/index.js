$(document).ready(function() {
    $("#btn-two").dblclick(function(){
        alert("Double-Clicked On Button!!");
    });
    $(".text").mouseleave(function(){
        $(".text").css("background-color", "lightblue");
        $(".text").css("border", "2px solid red");
    })
    $(".text").mouseenter(function(){
        $(".text").css("border", "2px solid gray");
    })
    $("#btn").click(function(){
        alert("ypu have clicked button");
    })
    $("#btn").mouseenter(function(){
        $("#btn").css("border-color", "black");
    })
    $("input").focus(function(){
        $(this).css("background-color", "darkgray");
    });
    $("input").blur(function(){
        $(this).css("background-color", "transparent");
    });
    $("input").keypress(function(event){
        $(".add-text").text("Key Pressed: " + event.key);
    });
    $("input").keydown(function(event){
        $(this).css("background-color", "lightyellow");
    });

    $("input").keyup(function(event){
        $(this).css("background-color", "transparent");
    });
});
