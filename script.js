// biến lưu giá trị các nút  
let btns = document.querySelectorAll('button')
// biến lưu kết quả in ra màn hình 
let output = document.getElementById("screen_cpt")
// khai báo biến lưu trữ số nhập 
let kqNhap = "";
// let arr = Array.from(btns);
btns.forEach(item => {
    item.addEventListener('click', e => {
        // gán giá trị khi nhấn vào biến input
        let input = e.target.value;
        // điều kiện khi nhấn vào dấu  
        if (input === "=") {
            // phép tính 2 chuỗi nhập
            kqNhap = eval(kqNhap)
            // in ra kết quả
            output.innerHTML = kqNhap;
        }
        // điều kiện khi nhấn vào nút AC 
        else if (input === "AC") {
            // reset chuỗi nhập về empty
            kqNhap = "";
            //  in ra chuỗi reset
            output.innerHTML = kqNhap;
        }
        // điều kiện khi nhấn vào nút del  
        else if (input === "Del") {
            // chuyển giá trị nhập thành chuỗi và cắt phần tử đứng sau 
            kqNhap = kqNhap.toString().slice(0, -1);
            // in ra kết quả 
            output.innerHTML = kqNhap;
        } else {
            // i ra chuỗi khi nhấn vào các nút khác 
            kqNhap = kqNhap + input;
            // in ra kết quả 
            output.innerHTML = kqNhap
        }
    })

})

