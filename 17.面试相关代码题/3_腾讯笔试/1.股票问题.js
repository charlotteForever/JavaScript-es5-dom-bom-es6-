const n = 6
let assets = 2
let socket = 0
const price = [2, 3, 1, 1, 1, 2]
for (let i = 0; i < n - 1; i++) {
    // 如果当前股票价格比最后一天便宜，并且买得起 就买
    if (price[i] <= price[n - 1] && price[i] <= assets) {
        assets -= price[i]
        socket += 1
    } else if (price[i] > price[n - 1] && socket > 0) {
        assets += price[i]
        socket -= 1
    }
}
console.log(assets + socket * price[n - 1])