const grid = document.getElementById("grid");
const selection = document.getElementById("selection");
const btn = document.getElementById("btn-play");

function cellDifficulty(difficult, content) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(difficult);
    squareDiv.innerText = content
    grid.appendChild(squareDiv);
    squareDiv.addEventListener("click", function() {
        squareDiv.classList.toggle("clicked");
    });
}

function bomb(cell) {
    if (cell === 100) {
        let numbers = [];
        while (numbers.length < 16) {
            let randomNum = Math.floor(Math.random() * 100) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        console.log(numbers);        
    }
}

btn.addEventListener("click", function() {
    if (selection.value === "Easy") {
        for (let i = 1; i <= 100; i++) {
            cellDifficulty("square-easy", i);
        }
        bomb(100);
    } else if (selection.value === "Medium") {
        for (let i = 1; i <= 81; i++) {
            cellDifficulty("square-medium", i);
        }
    } else {
        for (let i = 1; i <= 49; i++) {
            cellDifficulty("square-hard", i);
        }
    }
})