function bai5 (){
    let length = prompt('nhập chiều dài');
    let height = prompt("nhập chiều cao");
    if (length>0&&height>0) {
        let area =0.5* height * length;
        document.getElementById('check5').innerText = "diện tích tam giác vuông là" + area + " m2";
    } else {
        alert("nhập lại chiều dài và chiều cao các kích thước phải lớn hơn không")
    }
}