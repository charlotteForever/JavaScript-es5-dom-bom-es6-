// dp[i][j]代表从0,0位置到达当前位置的最短 
//来存矩阵
let detial = [3, 3]
let ground = Array.from(new Array(detial[0]), () => new Array(detial[1]).fill(0))
ground[0][0] = 1
ground[0][1] = 0
ground[0][2] = 0
ground[1][0] = 1
ground[1][1] = 1
ground[1][2] = 1
ground[2][0] = 0
ground[2][1] = 0
ground[2][2] = 1
let dp = Array.from(new Array(detial[0]), () => new Array(detial[1]).fill(0))

for (let i = 0; i < detial[0]; i++) {
    for (let j = 0; j < detial[1]; j++) {
        if (i === 0 && j === 0) {
            dp[0][0] = 0
        }
        //         如果是第一行且地形变化，dp[0][j]=dp[0][j-1]+2;如果地形没变化，加1
        else if (i === 0) {
            dp[0][j] = ground[0][j] !== ground[0][j - 1] ? dp[0][j] = dp[0][j - 1] + 2 : dp[0][j] = dp[0][j - 1] + 1
        }
        //         如果是第一列且地形变化，dp[i][0]=dp[i-1][0]+2;如果地形没变化，加1
        else if (j === 0) {
            dp[i][0] = ground[i][0] !== ground[i - 1][0] ? dp[i - 1][0] + 2 : dp[i - 1][0] + 1
        }
        //         如果是其他情况，取上面和右边变换后的最小值
        else {
            let choice1 = ground[i - 1][j] !== ground[i][j] ? dp[i - 1][j] + 2 : dp[i - 1][j] + 1
            let choice2 = ground[i][j - 1] !== ground[i][j] ? dp[i][j - 1] + 2 : dp[i][j - 1] + 1
            dp[i][j] = Math.min(choice1, choice2)
        }
    }
}
console.log(dp[detial[0] - 1][detial[1] - 1])