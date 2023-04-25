const container = document.querySelector("#container");
let color = "black";
let squares = 0;
let clicked = false;


squareRender = document.querySelector("#render");
squareRender.addEventListener("click", () => {
    squares = document.querySelector("#squares").value;
    if (squares >= 0 && squares <= 100) {
        render(squares);
    } else {
        alert("Number of squares can't exceed 100!");
    }
});

colorSelect = document.querySelector("#color");
colorSelect.addEventListener("input", (event) => {
    color = event.target.value;
})

container.addEventListener("dragstart", (event) =>  event.preventDefault());
container.addEventListener("mousedown", () => clicked = true);
container.addEventListener("mouseup", () => clicked = false);

function draw(event, color) {
    if (clicked || event.type === "mousedown") {
        event.target.style.backgroundColor = color;
    }
}

function render(squares) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < squares; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle("row");
        for (let j = 0; j < squares; j++) {
            let colDiv = document.createElement("div");
            colDiv.classList.toggle("col");
            colDiv.addEventListener("mousedown", (event) => draw(event, color));
            colDiv.addEventListener("mouseover", (event) => draw(event, color));
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
}