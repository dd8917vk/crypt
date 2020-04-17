//function multiplyAll(arr) {
    //var product = 1;
    //// Only change code below this line
    //for (var i = 0; i < arr.length; i++){
      //for (var j = 0; j < arr[i].length; j++){
        //product *= j;
      //}
    //}
    
    //// Only change code above this line
    //return product;
  //}
  
 //console.log(multiplyAll([[1,2],[3,4],[5,6,7]]);

 // Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  var i=0;
  var n = contacts[i].firstName;
  var p = contacts[i][prop];
  for(i; i < contacts.length; i++){
    if(n == name && p != undefined){
      return p;
      break;
    }
  }
// Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));