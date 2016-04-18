$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("h4").click(function() {
    alert("This is a paragraph.");
  });

  $("h2").click(function() {
    alert("This is a list");
  });

  $("li").dblclick(function() {
    alert("This is an unordered list.");
  });

  $(".clickable").click(function() {
    $(".initially-hidden").fadeToggle();
    $(".initially-showing").fadeToggle();
  });
});
