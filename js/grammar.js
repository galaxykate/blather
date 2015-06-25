/**
 * @author Kate
 */

// Tracery grammar.
// Each symbol should be a nonspaced string (quotes are optional),
// with either a single string or array of options.  Throwing errors? Send it through JSONLint

var rawBlatherGrammar = {

    // All this stuff is from an exisiting conference generator, it may give you ideas, or things to reuse
    "greetings" : ["Salud", "Bonjour", "Shalom", "Nihao", "Hello", "Aloha"],
    "subjectAdj" : ["Digital", "Electronic", "Telekinetic", "Virtual", "Interactive"],
    "subjectNoun" : ["Storytelling", "Narrative", "Intelligence", "Art", "Media", "Games"],
    "subject" : ["#subjectAdj# #subjectNoun#", "#reimagining# #subjectAdj# #subjectNoun#"],
    "reimagining" : ["Advancing", "The Future of", "Reimagining", "Inventing", "Reinventing", "New Directions in"],
    "area" : ["Brazil", "Kauai", "Cape Verde", "Shanghai", "Barsoom", "Utopia", "Anchorage", "Europa", "Discworld", "world", "Miami", "Santa Cruz"],
    "institute" : ["Academy", "Guild", "Symposium", "Hall", "Center", "University", "Laboratory", "Library", "Association"],
    "conference" : ["Conference", "Workshop", "Symposium", "Forum"],
    "place" : ["#area# #institute# of #subject#", "#subject# #institute# of #area#", "#conference# on #subject#"],
    "controls" : ["keyboard", "mouse", "interpretive dance", "set of mechanical levers", "series of yelps and howls", "pattern of vocal ululations", "joystick", "Kinect", "EEG headset", "DDR mat", "Powerglove", "midi keyboard", "plastic guitar"],
    "hardware" : ["Arduino", "Raspberry PI", "XBox360", "Android", "Altair 8800", "Commodore 64", "hacked toaster", "jail-broken iPhone", "Apple Lisa", "computer running Windows 95"],
    "display" : ["shadow puppetry screen", "a set of teleprescence robots", "70mm film projector", "Sony Aibo", "vintage VCR", "Atari 2600", "Soviet-era military screen", "VirtualBoy", "Oculus Rift", "1957 oscilloscope", "1977 Apple II", "40ft projection"],
    "showSpace" : ["the outside of DANM", "the inside of the DARC lab", "the DANM stairwell", "the women's restroom", "the UCSC cattle pens"],
    "useCase" : ["exploring themes of #abstractThing#", "using the lens of #litDevice# from #field#", "in a one-time performance", "for the blind", "to be projected on #showSpace#", "played on a #hardware#", "running on a #hardware#", "shown on a #display#"],
    "culturalProduction" : ["drama", "reality television show", "children's game", "playground rhyme", "poem", "novel", "jazz perfomance", "folk song", "puppet show", "opera", "theater performance", "poem", "musical production", "religious ceremony"],
    "digitalArtifact" : ["webapp", "tabletop RPG", "open world game", "interactive #culturalProduction#", "digitally-enhanced #culturalProduction#", "hypertext fiction", "chose-your-own-adventure", "text adventure", "Flash-animated #culturalProduction#", "interactive #culturalProduction#", "Twine game"],
    "litDevice" : ["iambic pentameter", "intersectional feminism", "alliteration", "parody", "the feeling of agency", "first-person narration", "magical realism", "unreliable narration", "foreshadowing", "irony", "frame stories", "breaking the fourth wall", "oral storytelling", "the 'hero' journey'", "the American dream", "gender roles", "plot structure", "character development", "the myth of Sisyphus", "the 'other'", "technological literacy", "narrative structure"],
    "field" : ["the #nationality# diaspora", "contemporary American #culturalProduction.s#", "the #nationality#-American experience", "traditional #nationality# #culturalProduction.s#"],
    "setting" : ["Edo Japan", "Medieval France", "graduate school", "the basement of the British Museum", "a neighborhood bar", "a suburban home", "a coffeeshop at closing time", "Weimar Germany", "a prison in an unnamed country", "1950s San Francisco", "pre-Columbian Mesoamerica", "ancient Egypt", "an era of space exploration", "a time far in the future", "a time before #abstractThing#", "London in the 60s", "high school in the 1980s", "the height of the drug wars"],
    "abstractThing" : ["internal turmoil", "regret", "alcoholism", "body dysmorphia", "first dates", "coming-of-age", "passion", "love", "quiet desperation", "deperate loneliness", "hatred", "world-changing choices", "#nationality# imperialism", "#nationality# pride", "deep sorrows", "immeasurable loss", "rising hope", "boundless despair", "laughter", "societal disapproval", "instability", "difficult choices", "sacrifice", "cruel betrayal"],
    "someDramaticStuff" : ["#abstractThing# in a time of #abstractThing#"],
    "influence" : ["influence"],
    "person" : ["a Mary-Sue character", "a strugging artist", "a teenage girl", "a nameless child", "an elderly woman", "an invisible observer", "an old man", "a young boy", "the author", "a cat", "a famous historical figure", "a high-ranking official"],
    "aProtagonist" : ["#person#", "#person# lost in #setting#", "#person# in #setting#"],
    "tellTheStory" : ["relate a tale", "paint a picture", "simulate the experience", "spin a story", "describe a world", "tell"],
    "examination" : ["examination", "reimagining", "interpretation", "appropriation", "mythologization", "colonization", "deconstruction", "(de)#examination#", "(re)#examination#"],
    "complexTopic" : ["#litDevice# in #field#"],
    "system" : ["a neural network", "a procedural system", "an advanced AI", "a decision tree"],
    "explore" : ["navigate", "control", "explore", "interact"],
    "implementedOn" : ["as instantiated on", "proceduralized with", "controlled by", "simulated on"],
    "project" : ["#litDevice.capitalize# and #litDevice# #tellTheStory# of #abstractThing# in this #digitalArtifact# about #aProtagonist#.", "#abstractThing.capitalize# in #setting# is explored with #litDevice# #implementedOn# a #digitalArtifact#.", "#useCase.capitalize#, #aProtagonist# is used to #tellTheStory# of #abstractThing# using #litDevice#, as #implementedOn# a #hardware#.", "A #examination# of #litDevice# to explore #abstractThing# in a #digitalArtifact#", "The user #explore.s# with #aProtagonist# and must defeat #abstractThing# using a #controls# to activate #abstractThing#, but can only experience their world through a #display#.", "A #culturalProduction# performed on #display#, which the user #explore.s# with a #controls#.", "A project to #tellTheStory# of #aProtagonist# and their #abstractThing#, with a #digitalArtifact#.", "#system.capitalize# to implement #litDevice# for #digitalArtifact.s#, #useCase#.", "A #examination# of themes of #abstractThing#,  using #litDevice# in a #digitalArtifact#.", "A #digitalArtifact# about #complexTopic#, #useCase#.", "A #digitalArtifact# using #litDevice# and #litDevice# to #tellTheStory# of #someDramaticStuff#"],
    "nationality" : ["North #nationality#", "West #nationality#", "Outer #nationality#", "New #nationality#", "Mongolian", "Merovingian", "Californian", "Texan", "Viennese", "Indonesian", "Malaysian", "Gibraltan", "Roman", "Hungarian", "Transylvanian", "Iowan", "Minnesotan", "Guatemalan", "Cantonese", "Irish", "Caspian", "Eurasian", "Pan-American", "Frankish", "Byzantine", "Alexandrian", "Persian", "Mongolian"],
    "titlePart" : ["#subjectAdj# ", "Psycho", "Out", "Neuro", "Tele", "Cyber", "Flash", "Re:", "De", "Un", "Dys"],
    "titleNoun" : ["#culturalProduction#", " Spaces", "the Praxis", "Text", "the Text", "Academia", "Presence", "Experience", "the Divine", "the diaspora", "#field#", "#field#"],
    "titleMod" : ["No", "Only", "New", "#titleVerb#"],
    "titleVerb" : ["finding", "interrogating", "stabilizing", "navigating", "being", "uncovering", "mixing", "freeing", "appropriating", "searching"],
    "title" : ["#titleMod# #titleNoun#", "#titlePart.capitalize##titlePart.capitalize##titleVerb# #titleNoun#", "#titlePart.capitalize##titleVerb.capitalize#"],

    "projectDesc" : "<b>#title#:</b> #project#",
    "origin" : "<h3>#greetings#, and welcome to the #place#</h3><p>Schedule:</p><p>#projectDesc#<p>#projectDesc#<p>#projectDesc#",

    // Official Blather grammar stuff

    slideTitle : ["<div class='slideTitle'>My Title</div>"],
    slideQuote : ["<div class='slideQuote'><div>Hello World</div><div><div></div>"],
    slide : ["#slideTitle##image#", "#slideTitle##bullets#", "#sideImage##bullets#", "#slideQuote#"],

    presenterBlather : ["Blah blah blah.", "And such", "Narrative is....", "As is other work"],
    audienceBlather : ["This is less of a question, and more of a statement.  #observation#.", "I have #number# of questions", "Are you familiar with the work of #author#?"],
    presenterResponse : ["I don't think that's relevant.", "I find that work ideologically questionable", "I considered it, but it was impractical"],
};

