testArr = [6,4,2,2,5,5,5,5,5,4,2,2,2,2];

function quadruples(givenArray, evenOrOdd){
    //Window count keeps track of even or odd 4 in a row count.
    let windowCountEven = 0; 
    let windowCountOdd = 0;
    for(let i in givenArray){
        //sliding window makes temp array of four elements at a time.
        let slidingWindow = givenArray.slice(i, parseInt(i)+4);
        //isZeroOrOne checks if even or odd, returns false if odd. 
        let isEven = slidingWindow.every(function(num){
            return num % 2 === 0 && slidingWindow.length === 4;})
        let isOdd = slidingWindow.every(function(num){
            return num % 2 !== 0 && slidingWindow.length === 4;})
        if(isEven){
            windowCountEven+=1
        };
        if(isOdd){
            windowCountOdd+=1
        } 
    }
    return (evenOrOdd === 'even' ? windowCountEven : windowCountOdd);
}

console.log(quadruples(testArr, 'odd'));
