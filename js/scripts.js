$(function() {
  $(".clickableW").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
});

//
// $(function() {
//   $(".borderfun").click(function() {
//     $("#img-border").slideToggle();
//     $("#img-noborder").slideToggle();
//   })
// })

$(function() {
  $(".clickableG").click(function() {
    $("#giraffe-showing").slideToggle();
    $("#giraffe-hidden").slideToggle();
  });
});
