function bai4 (){
    let length = prompt('nhập chiều dài');
    let width = prompt("nhập chiều rộng");
    if (width>0&&length>0) {
        let area = width * length;
        document.getElementById('check4').innerText = "diện tích hình chữ nhật là" + area + " m2";
    } else {
        alert("nhập lại chiều dài cạnh, chiều dài phải lớn hơn không")
    }
}