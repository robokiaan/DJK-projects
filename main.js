function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("head").style.paddingLeft = "200px";
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