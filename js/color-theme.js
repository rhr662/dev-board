function getRandomColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);

}

document.getElementById("theme-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
})