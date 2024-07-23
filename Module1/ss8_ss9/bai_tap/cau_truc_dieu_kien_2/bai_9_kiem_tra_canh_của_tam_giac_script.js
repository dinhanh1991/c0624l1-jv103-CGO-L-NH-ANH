function bai9(){
    let number1= prompt("nhập số thứ nhất")
    let number2 = prompt("nhập số thứ 2")
    let number3 = prompt("nhập số thứ 3")
    if(number1>0&&number2>0&&number3>0)
    {
        if(number1+number2>number3)
        {
            if(number1+number3>number2)
            {
                if(number2+number3>number1)
                {
                    document.getElementById("check9").innerText= "3 bộ số (a;b;c) = "+"("+number1+";"+number2+":"+number3+") là cạnh của một tam giác";

                }
            }
        }
    }else
    {
        document.getElementById("check9").innerText= "3 bộ số (a;b;c) = "+"("+number1+";"+number2+":"+number3+") không phải là cạnh của một tam giác";
    }
}