let person = {
    name: '',
    age: 0
}
let data = {
    name: 'caicai',
    age: 20
}
Object.keys(person).forEach((key) => {
    Object.defineProperty(person, key, {
        get: () => {
            return { data }
        },
        set: (val) => {

        }
    })
})
