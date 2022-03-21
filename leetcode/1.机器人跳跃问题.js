var raw = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let n = parseInt(raw[0])
if (raw[1]) {
    var arr = raw[1].split(' ')
}
console.log(n)
console.log(arr)