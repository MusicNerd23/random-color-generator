// Step 1: Select elements from the page
const button = document.getElementById("color-btn");
const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code");


// Step 2: Create a function that makes random colors
function getRandomColor(){
    const letters = "0123456789ABCDEF"; // hex digits
    let color = "#"
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex]
    }
    return color;
}
// Step 3: Change the color when button is clicked
button.addEventListener("click", function() {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
})
