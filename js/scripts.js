$(document).ready(function() {
  $("button#JS").click(function() {
    $("p#JSdef").slideToggle(800);
    $("button#JS").hide();
  });
  $("p#JSdef").click(function() {
    $("button#JS").fadeToggle();
    $("p#JSdef").hide();
  });

  $("button#variables").click(function() {
    $("p#variabledef").slideToggle(800);
    $("button#variables").hide();
  });
  $("p#variabledef").click(function() {
    $("button#variables").fadeToggle();
    $("p#variabledef").hide();
  });

  $("button#functions").click(function() {
    $("p#functionsdef").slideToggle(800);
    $("button#functions").hide();
  });
  $("p#functionsdef").click(function() {
    $("button#functions").fadeToggle();
    $("p#functionsdef").hide();
  });

  $("button#methods").click(function() {
    $("p#methodsdef").slideToggle(800);
    $("button#methods").hide();
  });
  $("p#methodsdef").click(function() {
    $("button#methods").fadeToggle();
    $("p#methodsdef").hide();
  });

  $("button#arguments").click(function() {
    $("p#argumentsdef").slideToggle(800);
    $("button#arguments").hide();
  });
  $("p#argumentsdef").click(function() {
    $("button#arguments").fadeToggle();
    $("p#argumentsdef").hide();
  });

  $("button#strings").click(function() {
    $("p#stringsdef").slideToggle(800);
    $("button#strings").hide();
  });
  $("p#stringsdef").click(function() {
    $("button#strings").fadeToggle();
    $("p#stringsdef").hide();
  });

  $("button#booleans").click(function() {
    $("p#booleansdef").slideToggle(800);
    $("button#booleans").hide();
  });
  $("p#booleansdef").click(function() {
    $("button#booleans").fadeToggle();
    $("p#booleansdef").hide();
  });

  $("button#undefined").click(function() {
    $("p#undefineddef").slideToggle(800);
    $("button#undefined").hide();
  });
  $("p#undefineddef").click(function() {
    $("button#undefined").fadeToggle();
    $("p#undefineddef").hide();
  });

  $("button#jQuery").click(function() {
    $("p#jQuerydef").slideToggle(800);
    $("button#jQuery").hide();
  });
  $("p#jQuerydef").click(function() {
    $("button#jQuery").fadeToggle();
    $("p#jQuerydef").hide();
  });
});
