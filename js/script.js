function callElement(pass) {
    return document.getElementById(pass);
}
function changeText() {
    callElement("readmore").style.display = `none`;
    callElement("subheading").innerHTML += " I enjoy creating things that live on the internet, be it websites, apps, or anything in between. I've managed to gain a decent amount of experience and valuable knowledge from the different kinds of projects. I'm fueled by coffee & driven by the lyrical magic of music";
}
function copyText() {
    navigator.clipboard.writeText("sauravppandey@gmail.com");
}

// awesome code starts here
function jagMag() {
    var firstCard = callElement("cosmos");
    var secondCard = callElement("offers");
    var thirdCard = callElement("tr");
    var fourthCard = callElement("wishlist");
    var fifthCard = callElement("vernacular");

    function callAllElements(a, b, c, d, e) {
        return [callElement("cosmos").style.opacity = a, callElement("offers").style.opacity = b, callElement("tr").style.opacity = c, callElement("wishlist").style.opacity = d, callElement("vernacular").style.opacity = e];
    }

    function callingCards(cardName, a, b, c, d, e, imgRoute) {
        cardName.addEventListener("mouseenter", function (event) {
            callAllElements(a, b, c, d, e);
            document.getElementById("supporting-image").src = `${imgRoute}`;

        })
        cardName.addEventListener("mouseleave", function (event) {
            callAllElements(1, 1, 1, 1, 1);
            document.getElementById("supporting-image").src = ``; //path left empty
        })
    }
    var firstCard = callElement("cosmos");
    var secondCard = callElement("offers");
    var thirdCard = callElement("tr");
    var fourthCard = callElement("wishlist");
    var fifthCard = callElement("vernacular");

    callingCards(firstCard, 1, 0.5, 0.5, 0.5, 0.5, "./resources/projects/Cosmos-cover.png");
    callingCards(secondCard, 0.5, 1, 0.5, 0.5, 0.5, "./resources/projects/Refund.png");
    callingCards(thirdCard, 0.5, 0.5, 1, 0.5, 0.5, "./resources/projects/s.jpg");
    callingCards(fourthCard, 0.5, 0.5, 0.5, 1, 0.5, "./resources/projects/Refund.png");
    callingCards(fifthCard, 0.5, 0.5, 0.5, 0.5, 1, "./resources/projects/Refund.png");
}

jagMag();

