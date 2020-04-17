const getIndexOf = (char, str) => {
    var i;
    
    for(i=0;i<str.length;i++){
        if(str[i]==char){
            
            return i;
        }
    }
    return -1;
  }
var output = getIndexOf("h", "bear");
console.log(output);
