

















// function fizzBuzz(userInput){
//   var userNumber = "";
//   var num = "";
//
//   for (var i = 0; i <= userInput; i++) {
//      num += i;
//     // }else if(newNum[0] === "2" || newNum[1] === "2" || newNum[2] === "2"){
//     //   userNumber += ("Boop<br>");
//     // }else if(newNum[0] === "1" || newNum[1] === "1" || newNum[2] === "1"){
//     //   userNumber += ("Beep<br>");
//     // }else {
//     //   userNumber += i + "<br>";
//     // }
//   }
//   var newNum=num.split("");
//   console.log(newNum);
//   newNum.forEach(function(n) {
//     if([3].includes(newNum)){
//       userNumber += ("I'm sorry, Dave. I'm afraid I can't do that.<br>");
// }
//   return userNumber;
// }
//
// }


function fizzBuzz(userInput){
  var userNumber = "";
  for (var i = 0; i <= userInput; i++) {
    var num = i;
    newNum=num.toString();
    //console.log(newNum[1]);
    if(newNum[0] === "3" || newNum[1] === "3" || newNum[2] === "3"|| newNum[3] === "3" || newNum[4] === "3" || newNum[5] === "3"){
      userNumber += ("I'm sorry, Dave. I'm afraid I can't do that.,  ");
    }else if(newNum[0] === "2" || newNum[1] === "2" || newNum[2] === "2"|| newNum[3] === "2" || newNum[4] === "2" || newNum[5] === "2"){
      userNumber += ("Boop!,  ");
    }else if(newNum[0] === "1" || newNum[1] === "1" || newNum[2] === "1"|| newNum[3] === "1" || newNum[4] === "1" || newNum[5] === "1"){
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

    $("#result").text(finalResult);
  });
});
