// My code
const testVar = "hi"

document.querySelector("main#main").remove();// remove the node element

const newHeader = document.createElement("h1"); // assign the new element to h1
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";