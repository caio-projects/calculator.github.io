function SideNavManager(cmd){
    if(cmd=="open"){
        document.getElementById("darken-screen").style.display = "block";
        document.getElementById("sidenav").style.display = "block";
    }else if(cmd=="close"){
        document.getElementById("darken-screen").style.display = "none";
        document.getElementById("sidenav").style.display = "none";
    }
}