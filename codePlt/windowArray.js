let testArr = [2,2,4,6,2,5,5,5,5,7]
function quadruples(givenArray, evenOrOdd){

    let count = 0;

    for(let i = 0; i<givenArray.length; i++){
        let slidingWindow = givenArray.slice(i, i+4);
        if(slidingWindow.every((num)=>num%2===0&&slidingWindow.length===4&&evenOrOdd==='even')){
            count++;
        } else if(slidingWindow.every((num)=>num%2!==0&&slidingWindow.length===4&&evenOrOdd==='odd')){
            count++;
        }
    }
    return count;
}

console.log(quadruples(testArr, 'even'))
