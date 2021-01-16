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

function topic(name) {
    jQuery('.topic').hide()
    if (name == "suggested") {
        jQuery('#suggested').show()
    } else if (name == "fiction") {
        jQuery('#fiction').show()
    }
    else if(name == "all") {
        jQuery('#all').show()
    }
    closeNav()
}