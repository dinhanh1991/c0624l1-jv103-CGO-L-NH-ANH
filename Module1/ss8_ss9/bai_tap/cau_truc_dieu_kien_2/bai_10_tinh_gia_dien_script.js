function bai10(){
    let enumber =prompt("nhập số điện");
    let epricing;
    if(enumber<50)
    {
        epricing= enumber*1806;
    }
    else if (enumber<100)
    {
        epricing= 50*1806+(enumber-50)*1866;
    }
    else if (enumber<150)
    {
        epricing= 50*1806+50*1866+(enumber-100)*2167;
    }
    else if(enumber<200)
    {
        epricing= 50*1806+50*1866+50*2167+(enumber-150)*2729;
    }
    else if(enumber<250)
    {
        epricing= 50*1806+50*1866+50*2167+50*2729+(enumber-200)*3050;
    }
    else
    {
        epricing= 50*1806+50*1866+50*2167+50*2729+50*3050+(enumber-250)*3151;
    }
    document.getElementById("check10").innerText="giá điện tháng là: "+ epricing+" VND";
}
