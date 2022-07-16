const grid_traveller = (m, n, memo= {}) => {
    const key = m + ','+ n;
    // are the args in the memo
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key]= grid_traveller(m - 1, n, memo) + grid_traveller(m, n - 1, memo);
    return memo[key];
};

console.log(grid_traveller(1, 1));
console.log(grid_traveller(2, 3));
console.log(grid_traveller(3, 2));
console.log(grid_traveller(3, 3));
console.log(grid_traveller(18, 18));
