import { add } from library1;

export function transformEvent(event, metadata) {
    const three = add(1, 2);
    event.three = three;
    return event;
}