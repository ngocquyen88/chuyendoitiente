
function chuyendoitiente(){
    let nhap=document.getElementById("amount").value;
    let tien1=document.getElementById("from").value;
    let tien2=document.getElementById("to").value;
    let kq=(nhap*tien2)/tien1;
    debugger
    document.writeln(kq);
}