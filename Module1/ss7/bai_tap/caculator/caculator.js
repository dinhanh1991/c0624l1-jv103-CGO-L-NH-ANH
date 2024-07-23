function nhap(symBol) {
    document.getElementById("window").value += symBol
}

function bang() {
    let string = document.getElementById("window").value;
    let result = eval(string);
    document.getElementById("window").value = result;
}

function xoa() {
    document.getElementById("window").value = ""
}
