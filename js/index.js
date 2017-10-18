$(document).ready(function() { 
  console.log("ready!");

  //GLOBAL VARIABLES
  var buttonsContainer = $("#buttons-container")
  var firstNumArr = [];
  var firstNum = "";
  // var secondNumArr = [];
  // var secondNum = "";
  var operator = "";
  var strArgument = "";
  var result = "";

  //THE EVENT LISTENER


  buttonsContainer.on("click", function(event) {
    //declare evet.target text
    var $targetInnerText = $(event.target).context.innerText

      //record first numbers being pushed
      firstNumArr.push($targetInnerText);
      $("#screen").append($targetInnerText);
      console.log("firstNumArr = ", firstNumArr);

      if ($targetInnerText === "÷") {
        firstNumArr.pop("")
        firstNumArr.push("/");
      } else if ($targetInnerText === "x") {
        firstNumArr.pop("")
        firstNumArr.push("*");
      }

      if ($targetInnerText === "=") {
        firstNumArr.pop()
        firstNum = firstNumArr.join("")
        console.log(firstNum);
        $("#screen").empty();

        result = eval(firstNum)
        $("#screen").append(result);
        console.log(result);

        firstNumArr.splice(0,5,result);
        console.log("new firstNumArr = ", firstNumArr);
      }


  }) //end of event listener for buttons

}) //end of document.ready
