// let smallimg = document.getElementsByClassName("oldImg");


// for(let i = 0; i< smallimg.length; i++){
//     console.log(smallimg[i]);
// }


// let para = document.querySelector("p");

// console.dir(para);

// para.innerText = "hey spider man im back";



// confirm("message");

// let result = confirm("Do you want to delete this file?");

// console.log(result);

let deleteItem = confirm("Are you sure you want to delete this item?");

if (deleteItem) {
    console.log("Item deleted");
} else {
    console.log("Deletion cancelled");
}