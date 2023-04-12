function run() {
    let theName = document.querySelector('#name');
    let theEmail = document.querySelector('#email');
    let theSdt = document.querySelector('#sdt');

    // name

    let mangTen = theName.value.trim().split(' ');
    let mangTen2 = mangTen.filter(function (value) {
        if (value.length == 0) {
            return false;
        } else {
            return true;
        }
    });


    if (theName.value.length == 0) {
        document.querySelector('#error_name').innerHTML = 'Mời nhập họ tên!';
    } else if (mangTen2.length < 2 || mangTen.length != mangTen2.length) {
        document.querySelector('#error_name').innerHTML = 'Chưa nhập đúng định dạng!';
    } else {
        document.querySelector('#error_name').innerHTML = '';
    }



    // email

    function kiemTraEmail(giaTri) {
        let k = 0;
        if (giaTri[0] == '@' || giaTri[giaTri.length - 1] == '@') {
            return false;
        } else {
            for (let i = 1; i <= giaTri.length - 2; i++) {
                if (giaTri[i] == '@') {
                    k++;
                }
            }
        }
        if (k == 1) {
            return true;
        } else {
            return false;
        }
    }

    if (kiemTraEmail(theEmail.value)) {
        document.querySelector('#error_email').innerHTML = '';
    } else if (theEmail.value.length == 0) {
        document.querySelector('#error_email').innerHTML = 'Mời bạn nhập email!';
    } else {
        document.querySelector('#error_email').innerHTML = 'Chưa đúng định dạng email!';
    }


    // sđt
    function kiemTraSdt(giaTri) {
        if (giaTri[0] == '0' && giaTri[1] != 0 && (giaTri.length == 10 || giaTri.length == 11)) {
            return true;
        } else {
            return false;
        }
    }


    if (!isNaN(theSdt.value) && kiemTraSdt(theSdt.value)) {
        document.querySelector('#error_sdt').innerHTML = '';
    } else if (theSdt.value.length == 0) {
        document.querySelector('#error_sdt').innerHTML = 'Mời nhập số đt!';
    } else {
        document.querySelector('#error_sdt').innerHTML = 'Nhập không đúng định dạng sdt!';
    }


    // chọn
    let mangChon = document.querySelectorAll('[name="chon"]');

    let index = 0;

    for (const giaTri of mangChon) {
        if (giaTri.checked == true) {
            index++;
        }
    }

    if (index == 0) {
        document.querySelector('#error_chon').innerHTML = 'Mời bạn chọn!';
    } else {
        document.querySelector('#error_chon').innerHTML = '';
    }

    // tien
}


// thẻ input select không dùng được innerHTML mà phải dùng value
function chay() {
    let theMon = document.querySelector('#khoaHoc');
    document.querySelector('#hocPhi').value = theMon.value;
}
