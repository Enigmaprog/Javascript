const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i])
})

console.log(map);
console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
map.delete(key);
map.clear();
map.size;

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

// console.log(map);

// console.log(shops[0]);