function run() {
    let theName = document.querySelector('#name');
    let theEmail = document.querySelector('#email');
    let theSdt = document.querySelector('#sdt');

    // ten

    let mangTen1 = theName.value.trim().split(' ');

    let mangTen2 = mangTen1.filter(function(value) {
        if(value.length == 0) {
            return false;
        } else {
            return true;
        }
    });

    if(theName.value.length == 0) {
        document.querySelector('#error_name').innerHTML = 'Xin mời nhập tên!';
    } else if(mangTen1.length != mangTen2.length || mangTen2.length < 2) {
        document.querySelector('#error_name').innerHTML = 'Không đúng định dạng tên!';
    } else {
        document.querySelector('#error_name').innerHTML = '';
    }


    // email

    function kiemTraEmail(giaTri) {
        let k = 0;
        if(giaTri[0] == '@' || giaTri[giaTri.length - 1] == '@') {
            return false;
        } else {
            for (let i = 1; i < giaTri.length - 1; i++) {
                if(giaTri[i] == '@') {
                    k++;
                }
            }
        }

        if(k == 1) {
            return true;
        } else {
            return false;
        }

    }

    if(kiemTraEmail(theEmail.value)) {
        document.querySelector('#error_email').innerHTML = '';
    } else if(theEmail.value.length == 0) {
        document.querySelector('#error_email').innerHTML = 'Xin mời nhập email!';
    } else {
        document.querySelector('#error_email').innerHTML = 'Không đúng định dạng email!';
    }

    // sdt

    function kiemTraSdt(giaTri) {
        if(giaTri[0] == '0' && giaTri[1] != 0 && giaTri.length == 10) {
            return true;
        } else {
            return false;
        }
    }

    if(!isNaN(theSdt.value) && kiemTraSdt(theSdt.value)) {
        document.querySelector('#error_sdt').innerHTML = '';
    } else if(theSdt.value.length == 0) {
        document.querySelector('#error_sdt').innerHTML = 'Xin mời nhập sdt!';
    } else {
        document.querySelector('#error_sdt').innerHTML = 'Không đúng định dạng sdt!';
    }

    // chon

    let mangThe = document.querySelectorAll('[name="chung"]');

    let index = 0;

    for (const giaTri of mangThe) {
        if(giaTri.checked == true) {
            index++;
        }
    }

    if(index == 0) {
        document.querySelector('#error_chung').innerHTML = 'Mời bạn chon!';
    } else {
        document.querySelector('#error_chung').innerHTML = '';
    }
}

function chay() {
    document.querySelector('#hocPhi').value = document.querySelector('#luaChon').value;
}