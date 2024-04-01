function showResponsiveMenu() {
    let menu = document.getElementById("responsive_nav");
    let icon = document.getElementById("hamburger_icon");
    let root = document.getElementById("header");
    if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      root.style.overflowY = "hidden";
    } else {
      menu.className = "";                    
      icon.className = "";
      root.style.overflowY = "";
    }
  }