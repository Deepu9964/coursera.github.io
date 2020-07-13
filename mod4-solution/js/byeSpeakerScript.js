(function (window){
    var byeSpeaker = new Object();
    var Word = "Good Bye";
    byeSpeaker.speak = function(name) {
        console.log(Word + " " + name);
    };
    window.byeSpeaker = byeSpeaker;

}
    
    )(window);