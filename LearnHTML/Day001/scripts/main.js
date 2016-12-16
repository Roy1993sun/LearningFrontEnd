/**
 * Created by Roy on 2016/12/13.
 */
/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = "hello world!";

var iceCream = 'cho';
function multiply(num1,num2) {
    return num1 * num2;
}

document.querySelector('html').onclick = function () {
    alert("stop it");
};*/
var myImg = document.querySelector('img');
myImg.onclick = function () {
    var mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/mozilla-firefox.jpg') {
        myImg.setAttribute('src', 'images/How_To_Write_CSS_001.png');
    } else {
        myImg.setAttribute('src', 'images/mozilla-firefox.jpg');
    }
};


var muBtn = document.querySelector('button'); // 获得button的对象
var myHeading = document.querySelector('h1'); // 获得H1的对象

if ( !localStorage.getItem('name')){
    setUserName()
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'It\'s so coool , ' + storedName;
}

/**
 * 改变H1的函数
 */
function setUserName() {
    // todo
    var myName = prompt("please enter your name");
    localStorage.setItem('name', myName); // localStorage  将数据存储在浏览器里以供后续调用
    myHeading.innerHTML = 'It\'s so coool ,' + myName;
}
muBtn.onclick = function () {
    setUserName();
};
