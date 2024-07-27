function Trans() {
    let engArr = ['Banana', 'Orange', 'Mango', 'Jackfruit', 'Dorian', 'Eat', 'Fruit', 'Cat', 'Dog', 'Tiger', 'animal'];
    let vieArr = ['Quả chuối', 'Quả cam', 'Quả xoài', 'Quả mít', 'Sầu Riêng', 'ăn', 'Quả', 'Mèo', 'Chó', 'Hổ', 'Động vật'];
    let result = '';
    string = document.getElementById('searchFor').value;
    if (document.getElementById('chosen').value === 'vietnamese') {
        for (let i = 0; i < engArr.length; i++) {
            debugger
            if (string === vieArr[i]) {
                result = engArr[i];
                break;
            }
        }
    } else {
        for (let i = 0; i < engArr.length; i++) {
            debugger
            if (string === engArr[i]) {
                result = vieArr[i];
            }
        }
    }
    document.getElementById('screem').innerHTML = result;
}