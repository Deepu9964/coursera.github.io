var names=["John", "Mary","Joe","Deepak","Lilly","Jane","Patrick","Lisbon","Jeevan","Anand","Umang","Jay"];
for (var name in names){
    var j="J";
    if(names[name].startsWith(j))
    {
        console.log("GoodBye J" + names[name]); 
    }
    else
    {
        console.log("Hello " + names[name]);
}
}