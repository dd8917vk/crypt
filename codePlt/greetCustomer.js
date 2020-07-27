const customerData = {
    'Joe': {
    visits: 1
    },
    'Carol': {
    visits: 2
    },
    'Howard': {
    visits: 3
    },
    'Carrie': {
    visits: 4
    }
};
   
   // Your code for Part One here: 
function greetCustomer(name) {
    if(!(name in customerData)){
        return "Welcome! Is this your first time?"; 
    } else if (customerData[name].visits === 1) {
        return `Welcome back, ${name}! We're glad you liked us the first time!`;
    } else {
        return `Welcome back, ${name}!, So glad to see you again!`;
    }
    //"Welcome! Is this your first time?" //not present
    //"Welcome back, Joe! We're glad you liked us the first time!" //one visit
    //"Welcome back, Carol! So glad to see you again!" //more than one visit

}
   
   
// Your code for Part Two here: 
function isIsogram(text) {
    textArr = text.split("");
    let firstSet = new Set(textArr);
    return firstSet.size == textArr.length;
}

function isoGram(text){
    let count = 1;
    let obj = {};
    let textArr = text.split("");
}
console.log(isoGram("bonanza"));
