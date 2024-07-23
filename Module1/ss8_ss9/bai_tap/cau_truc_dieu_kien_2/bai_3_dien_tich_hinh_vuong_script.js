function bai3 (){
    let width = prompt('nhập chiều dài cạnh');
    if (width>0) {
        let area = width * width;
        document.getElementById('check3').innerText = "diện tích hình vuông là" + area + " m2";
    } else {
            alert("nhập lại chiều dài cạnh, chiều dài phải lớn hơn không")
    }
}