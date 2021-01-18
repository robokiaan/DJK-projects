function openNav() {
    document.getElementById(`mySidebar`).style.width = `280px`;
    document.getElementById(`main`).style.marginLeft = `280px`;
}

function closeNav() {
    document.getElementById(`mySidebar`).style.width = `0`;
    document.getElementById(`main`).style.marginLeft = `0`;
}
var page

var page_array = {
    'page1':`<br>It was almost twilight, I was heading to my house on my bicycle to get some food into my starving stomach. Oh, man! I forgot to introduce myself. I am Asphalt and as you don't know how I look, I am skinny and I have messy brown hair with electric blue eyes. I am no one to say but I am very good at science, math and Greek mythology. I am a green belt martial artist too. I am twelve years old and I live in England with my two friends. We all live together as a family. This might be shocking but we all are orphans, yes you read it correctly ‘orphans’. The city we live in has a small population that's why people do not investigate us. My friends' names are Patrick and Leo. Patrick is very skinny, he has jet black hair and he is very smart. Leo is also very thin but he has smooth messy blonde hair. Leo is very good at his reflexes and he is even good at studies. Patrick is very skilled in many physical activities. It's our daily routine to race home`,
    'page2':`<br>and grab our food, we have less food that's why whoever reaches home first gets more of it. As the saying goes, “The early bird gets the worm."<br><br>So where were we, got it, I am just a turn away when suddenly 2 bicycles join me. They were my friends, Leo and Patrick, we rode fast together to beat each other home when suddenly from the corner a car appeared. We were about to crash when instantly out of nowhere a mysterious circle appeared in front of us. All of us stopped and exchanged confused glances and then we looked around, it was neither day nor night it was like the eclipse. We also saw an old man wearing a robe, he looked like a wise wizard but you know wizards are not real just like all the other mythical creatures such as the Phoenix and Griffins. The wizard looking person suddenly looked at us, a grin slid onto his face and said in a deep old voice “I knew you would come, I knew this is your destiny.” In a confused tone, I asked “Where are we? How do you know that this is my destiny? I have just come here by accident. And by the way who are you?”`,
    'page3':`<br>The wizard looking person answered “I am Merlin, a powerful wizard who was the only match to Morgana until you came. Since then I have been seeing vision about you saying that the king has arrived. You are on the dark side of the world and you say you came here by accident, May I ask you how you came here?” I answered, “I came here when a car was about to crash my friends and me and suddenly a circle appeared and we came here.” The wizard looking person exclaimed, “That's it!! The good invisible force helped you, it helps every king. I will show you something” he got ready and then he clapped in some rhythm and after he was done the eclipsed sun’s little light only shone on him and nobody else. He clapped in the same rhythm and then the light of the eclipsed sun reflected from him to me.`,
    'page4':`<h1 style="text-align: center"><b style="color: black">Chapter 2</b></h1><br><br>Now I agreed, magic is real, Merlin is real, and Morgana is real, you see they are kind of connected for me. I felt exuberant and asked “What is our destiny? Why did destiny bring us here? “Merlin spoke, “Your destiny here is to defeat Morgana by slaying her. “I bewildered “How do we defeat Morgana? I have read that it’s not easy to defeat her. Merlin explained," Morgana has 2 weaknesses: the first one is ice and the second one is To spathí tis ékleipsise.”I first translated it from ancient Greek to English “I do not have the sword of the eclipse. Merlin asserted, “Obviously you do not have the sword of the eclipse, I have it.”He reached into his robe’s pocket and removed a sword and an armour. Merlin turned to my friends and assured, “You guys do not have a sword and armour so we will have to go to the city up on the hill to replicate the sword and armour for you'll.” I wore the armour and took the sword and then`,
    'page5':`<br>we abandoned our bicycles and headed to go up the hills.<br><br>It took us almost half an hour to reach the hills and then we started climbing. The trek was an arduous journey. Some parts were very steep and we dint have our hiking gears since it was such an unexpected journey to this place. One time Patrick injured his leg by falling when he was running up a steep narrow path and it started bleeding. He was howling in pain. We had to wrap it around with a cloth which Merlin had conjured out of thin air. Even Leo bruised his hand by falling off a cliff. We reached the top of the hills in about one and a half hours and it was an enthralling sight. We saw a whole city of different animals including the mythical creature. I was in complete shock! I thought that there would be hardly any people or animals and the streets would be deserted but the sight of the place proved me wrong. There were hundreds of animals on the street not counting the animals in the shops. There were many species such as Chimera’s, Phoenix, Griffins, Yeti and many more. Merlin took us near the city and people started staring at me and my friends. Merlin`,
    'page6':`<br>said in a loud, clear voice, assuring them, “No worries, this is the King and his Knights.”`,
    'page7':`<h1 style="text-align: center"><b style="color: black">Chapter 3</b></h1>For a little theatrical touch, I raised my sword in the air and the crowd dispersed in confusion. Merlin took us down the street to a duplicator’s store. It was empty and then he said, “Looks like Ben is having a holiday, I will have to replicate the armour and the sword. “I gave him my armour and sword he kept it down and started the complicated hand movements again but a different one, after some seconds he stopped and the sword and armour were ready. Merlin again did another spell with his hands and a white plume appeared on my helmet, Merlin said it was to identify for other people that I am the king.<br>My friends and I took the armours and swords and wore them. We looked at ourselves by the reflection of the glass windows of the shop; we really looked like warriors. It was amazing. Merlin then instructed, “Now I need to get you trained for the battle. “We`,
    'page8':`<br>walked out of the city into a grassland beside. It was a plain grassland except for some trees near the forest, we walked to the middle of the grassland and he did his magic. Suddenly some fake humans appeared out of nowhere. Merlin said, “These fake humans will teach you to fight and till then I will get some food. “Merlin left to go to the city to get some food as we battled, I was fighting the biggest and strongest fake human, It was hitting me with his sword but I blocked every shot, it became faster and knocked my foot off the ground and I fell. The human picked me up and showed me how to block that shot, they kept teaching me. It was the same with Patrick and Leo, now with each fall, they howled in pain but their opponents helped them up.<br><br>After he taught me the move I went on attack first, I jumped up, put my hands behind my head and gave a blow at his sword, he went a little behind. Then I took my sword behind my shoulder and swung it ahead, it was a nice blow but he didn't give in. I took a break to see how Patrick and Leo were doing, they were attacking well but they had to work on their defence. I chuckled that Leo's reflexes were not helping nor Patrick's physical`,
    'page9':`<br>smartness. I was back onto the field. I asked the fake human to teach me some more stunts, he taught me a move for defending. You have to keep both your hands on the sword and turn the sword into a horizontal position to block a blow. I told him “I will try doing it” he quietly went a little behind and ran to me, he jumped up into the air, put his sword behind his head and in full force got it back ahead, I was blown off my feet and couldn't defend properly. He showed it to me again and did the same thing he had done last time, I did the move he had taught me and I finally had blown him off his feet. As we were drained, Merlin appeared walking merrily toward us, he said, “Food is ready, come and get it.” We were so delighted to see the food in Merlin’s conjured up bag. We went to the middle grasslands and sat down. He even materialized a big tent for us and then lit up a warm bonfire. We sat down around the bonfire and Merlin asked us “Do you want to hear a short story about when King Arthur defeated Morgana? “All of us said yes.`,
    'page10':`<h1 style="text-align: center"><b style="color: black">Chapter 4</b></h1>Merlin narrated “There was a wise king who was the owner of the eclipse sword because he had successfully removed it from the stone. The sword was splayed into the stone even before he was born. He faced an early death due to a disease. After he died there was no king, so I decided that the sword should go back into the stone and whoever picks it back up will be the king. Many men tried it out but none successfully removed it. One day a boy named Arthur was strolling down the street and was curious seeing the sword in the stone. He tried and got it out without much effort. Seeing this, people gasped and bowed to him and accepted him as the King. The knights of the castle happily took the boy there. At that time the boy’s sister Morgana was training to become the evil sorceress that she is now. I helped King Arthur transform from a normal boy to a sagacious king. He also never forgot`,
}

