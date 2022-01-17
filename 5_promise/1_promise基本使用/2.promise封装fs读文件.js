function myReadFile(url) {
    return new Promise((resolve, reject) => {
        // 参数先传err，再传data
        require('fs').readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

myReadFile('./5_promise/resource/content.txt').then((value) => {
    console.log(value.toString())
}, (reason) => {
    console.log(reason)
})