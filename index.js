const heading = document.querySelector("h1");

const btnContainer = document.getElementById("button-container");
const btnNumSquares = document.createElement("button");
const btnClear = document.createElement("button");

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

btnClear.textContent = "Clear Sketch";
btnClear.classList.add("btn-clear");
btnContainer.appendChild(btnClear);

btnClear.addEventListener("click", function(){
    const square = document.querySelectorAll(".grid-square");
    square.forEach(function(square){
        square.style.backgroundColor = "white";
    })

})

const gridContainer = document.getElementById("grid-container");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;           
}

function createGrid(gridSize){
    gridContainer.innerHTML = "";
    const squareSizePercentage = 100 / gridSize;
    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add("grid-square")
        square.style.flexBasis = `${squareSizePercentage}%`;
        square.style.height = `${squareSizePercentage}%`;
        
        square.style.backgroundColor = "white";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor(); 
        });
        gridContainer.appendChild(square);
    }
}

createGrid(16);
