//GLOBAL VARIABLES
var buttonsContainer = $("#buttons-container")
var firstNumArr = [];
var firstNum = "";
var operator = "";
var strArgument = "";
var result = "";
var $screen = $("#screen")


function throwError (res) {
  if (res == "Infinity") {
     $screen.append("ERROR");
    return "error"
  } else {
   $screen.append(res);
  }
}

function clearScreen(){
  location.reload();
}

$(document).ready(function() { 
  console.log("ready!");

  //THE EVENT LISTENER

  buttonsContainer.on("click", function(event) {
    //declare evet.target text
      console.log(event.target);
    var $targetInnerText = $(event.target).context.innerText

    if ($targetInnerText === "C") { //TO CLEAR
        clearScreen()

    } else {

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

        throwError(result)



      }

    } //end of for loop
  }) //end of event listener for buttons

}) //end of document.ready
