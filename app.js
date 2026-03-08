// creating the para
let newp = document.createElement("p");
newp.innerText = "hey im red";
document.querySelector('body').append(newp);
newp.classList.add('red');

//creating the heading 3
let newh3 = document.createElement('h3');
newh3.innerText = "hey in new 3 elelent!!";
document.querySelector('body').appendChild(newh3);
newh3.classList.add('blue');

//creating the div and the h3 and para2

let newdiv = document.createElement('div');
let h1 = document.createElement('h3');
let para2 = document.createElement('p');
 
// adding the text into the element 

h1.innerText = "hey im am H3 tag";
para2.innerText = "hey im the second para inside the div";

//appending the elements into the div

newdiv.append(h1);
newdiv.append(para2);

//creating the class to add the style in the css
newdiv.classList.add("box");

//we are placing in the page by this command
document.querySelector("body").prepend(newdiv);