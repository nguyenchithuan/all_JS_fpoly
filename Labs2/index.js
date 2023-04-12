// biến
// var, let(nhỏ hơn var), const(hằng số) kiểu dữ liệu trong js
// js các biến có thể tình chỉnh kiểu dữ liệu
// vd: let x = 1, x = 'thuan', x = [1,2,3]


// toán học
// is not a number => true không phải là số
// => false có thể là số
// parseInt chuyển chuỗi thành số nguyên
// parseFloat chuyển chuỗi thành số thực
Math; // object lưu trữ nhưng phuong thức xử lý về toán học
// Math pow, sqrt, abs




// chuỗi
// () thể hiện cho hàm
// [] thể hiện cho mảng
// {} thể hiện phạm vi
let age = 10;
let name = 'thuan';
let str = '';
str = "";
str = ``; //string template

str = `Xin chào ${name}, tuổi của bạn: ${age}`;




// action javasript string reference
// includes()  : kiểm tra 1 chuỗi có nằm trong chuỗi khác hay không => true/false
// indexof()   : kiểm tra 1 chuỗi có nằm trong chuỗi khác hay không => trả về giá trị số 
// replace()   : thay thế một chuỗi thành một chuỗi khác
// replaceAll(): thay thế nhiều chuỗi thành một chuỗi khác
// split()     : cắt chuỗi dựa theo 1 ký tự nào đó và chuổi thành mảng
// substring() : cắt 1 đoạn từ chuỗi gốc dựa vào số index
// trim()      : cắt tỉa các dấu cách thừ 2 bên


// mảng là tập hợp các phần tử
// các phần tử trong mảng có thể có nhiều kiểu dữ liệu khác nhau
// vd: let arr = [2, false, 'fpt', [1,2,3], object]

/* 
 - javasript array reference // có làm thay đổi giá trị gốc
    1. toString()   : hiện thị mảng ngăn cách nhau bằng dấu ','.
    2. join()       : hiện thị mảng ngăn cách nhau băng dấu tùy ý mình đặt trong ()  | VD: console.log(ten.join(' - ')).
    3. pop()        : xóa phần tử ở cuối mảng và trả về phần tử đã xóa. 
    4. push()       : thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
    5. shift()      : xóa phần tử ở đầu mảng và trả về phần tử đã xóa.
    6. unshift()    : thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
    10. delete      : loại bỏ 1 phần tử dựa vào index, biến phần tử trở thành undefined // tốt nhất không dùng thằng delete nếu không hiểu sâu
    7. TH1: Xóa:  splice(vị trí con trỏ, số lượng cần xóa): để xóa phần tử trong mảng  
       TH2: Chèn: splice(vị trí con trỏ, số lượn cần xóa, giá trị chèn): để chèn phần tử vào trong mang
    9. concat()     : để nối 2 mang lại với nhau
    
    

    // đề có tham số chuyền  vào là một hàm (học qua hàm và đối tượng để hiểu rõ hơn)
    10. forEach()   : duyệt qua từng phần tử của mảng
    11. every()     : kiển tra tất cả phần tử trong mảng thỏa mãn một điều kiện nào đó (trả về giá trị true/false)
    12. some()      : kiểu tra chỉ cần một phần tử trong mảng thỏa mãn một điều kiện nào đó (trả về giá trị true/false)
    13. find()      : tìm kiếm phần tử trong mảng theo điều kiện nào đó nếu thỏa mãn (trả về một phần tử đầu tiên)
    14. filter()    : tìm kiếm các phần tử trong mảng theo điều kiện nào đó nếu thỏa mãn (trả về tất các các phần tử)
    15. map()       : tạo ra 1 mảng mới dựa trên các phần tử được biến đổi của mảng gốc
    20. sort()      : sắp xếp các phần tử trong mảng, sắp xếp chuỗi
    
    17. includes()  : kiểm tra một phần tử có lằm trong mảng hay không (trả về giá trị true/false)
    18. indexOf()   : kiểm tra một phần tử có lằm trong mảng hay không (trả về giá trị số);
    19. reverse()   : đảo ngược phần tử trong mảng
    
    

*/

let arr1 = [1,2,10,4,9,6,7];
let gt;

// sắp xếp theo phần tử số
let arr2 = arr1.sort(function(a, b) {
   return a - b;
}) 

console.log(arr2);
