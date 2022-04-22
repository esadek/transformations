export function transformEvent(event, metadata) {
    event.foo = "bar";
    return event;
}