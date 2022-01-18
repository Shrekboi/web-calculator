const output = document.querySelector(".outputnum");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const keys = document.querySelectorAll(".btn");

let value = 0;

keys.forEach(keys => {  //this funcion outputs the values of the buttons pressed
    keys.addEventListener("click", () => {
        if (output.innerHTML == 0) {
            output.innerHTML = "";
        }

        if (!keys.getAttribute("data-value")) { //when the equal button is pressed
            return;
        }
        else {
            output.innerHTML += keys.getAttribute("data-value");
            value = keys.getAttribute("data-value")
        }
    })
})

clearButton.onclick = () => output.innerHTML = 0; //clear the output
deleteButton.onclick = () => output.innerHTML = output.innerHTML.slice(0, -1); // delete the last value

function calculate() { //do the actual calculation with eval()
    try {
        output.innerHTML = eval(output.innerHTML);
    }
    catch (err) {  //add a propper input check later
        alert("NOT VALID INPUT");
        output.innerHTML = "";
    }
}


// function operate(operation, num1, num2) {
//     if
// }