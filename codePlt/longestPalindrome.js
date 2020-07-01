function findLongestPalindrome(sentence) {
    let newSentence = sentence.replace(/[,:]/g, '');
    let sentences = newSentence.split(" ");
    let palindromes = [];
    let maxPal = '';
    for(let i in sentences){
        if(sentences[i] === sentences[i].split('').reverse().join('')) {
            palindromes.push(sentences[i]);
        }
    }
    for(let i=0; i<palindromes.length; i++){
        if(palindromes[i].length > maxPal.length){
            maxPal = palindromes[i];
        }
    }
    return maxPal;
}


console.log(findLongestPalindrome('This is an interesting sentence: kayak, november, anna'));

var testStr = 'kayak';
var newPal = testStr.split('').reverse().join('');
//console.log(newPal);


