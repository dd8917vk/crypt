function triangle(num){
    if(isNaN(num)){
        return "You must enter an integer.";
    } 
    let star = '*';
    let starzArr = [];
    for(let i=num; i>0; i--){ 
        starzArr.push(star.repeat(i), '\n');
    }
    starzArr.pop();
    let finalStarz = starzArr.join('');
    return finalStarz; 
}
console.log(triangle(6));