jQuery(document).ready(function () {
    set_page()
    jQuery(`.topic`).hide()
    jQuery(`#all`).show()
})

function set_page() {
    page = 12
}

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

function page_movement(pom) {
    if (pom == 'plus') {
        if (page == 12) {
            page = 34
            jQuery('#page1').html(page_array.page3)
            jQuery('#page2').html(page_array.page4)
            jQuery('#pageNumber1').text('3')
            jQuery('#pageNumber2').text('4')
        } else if (page == 34) {
            page = 56
            jQuery('#page1').html(page_array.page5)
            jQuery('#page2').html(page_array.page6)
            jQuery('#pageNumber1').text('5')
            jQuery('#pageNumber2').text('6')
        } else if (page == 56) {
            page = 78
            jQuery('#page1').html(page_array.page7)
            jQuery('#page2').html(page_array.page8)
            jQuery('#pageNumber1').text('7')
            jQuery('#pageNumber2').text('8')
        } else if (page == 78) {
            page = 910
            jQuery('#page1').html(page_array.page9)
            jQuery('#page2').html(page_array.page10)
            jQuery('#pageNumber1').text('9')
            jQuery('#pageNumber2').text('10')
        }
    } else if (pom == 'minus') {
        if (page == 910) {
            page = 78
            jQuery('#page1').html(page_array.page7)
            jQuery('#page2').html(page_array.page8)
            jQuery('#pageNumber1').text('7')
            jQuery('#pageNumber2').text('8')
        } else if (page == 78) {
            page = 56
            jQuery('#page1').html(page_array.page5)
            jQuery('#page2').html(page_array.page6)
            jQuery('#pageNumber1').text('5')
            jQuery('#pageNumber2').text('6')
        } else if (page == 56) {
            page = 34
            jQuery('#page1').html(page_array.page3)
            jQuery('#page2').html(page_array.page4)
            jQuery('#pageNumber1').text('3')
            jQuery('#pageNumber2').text('4')
        } else if (page == 34) {
            page = 12
            jQuery('#page1').html(page_array.page1)
            jQuery('#page2').html(page_array.page2)
            jQuery('#pageNumber1').text('1')
            jQuery('#pageNumber2').text('2')
        }
        console.log(page)
    }
}