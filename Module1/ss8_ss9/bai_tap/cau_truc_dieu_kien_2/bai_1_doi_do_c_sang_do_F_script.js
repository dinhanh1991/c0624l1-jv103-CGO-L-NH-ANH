function bai1() {
    let templeC = prompt('nhập nhệt độ c')
    let templeF = templeC * 1.8 + 32.0;
    document.getElementById('check1').innerText = templeC + "độ C= " + templeF + "độ F";
}