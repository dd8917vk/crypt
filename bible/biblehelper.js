
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
    let tblResults = '';
    let text = '';
    let searchResultsLength = searchResults.length; 
    var tblBody = document.getElementsByClassName("tblBdy")[0];
    //divided by four because am returning book, chap, verse and text in each sub array
    let results = searchResultsLength / 4;
    if(searchResultsLength > 400){
        text+="<p>Too many results</p>";
        text+="<p>Results: "+results+"</p>";
    } else if(searchResultsLength < 400){
        text+="<p>Results: "+results+"</p>";

        
        for(let i=0; i<searchResultsLength; i++){

            //let tr = document.createElement("TR");
            //tr.setAttribute("class", "myTr");
            let row = tblBody.insertRow(0);
            row.setAttribute("class", "myTr");
            subSearchLen = searchResults[i].length;
            for(let j=0; j<subSearchLen; j++){
                let cell = row.insertCell(-1); 
                cell.innerHTML = searchResults[i][j];
                
                //let td = document.createElement("TD");
                //td.setAttribute("class", "myTd");
                //let ce =  document.createTextNode(searchResults[i][j]);
                //td.appendChild(ce);
                //tr.appendChild(td);
            }
            //tblBody.insertRow(tr);

            //tblBody.appendChild(tr);
            //tblResults+=tr+td.appendChild(ce);
            //text+="<p>"+searchResults[i]+"</p>";
        }
    }
    controls.deleteResults();
}


//This is the bible search function.  It is needed to search for the matching regex
function bibleSearch_helper(){
    let searchResults = [];
    let input = document.getElementById("search").value;
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