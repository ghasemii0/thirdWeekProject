function fizzBuzz(userInput){
  for (var i = 0; i <= userInput; i++) {
    console.log(i);
  }
  return i;
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
