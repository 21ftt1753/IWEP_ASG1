
var table_num = 0;
var date = "";
var unique_qr_code = "";

 function generate_qr_code(){
   table_num = $("#table_num").val();
   date = Date();
   unique_code = table_num + "_" + date;

   var link = "";

   link = "https://www.fos.com/customer.html";
   link += "?tbl_num="+table_num;
   link += "&unique_code="+unique_code;


   $("#qr_code").html(" ");
   new QRCode(document.getElementById("qr_code"), link);

 }


setTimeout(location.reload.bind(location), 600000);
