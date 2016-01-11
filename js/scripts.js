$(document).ready(function() {
  $("h1").hover(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").dblclick(function() {
    alert("This is an image.");
  });

  $("h2").click(function() {
    alert("This is a list");
  });

  $("li").dblclick(function() {
    alert("This is an unordered list.");
  });
});
