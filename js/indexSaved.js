
$(document).ready(function() {   
  console.log("ready!");

  var buttonsContainer = $('#buttons-container');
  var numArr = [];
  var firstNum = 0;
  var secondNum = 0;
  var operator = "";
  var strArgument = "";
  var result = 0;

  buttonsContainer.on("click", function(event) {
    let $target = $(event.target)
    let $targetInnerText = $target.context.innerText


    if ($targetInnerText === "C") { //TO CLEAR
      $('#clear').click(function() {
        location.reload();
      });

    } else { //TO START THE CALCULATION
      //the screen display

      $("#screen").append($targetInnerText);
      numArr.push($targetInnerText);
        console.log("numArr =", numArr);

      //if it's an operator next then trigger the next number to be absorbed
      if ($targetInnerText === "+" || $targetInnerText === "-" || $targetInnerText === "÷" || $targetInnerText === "x") {

        operator = numArr.pop()
        firstNum = parseInt(numArr.join(""))
        console.log("firstNum = ", firstNum);
        console.log("operator = ", operator);
        numArr = [];
        numArr.push($targetInnerText);
        numArr = [];
      }

      //if you click "=" then do things
      //screen display
      if ($targetInnerText === "=") {
        $("#screen").empty();
        //update the operator
        if (operator === "÷") {
          operator = "/"
        } else if (operator === "x") {
          operator = "*"
        } else if (operator === "+") {
          operator = "+"
        } else {
          operator = "-"
        }

        secondNum = parseInt(numArr.join(""))
        console.log("secondNum = ", secondNum);
        strArgument = firstNum + operator + secondNum;

        result = eval(strArgument);

        if (result == "Infinity") {
          $("#screen").append("ERROR");
          console.log("result =", result);
        } else {
          $("#screen").append(result);
          console.log("result =", result);
        }

        numArr = [];
        firstNum = result;
        secondNum = 0;
        operator = "";
        strArgument = "";
        newOp = "";



      }


    }
  })


       
}); //close on document ready
