
function check(){
var s=document.myform.lastname.value;
var e=document.myform.email.value;
var n=document.myform.firstname.value;
var p1=document.myform.password1.value;
var p2=document.myform.password2.value;
if(p2 != p1||!s||!e||!n){
alert(" fix password");
die;
}
else{
document.writeln("<h1>"+n+" "+s+"</h1");
document.writeln("<h1>"+ e +"</h1>");
document.writeln("<h1>"+ p2 +"</h1>");
document.writeln("<?php echo'hi'></?>");
}

}