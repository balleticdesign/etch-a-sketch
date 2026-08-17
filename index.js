const heading = document.querySelector("h1");

const btnContainer = document.getElementById("button-container");
const btnNumSquares = document.createElement("button");

btnNumSquares.textContent = "How many squares?";
btnNumSquares.classList.add("btn-num-squares");
btnContainer.appendChild(btnNumSquares);

btnNumSquares.addEventListener("click", () => {
    let userInput = prompt("Enter a number for your grid size (Maximum 100):");
    let size = parseInt(userInput);
    if (isNaN(size) || size < 1) {
        alert("Please enter a valid number greater than 0!");
    } else if (size > 100) {
        alert("That is too big! The maximum number of squares is 100.");
    } else {
        alert(`Perfect! Here is your canvas!`);
        createGrid(size);
    }
});

const gridContainer = document.getElementById("grid-container");

function createGrid(gridSize){
    gridContainer.innerHTML = "";
    const squareSizePercentage = 100 / gridSize;
    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add("grid-square")
        square.style.flexBasis = `${squareSizePercentage}%`;
        square.style.height = `${squareSizePercentage}%`;
        gridContainer.appendChild(square);
    }
}

createGrid(16);
