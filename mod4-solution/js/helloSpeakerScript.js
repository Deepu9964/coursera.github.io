(function (window){
    var helloSpeaker = new Object();
    var word = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(word + " " + name);
    };
    window.helloSpeaker = helloSpeaker;

})(window);