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

    if ($targetInnerText === "C") { //TO CLEAR
      $('#clear').click(function() {
        location.reload();
      });

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

        if (result == "Infinity") {
          $("#screen").append("ERROR");
          console.log("ERROR");
        } else {
        $("#screen").append(result);
        console.log(result);
      }


      }

    } //end of for loop
  }) //end of event listener for buttons

}) //end of document.ready
