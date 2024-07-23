function bai8()
{
    let age=prompt("nhập số tuổi")
    if(age>0 && age<120)
    {
        document.getElementById("check8").innerHTML=age+" là số tuổi của một người";
    }
    else
    {
        document.getElementById("check8").innerHTML=age+" không là số tuổi của một người";
    }
}