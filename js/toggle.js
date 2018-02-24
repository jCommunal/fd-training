function toggleMenu() {
    var elementToggle = document.getElementById("mainNav");
    
    if (elementToggle.className === "closed") {
        elementToggle.className = "open";
      
  
    } else {
        elementToggle.className = "closed";
        
    }
    console.log("click fired");
}//toggleMenu()

var toggleButton = document.getElementById("hamburgerBtn");
toggleButton.onclick = toggleMenu;