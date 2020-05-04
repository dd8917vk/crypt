function removeStringValuesLongerThan(num, obj) {
   var values = Object.entries(obj);
   for(var i in values){
       console.log(values[i][0]);
       if(values[i][1].length > num){
           console.log(obj[values[i][0]]);
           delete obj[values[i][0]];
       }
   }
   return obj;
  }
  
  let competitorDetails = {
    name: 'Montana Slim',
    age: 20,
    location: 'Texas'
  }
  
  console.log(removeStringValuesLongerThan(6, competitorDetails)); 
// should return { age: 20,  location: 'Texas' }
//Write a function called "removeStringValuesLongerThan".

//Given a number and an object, "removeStringValuesLongerThan" 
//removes any properties on the given object whose values 
//are strings longer than the given number and returns the object. 
//Take a look at the example in the prompt to see what we mean.