const button = document.querySelector("button")

let num_squares

button.addEventListener("click", (event) => {
    num_squares = prompt("How many squares per side do you want?")
    removeGrid()
    addGrid(num_squares);
})


let addGrid = function(num_squares) {
    const container = document.getElementById("container");
    for(let j=0; j<num_squares; j++){
        const inner = document.createElement("inner");
        for(let i=0; i<num_squares; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("click", function (event) {
                event.target.classList.toggle("pressed");
            });
            inner.appendChild(box);
        }
        container.appendChild(inner);
    }
}

let removeGrid = function() {
    const container = document.getElementById("container");
    container.innerHTML = "";
}

