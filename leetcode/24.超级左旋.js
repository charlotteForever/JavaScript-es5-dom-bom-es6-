let n = 2
let days = [3, 3]
let data = [[1, 3, 2], [2, 1, 3]]
function getAbility(days, data) {
    let ability = []
    ability[0] = 0
    let more = []
    let less = []
    for (let i = 1; i < days; i++) {
        ability[i] = ability[i - 1]
        data.slice(0, i).forEach((el) => {
            if (el < data[i]) {
                less.push(el)
                ability[i]++
                // 如果之前的犯错次数大于今天
            } else if (el > data[i]) {
                ability[i]--
            }
        })
    }
    console.log(Math.max(...ability), ability[days - 1])

}
for (let i = 0; i < n; i++) {
    getAbility(days[i], data[i])
}