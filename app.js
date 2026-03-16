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


function savetoDB(data,succes,failure){
    let inernetspeed = Math.floor(Math.random() * 10) + 1;
    if(inernetspeed > 4){
        succes();
    }else{
        failure();
    }
}

savetoDB(
    "apna college",() =>{
        console.log("sucess: your data was saved");
        savetoDB(
            "hello world",() =>{
                console.log("sucess2: your data2 was saved");
                savetoDB(
                    "shivu",() =>{
                        console.log("sucess3: your data3 was saved");
                    },() =>{
                    console.log("failed3: weak connection!");
                    }
                );
            },
            () =>{
                console.log("failed2: weak connection!");
            }
        );
    },
    () =>{
        console.log("failed1: weak connection!");
    }
);