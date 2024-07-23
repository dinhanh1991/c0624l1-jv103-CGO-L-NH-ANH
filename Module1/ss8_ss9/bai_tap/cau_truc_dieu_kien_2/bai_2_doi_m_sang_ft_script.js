function bai2(){
    let meter=prompt('nhập nhệt độ dài có đơn vị là m');
    if(meter<0){
        alert("số nhập vào phải lớn hơn 0");
    }else {
        let feet =meter*3.2808;
        document.getElementById('check1').innerText = meter +"m = "+feet +"ft";
    }
}