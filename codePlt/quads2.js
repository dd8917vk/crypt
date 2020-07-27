testArr = [6,4,2,2,5,5,5,5,5,4,2,2,2,2];
function quadruples(givenArray, evenOrOdd){
    let evenCount, oddCount = 0;
    for(let i in givenArray){
        let slidingWindow = givenArray.slice(i, parseInt(i)+4);
        if(slidingWindow.every((num)=>num%2===0&&slidingWindow.length===4)){
            evenCount+=1;
        } else if(slidingWindow.every((num)=>num%2!==0&&slidingWindow.length===4)){
            oddCount+=1;
        }
    }
    return (evenOrOdd === 'even' ? evenCount : oddCount);
}
console.log(quadruples(testArr, 'odd'));






