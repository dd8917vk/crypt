nums = [1,5,3,9,5];
function average(numbers) {
    // process array of numbers
    var total = 0; 
    for(var i in numbers){
      total+=numbers[i];
    }
    return total/numbers.length;
  }
  
  //function will accept an array of integers 
  //and return the average of those integers. For example:

  //average([1,2,3,4,5]) // should return 3