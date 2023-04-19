function sum(arr, n) {
    if (n === 0) return 0;
    if (n > arr.length) return "invalid n param"
    if (n === 1) return arr[0];

    return arr[n-1] + sum(arr, n-1);
}

console.log(sum([10, 50, 1, 60], 4));