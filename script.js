 // Defining the count element 
 // let countEl = document.getElementById("count-el");

//Checking to see if it's right on the console
const incBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('save')



//Must start it at zero
let count = 0;
console.log(count);


// Creating the function to make the "count" increment by 1 with each click.
incBtn.addEventListener('click', () =>{
    increment();
});

saveBtn.addEventListener('click', ()=>{
    save()});


function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);

}



function save() {
    let countSave = count + " - ";
    saveEl.textContent += countSave;
    countEl.textContent = count;
    count = 0;
}





