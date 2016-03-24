$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});

 $('li').mouseenter(function(){
    $(this).animate({height: '+=15px'}, 100);
});
$('li').mouseleave(function(){
    $(this).animate({height: '-=15px'}, 100);
});
