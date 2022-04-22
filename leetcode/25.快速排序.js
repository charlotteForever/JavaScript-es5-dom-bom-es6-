const _quickSort = (array) => {
    // 补全代码
    let left = 0
    let right = array.length - 1
    if (left === right) {
        return
    }
    let pivot = array[left]
    while (left < right) {
        // 右边一直大于pivot，就一直right--
        while (array[right] > pivot) {
            right--
        }
        // 如果右边大于pivot，交换并left++
        if (array[right] <= pivot) {
            array[left] = array[right]
            left++
        }
        // 左边一直小于pivot，一直left++
        while (array[left] < pivot) {
            left++
        }
        // 如果有一个
        if (array[left] > pivot) {
            array[right] = array[left]
            right--
        }
    }
    array[right] = pivot
    _quickSort(array.slice(0, right))
    _quickSort(array.slice(right + 2))
    return array
}
_quickSort([0, -1, 1, -2, 2])
console.log(_quickSort([0, -1, 1, -2, 2]))
