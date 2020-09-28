let a = [...Array(26)].map((_,y) => String.fromCharCode(y + 65)).join('').toLowerCase();
let b = ['a', 'b', 'c'].map(item => item+'hello');


var alphabet = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-·-·--":"!",
    "·-·-·-":".",
    "--··--":",",
    "...---...":"SOS",
    "-.-.--":"!"
 };

decodeMorse = (code) => {
    output = '';
    morse = [];
    code = code.trim()
    let s = code.split('   ');
    let l = s.length;
    for(let i in s){
        morse.push(s[i].split(' '));
    }
    for(let i in morse){
        console.log(morse[i]);
        for(let j in morse[i]){
            console.log(morse[i][j]);
            if (morse[i][j] in alphabet){
                output+=alphabet[morse[i][j]];
            }
        }
        output+=' ';
    }
    return output.toUpperCase().trim();
    }
     


console.log(decodeMorse('...---... -.-.--   .... . -.--   .--- ..- -.. .'))