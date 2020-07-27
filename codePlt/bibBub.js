const { PassThrough } = require("stream");

function bibBub(num){
    return (num % 3 == 0) && (num % 2 == 0) ? "bibbub"
        : (num % 2 == 0) ? "bib" 
        : (num % 3 == 0) ? "bub" : "Not divisible by 2, 3 or both."
}
//console.log(bibBub(6));
