persistence = (num) => {
    let result = 0;
    counter = 0;
    num = num.toString().split("");
    len = num.length+1;
    if (num.length === 1){
        return 0;
    }
    for (let i=0; i<len; i++){
        
        result = num.reduce((total,next) => total*next);
        //console.log(result);
        num = result.toString().split("");
        //console.log(num);
        //console.log(i);
        counter+=1
        if (num.length === 1) {
            break
        }
    }
    return counter;
}
console.log(persistence(999));