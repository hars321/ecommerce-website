function change_sel_photo(){
    for(var i=1;i<=6;i++){
        document.getElementById(`seller-photo-${i}`).src=`https://robohash.org/${i}?200x200`;
    }
    
}
change_sel_photo();