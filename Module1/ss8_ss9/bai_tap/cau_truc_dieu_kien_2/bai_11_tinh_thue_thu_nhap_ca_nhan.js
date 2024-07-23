function bai11(){
    let income= prompt("nhập tổng thu nhập");
    let ptax ;
    if (income<5e6)
    {
       ptax = income*5/100;
    }else if (income<1e7)
    {
        ptax = income*10/100-0.25e6;
    }else if (income<1.8e7)
    {
        ptax = income*15/100-0.75e6;
    }else if (income<3.2e7)
    {
        ptax = income*20/100-1.65e6;
    }else if (income<5.2e7)
    {
        ptax = income*25/100-3.25e6;
    }else if (income<1e7)
    {
        ptax = income*30/100-5.85e6;
    }else
    {
        ptax = income*35/100-9.85e6;
    }
    document.getElementById("check11").innerText= "số tiền thuế thu nhập cá nhân phải đóng là "+ptax
}