//Back End Logic

//Front End Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var passport = $("#passport").val();
    var recInput = parseInt($("#rec").val());
    var reasonInput = parseInt($("#reason").val());
    var budgetInput = parseInt($("#budget").val());
    var foodInput = parseInt($("#food").val());
    var score = recInput + budgetInput + reasonInput +foodInput
    debugger;
    if (passport === "Yes") {
      if (score >= 1) {
        $("#patagonia").siblings().hide();
        $("#patagonia").show();
      }

      else if (score < 1) {
        $("#morocco").siblings().hide();
        $("#morocco").show();
      }

      else {
        alert("You missed a box");
      }
    }

    else {
      $("#hayward").siblings().hide();
      $("#hayward").show();
    }
  });
});
