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

function encrypt(){

    var input = document.getElementById("pInput").value;
    var valueText = "";

    for(i in input){
        var littleStr = input.charAt(i);
        littleStr = littleStr.toLowerCase();
        if(littleStr in alpha){
            valueText+=alpha[littleStr];  
        } else { valueText+=" ";}
    }
    document.getElementById("outputCipher").innerHTML = valueText;
}

function decrypt(){
    var input = document.getElementById("cInput").value;
    var valueText = "";

    var keyValues = Object.entries(alpha);

    for(i in input){
        var littleStr = input.charAt(i);
        littleStr = littleStr.toLowerCase();
        for(var i in keyValues){
            var key = keyValues[i][0];
            var value = keyValues[i][1];
            if(littleStr == value){valueText+=key;}
            if(littleStr == " "){valueText+=" ";}
        }
    }
    document.getElementById("outputPlain").innerHTML = valueText;

}
