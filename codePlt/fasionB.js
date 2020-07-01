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

function renderAverageCostPerDesigner(inventory){
    newObj = {
        'designers':[]
    };
    for(let i in inventory){
        let tmpObj = {};
        tmpObj.name = inventory[i].name;
        newObj['designers'].push(tmpObj);
        let totalPrice = 0;
        let numShoes = 0;
        for(let j in inventory[i].shoes){
            totalPrice+=inventory[i].shoes[j].price;
            numShoes+=1;
        }
        let avgPrice=totalPrice/numShoes;
        tmpObj.averagePrice = avgPrice;
    }

    return newObj;
}
console.log(renderAverageCostPerDesigner(currentInventory));