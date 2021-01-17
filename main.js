function openNav() {
    document.getElementById(`mySidebar`).style.width = `280px`;
    document.getElementById(`main`).style.marginLeft = `280px`;
}

function closeNav() {
    document.getElementById(`mySidebar`).style.width = `0`;
    document.getElementById(`main`).style.marginLeft = `0`;
}

var pause_unpause_variable
var page

var page_array = {
    'page1':`<br>It was almost twilight, I was heading to my house on my bicycle to get some food into my starving stomach. Oh, man! I forgot to introduce myself. I am Asphalt and as you don't know how I look, I am skinny and I have messy brown hair with electric blue eyes. I am no one to say but I am very good at science, math and Greek mythology. I am a green belt martial artist too. I am twelve years old and I live in England with my two friends. We all live together as a family. This might be shocking but we all are orphans, yes you read it correctly ‘orphans’. The city we live in has a small population that's why people do not investigate us. My friends' names are Patrick and Leo. Patrick is very skinny, he has jet black hair and he is very smart. Leo is also very thin but he has smooth messy blonde hair. Leo is very good at his reflexes and he is even good at studies. Patrick is very skilled in many physical activities. It's our daily routine to race home`,
    'page2':`<br>and grab our food, we have less food that's why whoever reaches home first gets more of it. As the saying goes, “The early bird gets the worm."<br><br>So where were we, got it, I am just a turn away when suddenly 2 bicycles join me. They were my friends, Leo and Patrick, we rode fast together to beat each other home when suddenly from the corner a car appeared. We were about to crash when instantly out of nowhere a mysterious circle appeared in front of us. All of us stopped and exchanged confused glances and then we looked around, it was neither day nor night it was like the eclipse. We also saw an old man wearing a robe, he looked like a wise wizard but you know wizards are not real just like all the other mythical creatures such as the Phoenix and Griffins. The wizard looking person suddenly looked at us, a grin slid onto his face and said in a deep old voice “I knew you would come, I knew this is your destiny.” In a confused tone, I asked “Where are we? How do you know that this is my destiny? I have just come here by accident. And by the way who are you?”`,
    'page3':`<br>The wizard looking person answered “I am Merlin, a powerful wizard who was the only match to Morgana until you came. Since then I have been seeing vision about you saying that the king has arrived. You are on the dark side of the world and you say you came here by accident, May I ask you how you came here?” I answered, “I came here when a car was about to crash my friends and me and suddenly a circle appeared and we came here.” The wizard looking person exclaimed, “That's it!! The good invisible force helped you, it helps every king. I will show you something” he got ready and then he clapped in some rhythm and after he was done the eclipsed sun’s little light only shone on him and nobody else. He clapped in the same rhythm and then the light of the eclipsed sun reflected from him to me.`,
    'page4':`<h1 style="text-align: center"><b style="color: black">Chapter 2</b></h1><br><br>Now I agreed, magic is real, Merlin is real, and Morgana is real, you see they are kind of connected for me. I felt exuberant and asked “What is our destiny? Why did destiny bring us here? “Merlin spoke, “Your destiny here is to defeat Morgana by slaying her. “I bewildered “How do we defeat Morgana? I have read that it’s not easy to defeat her. Merlin explained," Morgana has 2 weaknesses: the first one is ice and the second one is To spathí tis ékleipsise.”I first translated it from ancient Greek to English “I do not have the sword of the eclipse. Merlin asserted, “Obviously you do not have the sword of the eclipse, I have it.”He reached into his robe’s pocket and removed a sword and an armour. Merlin turned to my friends and assured, “You guys do not have a sword and armour so we will have to go to the city up on the hill to replicate the sword and armour for you'll.” I wore the armour and took the sword and then`
}

jQuery(document).ready(function () {
    page = 12
    jQuery(`.topic`).hide()
    jQuery(`#all`).show()
})

function topic(name) {
    jQuery(`.topic`).hide()
    if (name == `suggested`) {
        jQuery(`#suggested`).show()
    } else if (name == `fiction`) {
        jQuery(`#fiction`).show()
    } else if (name == `all`) {
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
    pause_unpause_variable = 'pause'
    page == 12
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

function page_movement(pom) {
    if (pom == 'plus') {
        if (page == 12) {
            page = 23
            jQuery('#page1').html(page_array.page3)
            jQuery('#page2').html(page_array.page4)
            jQuery('#pageNumber1').text('3')
            jQuery('#pageNumber2').text('4')
        } else {
            console.log(page)
        }
    }
}