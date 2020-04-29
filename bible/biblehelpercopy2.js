
//For fetching when running server.
//var data = require('./master.json');

//for fetching json when running server.  Can chagne url to local
//fetch("https://raw.githubusercontent.com/dd8917vk/crypt/master/bible/master.json")
var obj;
var regexStr = '';

fetch("http://127.0.0.1:8080/bible/master.json")
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))

var controls = {
    deleteResults: function(){
        let text = '';
        let searchResults = bibleSearch_helper();
        let srl = searchResults.length;
        let rows = document.querySelectorAll(".myTr");
        console.log(rows.length);
    },
    styleTable: function(){

    }
}

//commented out kepress part
//used mod div for function instead.
function getInput(){
    document.getElementById("search").onkeyup = function(){
        //getKeyPress();
        bibleSearch();
    }
    //This is if you want to modulate the search by space bar or modulus division
    //function getKeyPress(){
        //let input = document.getElementById("search").value;
        //let c = event.keyCode;
        //let k = String.fromCharCode(c);
        //if(input.length % 2 == 0){
        ////if(k == " "){
            //console.log('you just typed a space');
            //bibleSearch();
        //}
    //}
}
 
function bibleSearch(){
    let searchResults = bibleSearch_helper();
    //console.log(searchResults);
    let text = '';
    let tbl = document.getElementsByClassName("tblBdy")[0];
    let sr = searchResults.length;
    let resText = '';
    if(sr < 20){
        for(let i=0; i<sr; i++){
            srl = searchResults[i].length;
            text+="<tr>";
            for(let j=0; j<srl; j++){
                console.log(searchResults[i][j]);
                text+="<td>"+searchResults[i][j]+"</td>";
            }
            text+="</tr>";
        }
        let res = document.getElementById("start");
        resText+="<li>Verses: "+sr+" &bull;"+"</li>";
        res.innerHTML = resText;
        tbl.innerHTML = text;
    } else {
        let res = document.getElementById("start");
        sr = searchResults.length;
        text+="<li>Verses: "+sr+" &bull;"+"</li>";
        res.innerHTML = text;
    }
}

//This is the bible search function.  It is needed to search for the matching regex
function bibleSearch_helper(){
    let searchResults = [];
    let input = document.getElementById("search").value;
    //to reset results to 0 top of page
    //let searchString = '';
    let searchWords = input.split(' ');
    //console.log(searchString);
    //for(i in input){
        //let searchChar = input.charAt(i).toLowerCase();
        //searchString+=searchChar;
        //console.log(regexStr);
    //}
    var buildRegex = '';
    var beginRegex = '^';
    var endRegex = '.*$';
    for(let word in searchWords){
        //To eliminate extra space being added to regex
        if(searchWords[word] != ""){
            buildRegex += '(.*\\b'+searchWords[word]+' '+'?\\b)';
        }
    }
    finalRegex = new RegExp(beginRegex+buildRegex+endRegex, 'i');
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
                    let tmpArray = [];
                    tmpArray.push(obj[i].book);
                    tmpArray.push(obj[i].chapters[j].chapter);
                    tmpArray.push(obj[i].chapters[j].verses[k].verse);
                    tmpArray.push(obj[i].chapters[j].verses[k].text);
                    searchResults.push(tmpArray);
                }
                //change this number to display more results.  multiples of 4
                //if(searchResults.length > 9600){
                    //return [];
                //}
            }
        }
    }
    return searchResults;
}