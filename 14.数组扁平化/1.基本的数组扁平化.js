var arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];
function flatten(arr) {
    return arr.reduce((res, next) => {
        return res.concat(Array.isArray(next) ? flatten(next) : next);
    }, []);
}
console.log(flatten(arr1))

// 数组扁平化
