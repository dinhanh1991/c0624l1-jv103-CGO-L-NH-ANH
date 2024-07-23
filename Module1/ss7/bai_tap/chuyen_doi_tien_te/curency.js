let convert =document.curr;
curr.done.onclick=function ()
{
if(curr.texcurr.value<0)
{
    alert('số tiền không hợp lệ vui lòng nhập lại số tiền phải lớn hơn 0 ');
} else
{
    if (curr.fromcurrency.value=== curr.tocurrency.value)
    {
curr.result.value =curr.texcurr.value;
    }
    else{
        if (curr.fromcurrency.value==="VND"&&curr.tocurrency.value==="USD"){
            curr.result.value=curr.texcurr.value/25405;
        }else {
            curr.result.value=curr.texcurr.value*25405;
        }
    }
}
return(curr.result.value)
}