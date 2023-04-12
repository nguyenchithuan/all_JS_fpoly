let mangThe = ["img/1.png", "img/2.png", "img/3.png" ,"img/4.png", "img/5.png"];

let index = 0;
let theAnh = document.querySelector('img');

let i = 1;

function next() {
    if(index == mangThe.length - 1) {
        index = 0;
        i = 1;
    } else {
        index++;
        i++;
    }

    theAnh.src = mangThe[index];
    document.querySelector('span').innerHTML = i + '/5';
}


let a = 0;
function start() {
    a = setInterval(function() {
        next();
    }, 1000);
}

start();


function stop() {
    clearInterval(a);
}