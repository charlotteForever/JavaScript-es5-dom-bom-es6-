let seats = [1, 0, 0, 0, 1, 0, 0, 1]
let dp = []
dp[0] = seats[0] === 1 ? 0 : 1
for (let i = 1; i < seats.length; i++) {
    dp[i] = seats[i] === 0 ? dp[i - 1] + 1 : 0
}
console.log(dp)
let maxSpace = dp.indexOf(Math.max(...dp))
console.log(Math.ceil((maxSpace + 1) / 2))