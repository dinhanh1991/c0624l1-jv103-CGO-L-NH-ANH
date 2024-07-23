let s =document.sumavg;
sumavg.done.onclick = function () {
    if (sumavg.physic.value*1 <0 || sumavg.physic.value*1 > 10 || sumavg.chemistry.value*1 < 0 || sumavg.chemistry.value*1 > 10 || sumavg.biology.value*1 < 0 || sumavg.biology.value *1> 10) {
        alert('Điểm số không hợp lệ vui lòng nhập lại điểm số phải lớn hơn 0 và nhỏ hơn 10 ');
    } else {
        sumavg.sum.value=sumavg.physic.value*1 + sumavg.chemistry.value*1 + sumavg.biology.value*1 ;
        sumavg.avg.value=sumavg.sum.value/3;
        // return(sumavg.avg.value);
        // return(sumavg.sum.value);
    }
}
let a=document.temp;
temp.convert.onclick=function() {
    temp.df.value=9*temp.dc.value/5+32;
    return(temp.df.value);
}
let b =document.areac;
areac.done.onclick=function (){
    if (areac.radius.value<0){
        alert('nhập lại bán kính bán kính phải lớn hơn 0')
    }else
    {
        const pi=3.14159;
        areac.result.value=areac.radius.value*areac.radius.value*pi;
    }
    return( areac.result.value)
}
let c =document.pri;
pri.action.onclick=function (){
    if (pri.radius2.value<0){
        alert('nhập lại bán kính bán kính phải lớn hơn 0')
    }else
    {
        const pi=3.14159;
        pri.result.value=2*pri.radius2.value*pi;
    }
    return(pri.result.value)
}
