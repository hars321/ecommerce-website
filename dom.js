
function change_prod_name(){
document.getElementById("item-1").innerHTML="mobile";
document.getElementById("item-2").innerHTML="clothes";
document.getElementById("item-3").innerHTML="food";
document.getElementById("item-4").innerHTML="computer";
}
function change_prod_image(){
    document.getElementById("img-1").src = "./images/product/img-1.png";
    document.getElementById("img-2").src = "./images/product/img-2.png";
    document.getElementById("img-3").src = "./images/product/img-3.png";
    document.getElementById("img-4").src = "./images/product/img-4.png";
}
function change_seller_name(){
    document.getElementById("seller-name-1").innerHTML="GFfkm";
    document.getElementById("seller-name-2").innerHTML="Fksdfj";
    document.getElementById("seller-name-3").innerHTML="Aksdjf";
    document.getElementById("seller-name-4").innerHTML="Ooisjfs";
    document.getElementById("seller-name-5").innerHTML="JBsiafs";
    document.getElementById("seller-name-6").innerHTML="Koisjaf";
}
function change_seller_details(){
    document.getElementById("seller-rating-1").innerHTML="5 star";
    document.getElementById("seller-rating-2").innerHTML="4 star";
    document.getElementById("seller-rating-3").innerHTML="3 star";
    document.getElementById("seller-rating-4").innerHTML="5 star";
    document.getElementById("seller-rating-5").innerHTML="2 star";
    document.getElementById("seller-rating-6").innerHTML="4 star";
}
change_prod_name();
change_prod_image();
change_seller_name();
change_seller_details();