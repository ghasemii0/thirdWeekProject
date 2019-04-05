// function fizzBuzz(userInput){
//   var userNumber = "";
//   for (var i = 0; i <= userInput; i++) {
//     var num = i;
//     newNum=num.toString();
//     //console.log(newNum[1]);
//     if(newNum[0] === "3" || newNum[1] === "3" || newNum[2] === "3"){
//       console.log("hi");
//       userNumber += ("I'm sorry, Dave. I'm afraid I can't do that.");
//     }else if(newNum[0] === "2" || newNum[1] === "2" || newNum[2] === "2"){
//       userNumber += ("Boop");
//     }else if(newNum[0] === "1" || newNum[1] === "1" || newNum[2] === "1"){
//       userNumber += ("Beep");
//     }else {
//       userNumber += i ;
//     }
//
//   }
//   return userNumber;
// }



function fizzBuzz(userInput){
  var userNumber = "";
  for (var i = 0; i <= userInput; i++) {
    var num = i;
    newNum=num.toString();
    for (var j = 0; j < newNum.length; j++) {
    if(newNum[j] === "3"){
      console.log("hi");
      userNumber += ("I'm sorry, Dave. I'm afraid I can't do that.");
    }else if(newNum[j] === "2"){
      userNumber += ("Boop");
    }else if(newNum[j] === "1"){
      userNumber += ("Beep");
    }else {
      userNumber += i ;
      }
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

    $("#result").append(finalResult);
  });
});
