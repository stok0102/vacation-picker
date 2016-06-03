//Front End Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var passport = $("#passport").val();
    var recInput = parseInt($("#rec").val());
    var reasonInput = parseInt($("#reason").val());
    var budgetInput = parseInt($("#budget").val());
    var foodInput = parseInt($("#food").val());
    var score = recInput + budgetInput + reasonInput + foodInput
    var userName = $("#userName").val();
    $("#nameSpan").text(userName);
    $(".response").show();
    if (passport === "Yes") {
      if (score < 1) {
        $("#patagonia").siblings().hide();
        $("#patagonia").fadeIn();
      } else if (score >= 1) {
        $("#morocco").siblings().hide();
        $("#morocco").fadeIn();
      } else {
        alert("You missed a box");
      }
    } else {
      $("#hayward").siblings().hide();
      $("#hayward").fadeIn();
    }
  });
});
