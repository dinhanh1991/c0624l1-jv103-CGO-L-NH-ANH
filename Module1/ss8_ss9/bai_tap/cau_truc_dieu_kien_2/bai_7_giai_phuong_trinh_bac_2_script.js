function bai7(){
    let factorA =prompt("nhập số a");
    let factorB =prompt("nhập số b");
    let factorC =prompt("nhập số c");
    let delta =factorB*factorB-4*factorA*factorC;
    if(delta >= 0){
        let root1=(-factorB+Math.sqrt(delta))/(2*factorA);
        let root2=(-factorB-Math.sqrt(delta))/(2*factorA);
        document.getElementById("check7").innerText="phương trình "+factorA+"x2 +"+factorB+"x+ "+factorC+" =0 có 2 nghiệm là x1= "+root1+" x2= "+root2;
    }else {
        document.getElementById("check7").innerText="phương trình "+factorA+"x2 +"+factorB+"x+ "+factorC+" =0 vô nghiệm";
    }
}