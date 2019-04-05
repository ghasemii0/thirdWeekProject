function fizzBuzz(userInput){
  var num = "";
  for (var i = 0; i <= userInput; i++) {
    num += (i);
    var eachNum = num.split("");
    console.log(eachNum);
    if(eachNum[0]==="3" || eachNum[1] === "3"){
    num += ("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
  return num;
}





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#number").val();
    var finalResult = fizzBuzz(userInput);
    $("#result").show();
    $("#result").append(finalResult);
  });
});
