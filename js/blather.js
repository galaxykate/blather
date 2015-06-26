/**
 * @author Kate
 */

$(document).ready(function() {
    console.log("start blather");
    var grammar = tracery.createGrammar(rawBlatherGrammar);
    var currentBlather = "";
    var storedBlather = "";

    // Fill the slides

    function nextSlide() {
        var slideContent = grammar.flatten("#slide#");
        $("#slides").html(slideContent);
    }

    // Pop some stuff off an add to the screen
    function typeBlather(speaker) {
        if (storedBlather.length === 0) {
            storedBlather = grammar.flatten("#" + speaker + "Blather#");
        }
        currentBlather += storedBlather.charAt(0);
        storedBlather = storedBlather.substring(1);

        $("#" + speaker).html(currentBlather);
        $("#" + speaker).scrollTop($(document).height());
    }

    var slideCounter = 0;
    var active = "presenter";
    switchActive();
    switchActive();

    var timeSinceLastBlather = 0;
    setInterval(function() {
        timeSinceLastBlather++;

        if (timeSinceLastBlather > 30) {
            switchActive();
            timeSinceLastBlather = 0;
        }
    }, 30);

    var active = "presenter";

    function switchActive() {
        storedBlather = "";
        currentBlather = "";

        $("#" + active).removeClass("active");
        console.log("Switch " + active);
        if (active === "presenter") {
            active = "audience";
        } else {
            active = "presenter";
        }
        $("#" + active).addClass("active");

    };

    function talk() {
        slideCounter++;
        if (slideCounter > 5 + Math.random(10)) {
            nextSlide();
            slideCounter = 0;
        }

        typeBlather(active);
        typeBlather(active);
        typeBlather(active);
        typeBlather(active);
        typeBlather(active);
        timeSinceLastBlather = 0;
    }


    $(document).keypress(function(ev) {
        console.log(ev.which);

        if (ev.which = 97) {
            talk();
        }

        if (ev.which = 108) {

        }

    });

    $("#slides").click(function() {

        nextSlide();
    });
    nextSlide();
});
