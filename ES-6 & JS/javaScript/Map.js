let map = new Map();
map.set("erina" ,"Guggu");
map.set("king" , "mzk");
map.set("MZK" , "Millionaire");

map.forEach( (v , k) =>
{
    console.log(k, " : ", v)
});

for(let [k,v] of map)
{
    console.log(k,v);
}
console.log(map.has("king"));
console.log(map.get("MZK"))