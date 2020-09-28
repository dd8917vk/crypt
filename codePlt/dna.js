DNAStrand = (dna) => {
    rStr = '';
    dna = dna.toUpperCase();
    let obj = {
        'A': 'T',
        'C': 'G',
        'T': 'A',
        'G': 'C',
    }
    for (let i in dna){
        if (dna[i] in obj){
            rStr+=obj[dna[i]]; 
        }
    }
    return (rStr);
}


console.log(DNAStrand('ATTG'));