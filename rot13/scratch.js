var alpha = {
    "a":"n",
    "b":"o",
    "c":"p",
    "d":"q",
    "e":"r",
    "f":"s",
    "g":"t",
    "h":"u",
    "i":"v",
    "j":"w",
    "k":"x",
    "l":"y",
    "m":"z",
    "n":"a",
    "o":"b",
    "p":"c",
    "q":"d",
    "r":"e",
    "s":"f",
    "t":"g",
    "u":"h",
    "v":"i",
    "w":"j",
    "x":"k",
    "y":"l",
    "z":"m"
}
var keyValues = Object.entries(alpha);
for(var i in keyValues){
    var key = keyValues[i][0];
    var value = keyValues[i][1];
}

if("x" in alpha){
    
    console.log(alpha["x"]);
}
