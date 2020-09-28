SeriesSum = (n) => {
    if(n==0){
        return "0.00";
    }
    naturalNums = []
    deeNom = 1
    for(let i=1; i<=n; i++) {
        naturalNums.push(1/deeNom);
        deeNom+=3;
    }
    let sum = naturalNums.reduce((a,b) => a+b);
    return sum.toFixed(2);

}
console.log(SeriesSum(4));