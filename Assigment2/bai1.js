let index = 0;

let theImg = document.querySelector('img');

let mang = [
    "https://hinhnen123.com/wp-content/uploads/2021/09/Chiem-nguong-666-anh-Messi-4k-tuyen-chon-dep-nhat-the-gioi-28.jpg",
    "https://xmedia.nguoiduatin.vn/2016/10/9/9602/161008204324397-1475983833.jpg",
    "https://sport5.mediacdn.vn/thumb_w/912/2018/10/18/lionel-messi-15398557125641152058576-114-0-1364-2000-crop-15398557184821168286233.jpg",
    "https://www.teahub.io/photos/full/165-1651528_messi-pic-hd-download.jpg",
    "https://c4.wallpaperflare.com/wallpaper/125/157/78/football-lionel-messi-leo-messi-lionel-messi-wallpaper-preview.jpg"
]

function next() {
    if(index == mang.length - 1) {
        index = 0;
    } else {
        index++;
    }
    theImg.src = mang[index];
}

function back() {
    if(index == 0) {
        index = mang.length - 1;
    } else {
        index--;
    }
    theImg.src = mang[index];
}


let a = 0;

function auto() {
    a = setInterval(function(){
        next();
    }, 800);
}

function pause() {
    clearInterval(a);
}