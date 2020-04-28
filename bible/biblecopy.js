//For fetching when running server.
//var data = require('./master.json');

//for fetching json when running server.  Can chagne url to local
//fetch("https://raw.githubusercontent.com/dd8917vk/crypt/master/bible/master.json")

//fetch("http://127.0.0.1:8080/bible/master.json")
  //.then(res => res.json())
  //.then(data => obj = data)
  //.then(() => {
  //});

var obj;
fetch("http://127.0.0.1:8080/bible/master.json")
.then(res => res.json())
.then(data => obj = data)
.then(() => console.log(obj))


var regexStr='';
var searchResults = createArray();

function getInput(){
    document.getElementById("search").onkeyup = function(){
        getKeyPress();
    }
    function getKeyPress(){
        let input = document.getElementById("search").value;
        //let c = event.keyCode;
        //let k = String.fromCharCode(c);
        if(input.length % 3 == 0){
        //if(k == " "){
            //console.log('you just typed a space');
            bibleSearch();
        }
    }
}

function bibleSearch(){
    let searchResults = bibleSearch_helper();
    //console.log(searchResults);
    var text = '';
    for(let i in searchResults){
        text+="<p>"+searchResults[i]+"</p>";
    }
    document.getElementById('output').innerHTML = text;
}


function bibleSearch_helper(){
    let input = document.getElementById("search").value;
    let searchString = '';
    for(i in input){
        let searchChar = input.charAt(i).toLowerCase();
        searchString+=searchChar;
        //console.log(regexStr);
    }
        regexStr = new RegExp('.*'+searchString+'?', 'i')
            for(let i=0; i<searchResults.length; i++){
                if(searchResults[i][3].match(regexStr)){
                }
            }
        return searchResults;
        }

function createArray(){
    let searchResults = [];
    for(let i=0; i<obj.length; i++){
        for(let j=0; j<obj[i].chapters.length; j++){
            for(let k=0; k<obj[i].chapters[j].verses.length; k++){
                var tempArray = [];
                            
                    tempArray.push(obj[i].book);
                    tempArray.push(obj[i].chapters[j].chapter);
                    tempArray.push(obj[i].chapters[j].verses[k].verse);
                    tempArray.push(obj[i].chapters[j].verses[k].text);
                    searchResults.push(tempArray);
        
                }
            }
        }
        return searchResults;
}