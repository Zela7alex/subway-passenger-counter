 // Defining the count element 
 let countEl = document.getElementById("count-el");

//Checking to see if it's right on the console
console.log(countEl)

//Must start it at zero
let count = 0;
console.log(count);


// Creating the function to make the "count" increment by 1 with each click.

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

let saveEl = document.getElementById("save")


function save() {
    let countSave = count + " - ";
    saveEl.textContent += countSave;
    countEl.textContent = 0;
    count = 0;
}





