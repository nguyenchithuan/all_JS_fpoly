function run() {
    // indexError để kiểm tra xem các dữ liệu trong form còn lỗi sai hay không
    let indexError = 0;



    let a = document.querySelector('#ma');
    let b = document.querySelector('#name');
    let c = document.querySelector('#email');
    let d = document.querySelector('#quocTich');
    let e = document.querySelector('#ghiChu');
    let f = document.querySelector('#nam');
    let g = document.querySelector('#nu');

    // mảng các thẻ trong checkbox sở thích
    let mangCheckBox = document.getElementsByName('a');


    // kiểm tra từ giá trị trong checkbox sở thích
    let valueSoThich = '';
    let id = 0;
    for (const gt of mangCheckBox) {
        // kiểm tra xem người ta check vào mấy cái
        if(gt.checked == true) {
            id++;
            valueSoThich += gt.value + ' ';
        }
    }

    // id == 0 là không ô nào đc checked
    if(id == 0) {
        document.querySelector('#khungSoThich').style.background = 'yellow';
        document.querySelector('#error_sothich').innerHTML = 'Hãy chọn sở thích!'
        indexError++;
    } else {
        document.querySelector('#khungSoThich').style.background = 'white';
        document.querySelector('#error_sothich').innerHTML = ''
    }



    
    // mã sinh vien
    if (a.value.length > 0) {
        a.style.background = 'white';
        // khi không bị lỗi xóa dòng chữ
        document.querySelector('#error_ma').innerHTML  = ''
    } else {
        a.style.background = 'yellow';
        // khi bị lỗi thì hiển thị dòng chữ
        document.querySelector('#error_ma').innerHTML  = 'Hãy nhập gmail!'
        indexError++;
    }
    


    let mangChuoi = b.value.split(' ');
    // họ và tên
    if (mangChuoi.length > 1) {
        b.style.background = 'white';
        document.querySelector('#error_name').innerHTML = ''
    } else {
        b.style.background = 'yellow';
        document.querySelector('#error_name').innerHTML = 'Nhập đúng họ và tên!'
        indexError++;
    }


    // email
    function kiemTraEmail(chuoi) { // kiểm tra định dạng gmail
        if (chuoi[0] != '@' && chuoi[chuoi.length - 1] != '@') { // kiểm tra kí tự đầu và kí tự cuối phải khác @
            for (let i = 1; i <= chuoi.length - 2; i++) { // kiểm ra từ vị trí thứ 1 đến vị trí tứ leng-2 có ký tự @ không
                if (chuoi[i] == '@') {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    // biến chứ giá trị
    let giatriEmail = "";
    if (c.value.length >= 3 && kiemTraEmail(c.value)) {
        c.style.background = 'white';
        document.querySelector('#error_email').innerHTML = '';
        giatriEmail = c.value;
    } else {
        if (c.value.length == 0) {
            document.querySelector('#error_email').innerHTML = 'Hãy nhập email!'
        } else {
            document.querySelector('#error_email').innerHTML = 'Hãy nhập nhập đúng định dạng email!'
        }
        c.style.background = 'yellow';
        indexError++;
    }

    // Quốc tịch
    if (d.value.length != 0) {
        d.style.background = 'white';
        document.querySelector('#error_quocTich').innerHTML = '';
    } else {
        d.style.background = 'yellow';
        document.querySelector('#error_quocTich').innerHTML = 'Hãy chọn Quốc Tịch!'
        indexError++;
    }

    // ghi chú
    
    if (e.value.length <= 200 && e.value.length > 0) {
        e.style.background = 'white';
        document.querySelector('#error_ghichu').innerHTML = '';
    } else {
        e.style.background = 'yellow';
        indexError++;
        if(e.value.length == 0) {
            document.querySelector('#error_ghichu').innerHTML = 'Hãy nhập ghi chú';
        } else {
            document.querySelector('#error_ghichu').innerHTML = 'Ghi chú phải ít hơn 200 ký tự!';
        }
    }


    let the = 0;
    if (f.checked == true) {
        the = 'Nam';
    } else {
        the = 'Nữ';
    }

    document.querySelector('.ketqua').innerHTML = `<h1 style="color: blue;">Kết quả</h1> <br>
                                                    Mã sinh viên: ${a.value} <br>
                                                    Tên sinh viên: ${b.value} <br>
                                                    Email: ${giatriEmail} <br>
                                                    Giới tính: ${the} <br>
                                                    Sở thích: ${valueSoThich} <br>
                                                    Quốc tịch: ${d.value} <br>
                                                    Ghi chú: ${e.value}`
                                        

                                console.log(indexError);
    if(indexError == 0) {
        a.value = '';
        b.value = '';
        c.value = '';
        d.value = '';
        e.value = '';


        for (const gt of mangCheckBox) {
            gt.checked = false;
        }
    }
}