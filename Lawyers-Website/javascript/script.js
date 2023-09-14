function menu_open(){
    var a = document.getElementById("bac-color");
    var b = document.getElementById("header-section");
    
    if(a.style.display === "block"){
        a.style.display = "none";
        b.style.opacity = "1";
    }else{
        a.style.display = "block";
        b.style.opacity = "0.2";
    }
}


function link_hide(x) {
    if (x.matches) { // If media query matches
        document.getElementById("bac-color").style.display = "none";
   document.getElementById("header-section").style.opacity = "1";
    } else {
     
    }
  }
  
  var x = window.matchMedia("(max-width: 1030px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)


function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("bac-color").style.display = "none";
        document.getElementById("header-section").style.opacity = "1";
    } else {
     
    }
  }
  
  var x = window.matchMedia("(max-width: 1030px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)