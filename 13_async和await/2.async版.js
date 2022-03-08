function myFunc2(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2)
        }, 1000)
    })
}

async function fn() {
    const res1 = await myFunc2(1)
    const res2 = await myFunc2(res1)
    console.log(res2)
}
fn()