function change_sel_photo(){
    for(var i=1;i<=6;i++){
        document.getElementById(`seller-photo-${i}`).src="https://source.unsplash.com/200x200/?nature,water";
    }
    
}
change_sel_photo();