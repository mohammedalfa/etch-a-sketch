const container = document.querySelector("#container");
let color = "#aaa";
let squares = 50;
let clicked = false;

container.addEventListener("dragstart", (event) =>  event.preventDefault());
container.addEventListener("mousedown", () => clicked = true);
container.addEventListener("mouseup", () => clicked = false);


function draw(event, color) {
    if (clicked || event.type === "mousedown") {
        event.target.style.backgroundColor = color;
    }
}

for (let i = 0; i < squares; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.toggle("row");
    for (let j = 0; j < squares; j++) {
        let colDiv = document.createElement("div");
        colDiv.classList.toggle("col");
        colDiv.style.width = "100%";
        colDiv.style.height = "100%";
        colDiv.addEventListener("mousedown", (event) => draw(event, color));
        colDiv.addEventListener("mouseover", (event) => draw(event, color));
        rowDiv.appendChild(colDiv);
    }
    container.appendChild(rowDiv);
}

