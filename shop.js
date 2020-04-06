function get_parameter(){
    const string=window.location.search;
    const urlParams = new URLSearchParams(string);
    const number = urlParams.get('number');
    
    return number;
}

function dom_address(value){
    const link=`/images/shop/item-${value}/`;
    console.log(link);
    return link;
}
function dom_images(folder){
    
    
    document.getElementById('img-1').src=folder+"img-1.png";
    document.getElementById('img-2').src=folder+"img-2.png";
    document.getElementById('img-3').src=folder+"img-3.png";
    document.getElementById('img-4').src=folder+"img-4.png";
}
function dom_left_item(value,arr){
    document.getElementById('doc-image').src=`/images/product/img-${value}.png`;
    document.getElementById("left-heading").innerHTML=arr[value];
}
const item_arr=['item','mobile','Clothes','Food','Computer'];

document.getElementById("img-1").onclick = function() {
   console.log("folder"+folder);
    document.getElementById("doc-image").src=folder+"img-1.png";
};
document.getElementById("img-2").onclick = function() {
    console.log("folder"+folder);
     document.getElementById("doc-image").src=folder+"img-2.png";
 };
 document.getElementById("img-3").onclick = function() {
    console.log("folder"+folder);
     document.getElementById("doc-image").src=folder+"img-3.png";
 };
 document.getElementById("img-4").onclick = function() {
    console.log("folder"+folder);
     document.getElementById("doc-image").src=folder+"img-4.png";
 };
const value=get_parameter();
const folder=dom_address(value);
dom_images(folder);
dom_left_item(value,item_arr);

