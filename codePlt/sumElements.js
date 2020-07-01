let testNums = {
    'one': [4, 1, 8], 
    'two': [3, 4, 5]
  };
  
  
  const getSumOfAllElementsAtProperty = (obj, key) => {
      let newObj = obj[key];
      if (!Array.isArray(newObj)){
          return 0;
      } else if (!obj.hasOwnProperty(key)){
          return 0;
      } else if (newObj.length===0){
          return 0;
      } else {
          const sum = obj[key].reduce((total, amount) => total + amount);
          return sum;
      }
  }
  
  getSumOfAllElementsAtProperty(testNums, 'one') // should return 13
  getSumOfAllElementsAtProperty(testNums, 'two') // should return 12