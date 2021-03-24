//DOM DARI INDEX 
var ajax = document.getElementById('ajax');

//gunakan objek ajax yakni XMLHttpRequest
var XHR = new XMLHttpRequest();

//masukkan url atau file yang akan di amgbil datanya
var url = 'file.txt';


//gunakan function handler ajax
XHR.onreadystatechange = function(){

    //pastikan state = 4, dan status = 200
    if(XHR.readyState == 4 && XHR.status == 200){

        //tampilkan ajaxnya
        ajax.innerHTML = XHR.responseText;
    }
}

//masukkan method ajaxnya
XHR.open("GET",url,true); // => param 1 = method ajaxnya menggunakan Get, Param 2 url diambil dari url yang kita masukkan di atas, Param 3 => true artinya asinchronus ajax, false synchronus




//Kirim ajaxnya
XHR.send();
