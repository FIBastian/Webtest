function nightmode(){
    var elemet = document.body;
    elemet.classList.toggle("darkmode");
}

function shownav(){
    var x = document.getElementById("responmobile");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
}