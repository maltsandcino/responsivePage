// document.querySelector(".check").addEventListener("mouseover", function () {
//     console.log("mousey")
// })

let portfolio = document.querySelector(".portfolio")
function handleScroll() {
    const rect = portfolio.getBoundingClientRect();
    const height = rect.height;
    const viewportWidth = window.innerWidth;

    // Adjust scroll threshold for narrower screens
    let modifier = viewportWidth < 700 ? 3 : 1; // Reduces scroll requirement for small screens

    const scrollProgress = (window.innerHeight - rect.top) * modifier;
    let opacity = scrollProgress / height;

    opacity = Math.min(1, Math.max(0, opacity));

    portfolio.style.opacity = opacity;

    if (opacity === 1) {
        window.removeEventListener("scroll", handleScroll);
    }
}


window.addEventListener("scroll", handleScroll)

const taskDivs = document.querySelectorAll(".projectTop")

//Random Color Generator
function generateColor() {
    let hue = Math.floor(Math.random() * 360)
    let saturation = Math.floor(Math.random() * 50) + 50;  // High saturation (50-100%)
    let lightness = Math.floor(Math.random() * 40) + 40;
return `hsl(${hue}, ${saturation}%, ${lightness}%)`;

}
// // Font color - Redundant now, choosing bg colors that provide enough contrast.
// function getLuminance(hex) {
//     // Convert HEX to RGB
//     let r = parseInt(hex.substring(1, 3), 16) / 255;
//     let g = parseInt(hex.substring(3, 5), 16) / 255;
//     let b = parseInt(hex.substring(5, 7), 16) / 255;

//     // Apply gamma correction
//     r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
//     g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
//     b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

//     // Calculate luminance
//     return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
// }

// function getContrastRatio(bgColor, textColor) {
//     let lum1 = getLuminance(bgColor);
//     let lum2 = getLuminance(textColor);
//     let ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
//     return ratio;
// }

// function ensureReadableText(bgColor) {
//     let blackContrast = getContrastRatio(bgColor, "#000000");
//     let whiteContrast = getContrastRatio(bgColor, "#FFFFFF");

//     // Use the color with higher contrast (WCAG recommends 4.5:1)
//     return blackContrast > whiteContrast ? "#000000" : "#FFFFFF";
// }
// // Start immediately with no interval
// taskDivs.forEach(div => {
//     let bgColor = generateColor(); // Random background color
//     div.style.backgroundColor = bgColor;

// })

let wholeCards = document.querySelectorAll(".projectCard")
// Set interval
let colorInterval = setInterval(() => {taskDivs.forEach(div => {

    let bgColor = generateColor(); // Random background color
    div.style.backgroundColor = bgColor;
 
    
})}, 2000)

//Add event listeners for start and stop
wholeCards.forEach(div => {
    div.addEventListener("mouseenter", stop)
} )

wholeCards.forEach(div => {
    div.addEventListener("mouseleave", start)
} )

//Functions to pause the colors
function stop(){
    clearInterval(colorInterval)
}

function start(){
colorInterval = setInterval(() => {taskDivs.forEach(div => {

    let bgColor = generateColor(); // Random background color
    div.style.backgroundColor = bgColor;

})}, 2000)
}