function menuDisplay() {
    var menu = document.getElementById('menuMobile');
    
    if (menu.className.indexOf('menuDisplay') == -1) {
        console.log("estouuu");
        menu.className += " menuDisplay";
    } else {
        menu.className = menu.className.replace(" menuDisplay", "");
    }
}