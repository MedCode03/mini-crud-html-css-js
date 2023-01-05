let name = document.getElementById("name");
let price = document.getElementById("price");
let ads = document.getElementById("ads");
let taxes = document.getElementById("taxes");
let total = document.getElementById("total");
let btn = document.getElementById("btn");
let confirm = document.getElementById("confirm");

function totalPrice()

{ 
    
    
    total.innerHTML = +price.value + +ads.value +  +taxes.value ; 
     
   
   
}
btn.onclick = function () {
    if(name.value && price.value && ads.value && taxes.value != "") {  
         
    confirm.innerHTML = "product : " + name.value + "<br>"+ "total price  : " + total.innerHTML ;
    name.value = "";
    ads.value = "";
    taxes.value = "";
    price.value = "";
    total.innerHTML = "";
        }else {alert("invalid value!")}
   }