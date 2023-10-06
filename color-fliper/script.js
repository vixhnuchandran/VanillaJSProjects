function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("flipper").style.backgroundColor = color;

    // Update RGB value
    document.getElementById("rgb-value").textContent = `${red}, ${green}, ${blue}`;

    // Convert RGB to hex and update Hex value
    let hex = rgbToHex(red, green, blue);
    document.getElementById("hex-value").textContent = hex;

    // Get color name and update Color Name value
    let colorName = getColorName(color);
    document.getElementById("color-name").textContent = colorName;
}

// Function to convert RGB to hex
function rgbToHex(red, green, blue) {
    let rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1).toUpperCase();
}

