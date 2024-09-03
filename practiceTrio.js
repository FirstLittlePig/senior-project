/*//console.log(window);//shows some possible uses for window in the devTools
//Single element
//console.log(document.getElementById('my-form')); //old
//console.log(document.querySelector("h1")); //the best one if you only want 1 

//Multiple element
//console.log(document.querySelectorAll('.item')); //generally the best one
//console.log(document.getElementsByClassName('item'));//old
//console.log(document.getElementsByTagName('li'));//old

/*const items = document.querySelectorAll('.item');

items.forEach(function(item) {
    console.log(item)
});*/

/*const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';*/

/*const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (function(e) {
    e.preventDefault(),//prevents form submit from reloading the page and stopping the click
//    console.log(e.target)
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
}));*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

//    console.log(nameInput.value);
    if(nameInput.value === "" || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000);     
        } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value + " : " + emailInput.value))

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}