let iqTest = (numbers) => {
    oddCount = 0;
    evenCount = 0;
    numArr = numbers.split(' ');
    for(let i in numArr){
        if(numArr[i] % 2 !== 0){
            oddCount++;
        } else {
            evenCount++;
        }
    }
    if(oddCount == 1){for(let i in numArr){if(numArr[i]%2 !==0){return parseInt(i)+1}}}
    else { if(evenCount == 1){for(let i in numArr){if(numArr[i]%2 ==0){return parseInt(i)+1}}}}

}



console.log(iqTest("2 4 6 8 10 13"));
console.log(iqTest("1 3 7 9 2"));