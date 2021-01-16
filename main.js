function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
    document.getElementById("head").style.paddingLeft = "280px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("head").style.paddingLeft = "0";
}

jQuery(document).ready(function() {
    jQuery('.topic').hide()
    jQuery('#suggested').show()
})