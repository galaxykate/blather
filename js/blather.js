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

    setInterval(function() {
        slideCounter++;
        if (slideCounter > 5 + Math.random(10)) {
            nextSlide();
            slideCounter = 0;
        }
        typeBlather("presenter");
        typeBlather("presenter");
        typeBlather("presenter");
     
    }, 200);

    $("#slides").click(function() {

        nextSlide();
    });
    nextSlide();
});
