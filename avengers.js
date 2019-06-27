const avengers = {

    hulk: {
        name: "hulk",
        clicks: 0,
        img: "./images/hulk.jpeg",
        Click: function() {
            this.clicks++;
        }
    },

    thor: {
        name: "thor",
        clicks: 0,
        img: "./images/thor.jpeg",
        Click: function() {
            this.clicks++;
        }
    },

    blackwidow: {
        name: "blackwidow",
        clicks: 0,
        img: "./images/blackwidow.jpeg",
        Click: function() {
            this.clicks++;
        }
    }

};

const nameList = ["antman", "blackwidow", "captainamerica", "hulk", "ironman", "thor"]



$('.card-big').on('click', '.card .card-img-top', countInc);

$('.card-column').on('click', '.card', cardShow);

$('#submit').click(addHero);

function addHero() {
    let heroName = $("#heroName").val().toLowerCase();

    for (let i = 0; i < nameList.length; i++) {

        if (heroName == nameList[i]) {
            for (const key of Object.keys(avengers)) {
                if (avengers[key].name == heroName) {
                    alert("hero already in your team");
                    return;
                }
            }

            avengers[heroName] = {
                name: heroName,
                clicks: 0,
                img: "./images/" + heroName + ".jpeg",
                Click: function() {
                    this.clicks++;
                }
            }
            $('.card-column').children().remove();
            createCards();
            $("#heroName").val("");
            return;
        }
    }

    alert("hero is not available");

}

function cardShow() {

    $(".card-big").children().remove();
    var cardCopy = $(this).clone();
    let clicks = avengers[$(cardCopy).children(".card-body").children("h4").text()].clicks;


    $(cardCopy).children(".card-body").children("p").text("no of clicks:" + clicks);

    $(".card-big").append(cardCopy);



}



function countInc(event) {
    let item = $(this).parent().children(".card-body").children(".card-title").text();
    let itemcount = $(this).parent().children(".card-body").children(".card-text").text();


    avengers[item].Click();
    $(this).parent().children(".card-body").children(".card-text").text("no of clicks:" + avengers[item].clicks);
}




//create the cards to be added to card columns

function createCards() {
    for (const key of Object.keys(avengers)) {

        var card = document.createElement("div");
        card.className += " card border-0";

        var card_img = document.createElement("img");
        card_img.className += " card-img-top img-fluid";
        card_img.setAttribute("src", avengers[key].img);

        card.append(card_img);

        var card_body = document.createElement("div");
        card_body.className += " card-body";

        var card_title = document.createElement("h4");
        card_title.className += " card-title text-capitalize";
        card_title.innerText = avengers[key].name;

        card_body.append(card_title);

        var card_text = document.createElement("p");
        card_text.className += " card-text";

        card_body.append(card_text);

        card.append(card_body);

        $('.card-column').append(card);

    }



}

createCards();