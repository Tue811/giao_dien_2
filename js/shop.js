var navbarFilter=document.getElementById("navbar-filter")
var count=0
function onFilter(){
    count++;
    if(count %2 ==1){
        document.getElementById("navbar-filter-mobile").style.display="block";
        document.body.style.overflow = "hidden"
    }
    else{
        document.getElementById("navbar-filter-mobile").style.display="none";
        document.body.style.overflow = "auto"
    }

}

