const linearSearch = (arr, val) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return 'not found';
};

const output = linearSearch(['a', 'b', 'c', 'd', 'c'], 'c');
console.log(output);
