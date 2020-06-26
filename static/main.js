document.addEventListener("DOMContentLoaded", () => {
    const sketchPad = document.querySelector("#sketchpad");
    const clear_button = document.querySelector("#clear-sketchpad");

    function clearSketchPad(event) {
        let newSquareSize = null;

        while (sketchPad.firstChild) {
            sketchPad.removeChild(sketchPad.lastChild);
        }

        do {
            newSquareSize = parseInt(prompt("Enter new square size for sketchpad (150 max)"))
        } while ((isNaN(newSquareSize))||(newSquareSize > 150)||(newSquareSize < 0))

        console.log(newSquareSize)
        sketchPad.style.gridTemplateColumns = `repeat(${newSquareSize}, 1fr)`;
        sketchPad.style.gridTemplateRows = `repeat(${newSquareSize}, 1fr)`;

        generateSketchPixels(newSquareSize);
    }

    function generateSketchPixels(squareSize) {
        for (let y = 0; y < squareSize; y++) {
            for (let x = 0; x < squareSize; x++) {
                const pixel = document.createElement("div");
                pixel.classList.add("pixel")
                pixel.addEventListener("mouseover", event => {
                    event.target.classList.add("colored-in")
                }) 
                sketchPad.appendChild(pixel);
            }

        }
    }
    generateSketchPixels(16);

    clear_button.addEventListener("click", clearSketchPad) 
})