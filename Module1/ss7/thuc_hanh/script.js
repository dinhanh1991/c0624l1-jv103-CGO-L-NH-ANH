let area = document.rec;
rec.done.onclick = function ()
{
    let k=rec.txtWidth.value;
    let V=rec.txtHeight.value;
    if(k<=0&&v<0)
    {
        alert('Vui lòng nhập lại kích thươc, chieu dai chieu rong phai là so lơn hơn không');
    }
    else
    {
        let iarea =rec.txtWidth.value*rec.txtHeight.value;
        rec.txtArea.value= iarea;
    }
}