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
    
    function renderInventory(inventory) {
    
        let blackShoeArray = [];
        for(let i in inventory){
            //name->console.log(currentInventory[i].name);
            for(let j in inventory[i].shoes){
                //console.log(currentInventory[i].shoes[j].name);
                //console.log(currentInventory[i].shoes[j].price);
                let tmpArray = [];
                let isBlack = inventory[i].shoes[j].name;
                if(isBlack.includes("black")){
                    tmpArray.push(inventory[i].name);
                    tmpArray.push(inventory[i].shoes[j].name);
                    tmpArray.push(inventory[i].shoes[j].price);
                    blackShoeArray.push(tmpArray);
                }
            }
        }
        return blackShoeArray;
    }
    console.log(renderInventory(currentInventory));
    //console.log(shoeArray);