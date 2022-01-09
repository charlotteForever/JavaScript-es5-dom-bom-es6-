let count = 0;
let plusCount = () => {
    count++
};
setTimeout(() => {
    console.log('a.js', count)
}, 1000)

module.exports = {
    count,
    plusCount
}
