const findAvg = (a,b,c) => 
{console.log("finding avergae :  ")
    return (a+b+c)/3;
}
// module.exports = findAvg

// mymod.js
const findAvgs = (a, b) => {
    console.log("finding average : ");
    return (a + b) / 2;
};

module.exports = {findAvgs,findAvg};
