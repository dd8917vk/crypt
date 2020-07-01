function countNumberOfKeys(obj) {
    let totalKeys = 0;
    let keys = Object.keys(obj);
    for(key in keys){
        totalKeys+=1;
    }
    return totalKeys;
}

  var object = {
  a: 1,
  b: 2,
  c: 3
}

var output = countNumberOfKeys(object)
console.log(output);