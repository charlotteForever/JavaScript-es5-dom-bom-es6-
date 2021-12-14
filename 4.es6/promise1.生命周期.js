//不能通过变成手段检测promise生命状态，只有当其状态改变时，通过then确定下一步做什么
var fs = require("fs");
let promise = fs.readFile("example.txt");