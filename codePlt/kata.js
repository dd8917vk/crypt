makeNegative = (num) => {
    if (num === 0) {return num} 
    else {if (num < 0) {return num}}
    return num * -1
    }


number = (busStops) => {
    on = 0
    off = 0
    for (let i in busStops) {
        on += busStops[i][0];
        off += busStops[i][1];

    }
    return on - off;
}
console.log(number([[10,0],[3,5],[5,8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));

