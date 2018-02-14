$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("bv");
  });
    $("button#light").click(function() {
      $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("#hghl").click(function() {
  $("p").removeClass();
  $("p").addClass("box");
});
});
