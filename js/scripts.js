function fizzBuzz(userInput){
  var outPut = "";
  for (var i = 0; i <= userInput; i++) {
    var num = i;
    var newNum = num.toString();
    //console.log(typeof newNum);
    var newNum1 = num.split(" ");
    console.log(newNum1);

    // if(eachNum[0]==="3" || eachNum[1] === "3"){
    //   outPut += ("I'm sorry, Dave. I'm afraid I can't do that.");
    // }
  }
  return outPut;
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
