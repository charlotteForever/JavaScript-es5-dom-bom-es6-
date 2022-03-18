// @ts-ignore
class Event {
    events = {

    }
    // TODO
    $on(eventName, handler) {
        this.events[eventName] = handler
    }

    // TODO
    $emit(eventName, ...args) {
        this.events[eventName].call(this, ...args)
    }
}


// @ts-ignore
const e = new Event()
// @ts-ignore
e.$on('yyin-event', (msg) => {
    // ...
})
// @ts-ignore
e.$emit('yyin-event', 'hello!') 