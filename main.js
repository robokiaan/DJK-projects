function openNav() {
    document.getElementById(`mySidebar`).style.width = `280px`;
    document.getElementById(`main`).style.marginLeft = `280px`;
}

function closeNav() {
    document.getElementById(`mySidebar`).style.width = `0`;
    document.getElementById(`main`).style.marginLeft = `0`;
}

var pause_unpause_variable

jQuery(document).ready(function() {
    jQuery(`.topic`).hide()
    jQuery(`#suggested`).show()
})

function topic(name) {
    jQuery(`.topic`).hide()
    if (name == `suggested`) {
        jQuery(`#suggested`).show()
    } else if (name == `fiction`) {
        jQuery(`#fiction`).show()
    } else if(name == `all`) {
        jQuery(`#all`).show()
    }
    closeNav()
}

function read_aloud() {
    pause_unpause_variable = 'pause'

    var text = `${jQuery('#page1').text()}. ${jQuery('#page2').text()}`

    var SS = window.speechSynthesis

    var speak_data = text

    var Utter_this = new SpeechSynthesisUtterance(speak_data)

    SS.speak(Utter_this)
}

function book() {
    window.location.href = 'page.html'
}

function pause_unpause() {
    if (pause_unpause_variable == 'pause') {
        window.speechSynthesis.pause()
        jQuery('#pause-btn').removeClass('fa-pause')
        jQuery('#pause-btn').addClass('fa-play')
        pause_unpause_variable = 'unpause'
    } else if (pause_unpause_variable == 'unpause') {
        window.speechSynthesis.resume()
        jQuery('#pause-btn').removeClass('fa-play')
        jQuery('#pause-btn').addClass('fa-pause')
        pause_unpause_variable = 'pause'
    }
}