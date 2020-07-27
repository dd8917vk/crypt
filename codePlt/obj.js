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

let cats = [
    {
        'name':'harold',
        'weight': 10,
        'clean' : false,
        'color' : 'offwhite',
        'parasites' : ['worms', 'ticks', 'fleas']
    },
    {
        'name':'max',
        'weight': 11,
        'clean': true,
        'color' : "milkcow",
        'parasites' : ['worms']
    }
]

function lookupCat(name){
  for(i in cats){
    if(cats[i]['name'] === name){
      console.log(cats[i]['name']+` has ${cats[i]['parasites']}`)
    }
  }
}
//lookupCat('max');

function giveMedicine(name, medicine){
  for(i in cats){
    if(cats[i]['name'] === name){
      for(j in cats[i]['parasites']){
        if(cats[i]['parasites'][j] === medicine){
          cats[i]['parasites'].splice(j, 1);
          console.log(cats[i]['parasites'])
        }
      }
    }
  }
}
giveMedicine('max', 'ticks')