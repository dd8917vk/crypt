let lengthOfLongestSubstring = (s) => {
    let finalStr = '';
    let seen = [];
    for (let i=0; i<s.length; i++){
        seen.push(s[i]);
        letterCount = seen.filter(x => x === s[i]).length;
        if (letterCount > 1){
            finalStr+=s[i];
            return (s.slice(0, i));
        }

    }
}
console.log(lengthOfLongestSubstring('pwwkew'))
    