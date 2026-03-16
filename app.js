let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(function () {
        h1.style.color = color;

        if (nextColorChange) {
            nextColorChange();
        }
    }, delay);
}

changeColor("red", 1000, function () {
    changeColor("orange", 1000, function () {
        changeColor("green", 1000, function () {
            changeColor("blue", 1000);
        });
    });
});

// callback nesting -> callback hell