// const target = new Date();
// const handler = {};
// const proxy = new Proxy(target, handler);

// proxy.getDate();
// TypeError: this is not a Date object.

const target = new Date('2015-01-01');
const handler = {
    get(target, prop) {
        if (prop === 'getDate') {
            return target.getDate.bind(target);
        }
        return Reflect.get(target, prop);
    }
};
const proxy = new Proxy(target, handler);

proxy.getDate() // 1
