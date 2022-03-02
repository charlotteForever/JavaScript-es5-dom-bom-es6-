// 这个是我在leetcode斐波那契数列中遇到的
var fib = function (n) {
    const MOD = 1000000007;
    let dp = [0, 1]
    if (n === 0 || n === 1) return dp[n]
    for (let i = 2; i <= n; i++) {
        // dp.push(dp[i-1]+dp[i-2])
        dp[i] = (dp[i - 1] + dp[i - 2])
    }
    // if (dp[n] > MOD) {
    //     return dp[n] % MOD
    // } else {
    //     return dp[n]
    // }
    return dp[n]
};
console.log(fib(81))//184550588
console.log(fib(80))//184550588
console.log(fib(79))//184550588
// 9007199254740992