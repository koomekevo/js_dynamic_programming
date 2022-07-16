const grid_traveller = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 && n === 0) return 0;
    return grid_traveller(m - 1, n) + (n - 1, m);
};

console.log(grid_traveller(1, 1));
console.log(grid_traveller(2, 3));
console.log(grid_traveller(3, 2));
console.log(grid_traveller(3, 3));
console.log(grid_traveller(18, 18));
