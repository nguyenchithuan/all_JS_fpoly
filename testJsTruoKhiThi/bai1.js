let mangThe = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png"];

let theAnh = document.querySelector('img');

let index = 0;

let theSpan = document.querySelector('span');

let i = 1;

function next() {
    if(index == mangThe.length - 1) {
        index = 0
        i = 1;
    } else {
        index++;
        i++;
    }

    theAnh.src = mangThe[index];
    theSpan.innerHTML = i + '/5';
}

function back() {
    if(index == 0) {
        index = mangThe.length - 1
        i = 5;
    } else {
        index--;
        i--;
    }

    theAnh.src = mangThe[index];
    theSpan.innerHTML = i + '/5';
}

let a = 0;

function start() {
    a = setInterval(function() {
        next();
    }, 1000);
}

function stop() {
    clearInterval(a);
}
