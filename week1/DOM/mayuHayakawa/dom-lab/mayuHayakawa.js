// Q1
document.getElementById('my-element').style.backgroundColor = 'gray';


// Q2
let btn = document.getElementById('myButton');
btn.addEventListener('click', () => {
    btn.style.color = 'white';
});

let btns = document.getElementsByTagName('button');
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'pink';
    });
};


// Q3
let myList = document.getElementById('myList');
let addBtn = document.getElementById('addButton');

addBtn.addEventListener('click', () => {
    let listnumber = myList.childElementCount; //count number of list
    let item = document.createElement('li'); //<li></li>
    item.innerHTML = `Item ${listnumber + 1}  `; //<li>Item n</li>
    myList.appendChild(item);
});


// Q4
let submitBtn = document.getElementById('myForm');
let myInput = document.getElementById('myInput');
let myOutput = document.getElementById('myOutput');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevent submit event
    myOutput.innerHTML = `${myInput.value}`;
});


// Q5
let myClass = document.getElementsByClassName('my-class');
myClass[0].innerHTML = 'Done :)'; //it needs to specify an index because 'myClass' is object HTMLCollection


// Q6
let flashBtn = document.getElementById('flashButton');
let flashList = document.getElementById('flashList');

flashBtn.addEventListener('click', () => {
    let elm = document.createElement('p');
    elm.innerHTML = '(◎_◎) But I have to wake up...!';
    flashList.appendChild(elm);
    setTimeout(wakeUp, 3000);
})

function wakeUp() {
    flashList.removeChild(flashList.firstElementChild);
}