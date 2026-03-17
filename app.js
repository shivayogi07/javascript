// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(function () {
//         h1.style.color = color;

//         if (nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor("red", 1000, function () {
//     changeColor("orange", 1000, function () {
//         changeColor("green", 1000, function () {
//             changeColor("blue", 1000);
//         });
//     });
// });

// callback nesting -> callback hell


// function savetoDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDB(
//     "apna college",
//     () => {
//         console.log("success: your data was saved");

//         savetoDB(
//             "hello world",
//             () => {
//                 console.log("success2: your data2 was saved");

//                 savetoDB(
//                     "shivu",
//                     () => {
//                         console.log("success3: your data3 was saved");
//                     },
//                     () => {
//                         console.log("failed3: weak connection!");
//                     }
//                 );

//             },
//             () => {
//                 console.log("failed2: weak connection!");
//             }
//         );

//     },
//     () => {
//         console.log("failed1: weak connection!");
//     }
// );

// optmising with promise

function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("Success: data saved");
        } else {
            reject("Error: weak connection");
        }
    });
}

saveToDB("Hello")
    .then((result) => {
        console.log("promise was resolved");
    })
    .catch((error) => {
        console.log("error occured and rejected");
    });