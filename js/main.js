const grid = document.getElementById("grid");
const selection = document.getElementById("selection");
const btn = document.getElementById("btn-play");
let point = 0;

function cellDifficulty(difficult, content) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(difficult);
    squareDiv.innerText = content;
    grid.appendChild(squareDiv);
    squareDiv.addEventListener("click", function() {
        if (bombNumbers.includes(content)) {
            squareDiv.classList.add("bomb");
            alert(`Hai perso, hai totalizzato un totale di ${point}`)
        } else {
            squareDiv.classList.add("clicked");
            point += 1;
        }
    });
}

let bombNumbers = [];
function bomb(cell) {
    while (bombNumbers.length < 16) {
        let randomNum = Math.floor(Math.random() * cell) + 1;
        if (!bombNumbers.includes(randomNum)) {
            bombNumbers.push(randomNum);
        }
    }
    console.log(bombNumbers);        
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
        bomb(81);
    } else {
        for (let i = 1; i <= 49; i++) {
            cellDifficulty("square-hard", i);
        }
        bomb(49);
    }
})