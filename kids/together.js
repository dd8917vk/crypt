
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

function encryptText(keyPress){
    let capturedKeys = keyPress.value;
    capturedKeys = capturedKeys.toLowerCase();
    let cipherText = '';
    for(let i=0; i<capturedKeys.length; i++){
        if(capturedKeys[i] in alpha){
            cipherText+=alpha[capturedKeys[i]];
        } else {
            cipherText+=" ";
        }
    }
    console.log(cipherText);
    document.getElementById("output").innerHTML = cipherText;

}
