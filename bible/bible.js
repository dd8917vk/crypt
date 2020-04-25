var data = require('./master.json');

//test regex
var regex = /.*the.*temple.*of.*the.*lord/i;


//This is the bible search function.  It is needed to search for the matching regex
function bibleSearch(regex){
    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].chapters.length; j++){
            for(let k=0; k<data[i].chapters[j].verses.length; k++){
                if(data[i].chapters[j].verses[k].text.match(regex)){
                    console.log(data[i].chapters[j].verses[k].text);
                }
            }
        }
    }
}
bibleSearch(regex);
//console.log(data[0].chapters[0].verses[0].text);