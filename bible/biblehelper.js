//For fetching when running server.
//var data = require('./master.json');

//for fetching json when running server.  Can chagne url to local
//fetch("https://raw.githubusercontent.com/dd8917vk/crypt/master/bible/master.json")
var obj;

fetch("http://127.0.0.1:8080/bible/master.json")
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
//test regex

//commented out kepress part
//used mod div for function instead.
function getInput(){

    document.getElementById("search").onkeyup = function(){
        getKeyPress();
    }
    function getKeyPress(){
        let input = document.getElementById("search").value;
        let c = event.keyCode;
        let k = String.fromCharCode(c);
        //if(input.length % 3 == 0){
        if(k == " "){
            console.log('you just typed a space');
            bibleSearch();
        }
    }
}
    
function bibleSearch(){
    var searchResults = bibleSearch_helper();
      //console.log(searchResults);
      var text = '';
      for(let i in searchResults){
          text+="<p>"+searchResults[i]+"</p>";
      }
      document.getElementById('output').innerHTML = text;
}

var regexStr = '';
//This is the bible search function.  It is needed to search for the matching regex
function bibleSearch_helper(){
    let searchResults = [];
    let input = document.getElementById("search").value;
    //let searchString = '';
    let searchWords = input.split(' ');
    //console.log(searchString);
    console.log(searchWords);
    //for(i in input){
        //let searchChar = input.charAt(i).toLowerCase();
        //searchString+=searchChar;
        //console.log(regexStr);
    //}
    var buildRegex = '';
    var beginRegex = '^';
    var endRegex = '.*$';
    for(let word in searchWords){
        console.log(searchWords[word]);   
        //To eliminate extra space being added to regex
        if(searchWords[word] != ""){
            buildRegex += '(.*\\b'+searchWords[word]+' '+'?\\b)';
            console.log(buildRegex);
        }
    }
    finalRegex = new RegExp(beginRegex+buildRegex+endRegex, 'i');
    console.log(finalRegex);
    regexStr=finalRegex;
    //regexStr = new RegExp('^(.*\b'+searchString+'?\b).*$');
    //regexStr = new RegExp('.*'+searchString+'?', 'i');
    let obj_len = obj.length;
    for(let i=0; i<obj_len; i++){

        let obj_len2 = obj[i].chapters.length;
        for(let j=0; j<obj_len2; j++){

            let obj_len3 = obj[i].chapters[j].verses.length;
            for(let k=0; k<obj_len3; k++){
                if(obj[i].chapters[j].verses[k].text.match(regexStr)){
                    //console.log(obj[i].book);
                    //console.log(obj[i].chapters[j].chapter);
                    //console.log(obj[i].chapters[j].verses[k].verse);
                    //console.log(obj[i].chapters[j].verses[k].text);
                    //console.log('-----------');

                    searchResults.push(obj[i].book);
                    searchResults.push(obj[i].chapters[j].chapter);
                    searchResults.push(obj[i].chapters[j].verses[k].verse);
                    searchResults.push(obj[i].chapters[j].verses[k].text);

                }
                if(searchResults.length > 160){
                    return [];
                }
            }
        }
    }
    return searchResults;
}
//console.log(obj[0].chapters[0].verses[0].text);