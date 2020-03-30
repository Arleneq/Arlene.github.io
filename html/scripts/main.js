// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'hello world';

// document.querySelector('html').onclick = function (){
//     alert("好痛");
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if (mysrc === 'image/huachenyu1.jpg') {
        myImage.setAttribute('src','image/huachenyu2.jpg');
    } else {
        myImage.setAttribute('src','image/huachenyu1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt ('请输入你的名字：');
//     localStorage.setItem('name',myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla 酷毙了，'+storedName;
}

// myButton.onclick = function(){
//     setUserName();
// }

let myName = document.querySelector('input');