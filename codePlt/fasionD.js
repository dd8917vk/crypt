const currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
  
  
function getLaceNameDataForShoes(inventory) {
    
    let laced = [];
    for(let i in inventory){
        for(let j in inventory[i].shoes){
            let lacedObj = {}
            
            let isLaced = inventory[i].shoes[j].name;
            if(isLaced.includes("lace")){
                let tmpArray = isLaced.split(" ");
                lacedObj["nameWords"] = tmpArray;
                for (let pos in tmpArray){
                    if(tmpArray[pos].includes("lace")){
                        lacedObj["targetWordIndex"] = parseInt(pos);
                    }
                }
                laced.push(lacedObj);
            }           
            //tmpArray.push(inventory[i].shoes[j].name);
            //shoeArray.push(tmpArray);
        }
    }
    return laced;
}
console.log(getLaceNameDataForShoes(currentInventory));
  