// ! Tính tiền lương nhân viên
/**
 * -INPUT:
 *  + lương 1 ngày: 100000
 *  + số ngày làm
 * - SOLUTION:
 *  + khai báo biến: tongLuong
 *  + tính lương: tongLuong = soNgayLam * 100000
 * -OUTPUT: in ra màn hình tổng lương
 */
document.getElementById('btnCalc1').onclick = function(e){
    e.preventDefault();
    var tongLuong = document.getElementById('inputTotal').value * 100000;
    document.getElementById('txtResult1').classList.add('alert-primary')
    document.getElementById('txtResult1').style.padding = '15px'
    document.getElementById('txtResult1').innerHTML = "Tổng lương: " + tongLuong.toLocaleString() + "VND";
}
// ! Tính giá trị trung bình
/**
 * -INPUT:
 *  + 5 số thực
 * -SOLUTION:
 *  + tổng 5 số / 5
 * -OUTPUT: in ra màn hình giá trị trung bình
 */
document.getElementById('btnCalc2').onclick = function(e){
    e.preventDefault();
    var tong5So = Number(document.getElementById('inputNumber1').value) 
                + Number(document.getElementById('inputNumber2').value) 
                + Number(document.getElementById('inputNumber3').value) 
                + Number(document.getElementById('inputNumber4').value) 
                + Number(document.getElementById('inputNumber5').value);
    var averageValue = tong5So / 5;
    document.getElementById('txtResult2').classList.add('alert-secondary')
    document.getElementById('txtResult2').style.padding = '15px'
    document.getElementById('txtResult2').innerHTML = "Giá trị trung bình: " + averageValue.toFixed(2);
}
// ! Quy đổi tiền
/**
 * -INPUT:
 *  + 1USD = 23500VND
 *  + số USD
 * -SOLUTION:
 *  + tongTienVND = tongTienUSD * 23500
 * -OUTPUT: in ra màn hình tổng tiền VND
 */
document.getElementById('btnCalc3').onclick = function(e){
    e.preventDefault();
    var tongTienVND = document.getElementById('inputMoney').value * 23500;
    document.getElementById('txtResult3').classList.add('alert-danger')
    document.getElementById('txtResult3').style.padding = '15px'
    document.getElementById('txtResult3').innerHTML = "Tổng tiền: " + tongTienVND.toLocaleString() + "VND";
}
// ! Hình chữ nhật
/**
 * -INPUT:
 *  + chiều dài
 *  + chiều rộng
 * -SOLUTION:
 *  + chu vi: (chiều dài + chiều rộng) * 2
 *  + diện tích: chiều dài * chiều rộng
 * -OUTPUT: in ra màn hình kết quả chiều dài và chiều rộng
 */
document.getElementById('btnCalc4').onclick = function(e){
    e.preventDefault();
    var chieuDai = Number(document.getElementById('inputLength').value);
    var chieuRong = Number(document.getElementById('inputWidth').value);
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('txtResult4').classList.add('alert-warning')
    document.getElementById('txtResult4').style.padding = '15px'
    document.getElementById('txtResult4').innerHTML = "Chu vi: " + chuVi + "<br>Diện tích: " + dienTich;
}
// ! Tổng 2 ký số
/**
 * -INPUT: số có 2 chữ số
 * -SOLUTION:
 *  + lấy số hàng đơn vị = number % 10
 *  + lấy số hàng chục = number / 10
 *  + cộng 2 số
 * -OUTPUT: in ra màn hình kết quả
 */
document.getElementById('btnCalc5').onclick = function(e){
    e.preventDefault();
    var soHangDv = document.getElementById('inputTotal2').value % 10;
    var soHangChuc = Math.floor(document.getElementById('inputTotal2').value / 10);
    var tong2KySo = soHangChuc + soHangDv;
    document.getElementById('txtResult5').classList.add('alert-info')
    document.getElementById('txtResult5').style.padding = '15px'
    document.getElementById('txtResult5').innerHTML = "Tổng 2 ký số: " + tong2KySo;
}

