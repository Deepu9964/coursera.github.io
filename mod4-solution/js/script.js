
(function(window) {
    var names = ["John", "Mary","Joe","Deepak","Lilly","Jane","Patrick","Lisbon","Jeevan","Anand","Umang","Jay"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})(window);
