function Find(num, arr) {
    let i = arr[0].length - 1
    let j = 0
    while (i >= 0 && j >= arr.length - 1) {
        if (arr[i][j] === num) {
            return num
        } else if (arr[i][j] < num) {
            j++
        } else if (arr[i][j] > num) {
            i--
        }
    }

}