let numBer1 = 0;
let done = "";
let resultDone;

function so(id) {
    let tempnumber = document.getElementById("window").value;
    document.getElementById("window").value = tempnumber + id;
}

function dau(id) {
    numBer1 = document.getElementById("window").value;
    document.getElementById("window").value = "";
    done = id;
}

function result(id) {
    tempnumber = document.getElementById("window").value;
    switch (done) {
        case "+":
            resultDone = parseFloat(numBer1) + parseFloat(tempnumber);
            document.getElementById("window").value = resultDone;
            break;
        case "-":
            resultDone = parseFloat(numBer1) - parseFloat(tempnumber);
            break;
        case "*":
            resultDone = parseFloat(numBer1) * parseFloat(tempnumber);
            break;
        case "/":
            resultDone = parseFloat(numBer1) / parseFloat(tempnumber);
            break;
        case "10^":
            resultDone = parseFloat(numBer1) * Math.pow(10, parseFloat(tempnumber));
            break;
        case "pow":
            resultDone = parseFloat(numBer1) ** parseFloat(tempnumber);
            break;
    }
    document.getElementById("window").value = resultDone;
}

function giaithua(id) {
    let fac = 1;
    let fNumber = +document.getElementById('window').value;
    if (document.getElementById('window').value==0)
    {
        fac = 1;
    }else {
    for (let i = 2; i <= fNumber; i++) {
        fac = parseFloat(fac * i);
    }}
    document.getElementById("window").value = fac;
    return (document.getElementById("window").value);
}

function xoa() {
    document.getElementById('window').value = "";
}

function del(id) {
    let ce = document.getElementById('window').value;
    document.getElementById("window").value = ce.substring(0, ce.length - 1);
}

function per(id) {
    let perc = document.getElementById('window').value * 100;
    document.getElementById("window").value = perc;
}

function agel(id) {
    let sym = document.getElementById('window').value;
    document.getElementById('window').value = sym * Math.PI / 180;
}

function ln10(id) {
    let log10 = parseFloat(document.getElementById('window').value);
    document.getElementById("window").value = Math.log(log10) / Math.log(id);
}

function trigo(id) {
    let tri = document.getElementById('window').value;
    switch (id) {
        case "sin":
            document.getElementById("window").value = Math.sin(tri * Math.PI / 180);
            break;
        case "cos":
            document.getElementById("window").value = Math.cos(tri * Math.PI / 180);
            break;
        case "tan":
            document.getElementById("window").value = Math.tan(tri * Math.PI / 180);
            break;
    }
}

function cons(id) {
    let con = document.getElementById('window').value;
    switch (id) {
        case "e" :
            document.getElementById("window").value = Math.exp(con);
            break;
        case "PI" :
            document.getElementById("window").value = Math.PI;
    }
}

function ham(id) {
    let fun = document.getElementById('window').value;
    switch (id) {
        case "sqr":
            document.getElementById("window").value = Math.pow(fun, 2);
            break;
        case "sqrt":
            document.getElementById("window").value = Math.sqrt(fun);
            break;
        case "ln":
            document.getElementById("window").value = Math.log(fun);
            break;
    }
}
function callB (id){
    document.getElementById("window").value =resultDone;
}