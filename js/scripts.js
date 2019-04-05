function fizzBuzz(userInput){
  var userNumber = "";
  for (var i = 0; i <= userInput; i++) {
    var num = i;
    newNum=num.toString();
    if(newNum.includes("3")){
      userNumber += ("  I am sorry, Dave. I'm afraid I can't do that,  ");
    }else if(newNum.includes("2")){
      userNumber += ("Boop!,  ");
    }else if(newNum.includes("1")){
      userNumber += ("Beep!,  ");
    }else {
      userNumber += i + ", " ;
    }
  }
  return userNumber;
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#number").val();
    var finalResult = fizzBuzz(userInput);
    $("#result").show();

    $("#finalOutPut").text(finalResult);
  });
});
