#include <iostream>
#include <string>
#include <vector>
// 动态规划
using namespace std;
int main()
{
    string line;
    cin >> line;
    int len = line.size();
    vector<int> dp(len);
    for (int i = 0; i < len; i++)
    {
        if (i == 0)
        {
            dp[i] = 1;
        }
        if (i > 0)
        {
            dp[i] = dp[i - 1];
            // 如果前一个是1
            if (line.substr(i - 1, 1) != "0")
            {
                // 如果i不越界，当前dp加上dp[i-2](可以匹配双字符码)
                dp[i] += (i > 1 ? dp[i - 2] : 1);
            }
        }
        if (i > 1)
        {
            // 如果前前一个是1
            if (line.substr(i - 2, 1) != "0")
            {
                dp[i] += (i > 2 ? dp[i - 3] : 1);
            }
        }
    }
    cout << dp[len - 1] << endl;

    return 0;
}