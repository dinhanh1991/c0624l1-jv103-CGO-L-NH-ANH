function bai6(){
    let factorA=prompt("nhập hệ số a");
    let factorB=prompt("nhập hệ số b");
    let factorC=prompt("nhập hệ số c");
    if(factorA==0)
    {
        if (factorC==0)
        {
            document.getElementById("check6").innerText = "phuong trình " + factorA + "x + " + factorB + "=" + factorC + "có vô số nghiệm";

        }
        else
        {
            document.getElementById("check6").innerText= "phuong trình "+factorA+"x + "+factorB+"="+factorC+" vô nghiệm";
        }
    }
    else
    {
        let root = (factorC-factorB)/factorA;
        document.getElementById("check6").innerText= "phuong trình "+factorA+"x + "+factorB+"="+factorC+" có 1 nghiệm là "+root;
    }
}