import { strictEqual } from 'assert';

/**
 * Welcome to the interview test!
 *
 * Your task is to complete the implementation of the MessageReceiver and MessageObserver classes.
 *
 * MessageReceiver:
 * - Implement the receiveMessage method to store the received message in the messages array.
 * - Implement the lastMessage method to return the last received message.
 * - Implement the messageCount method to return the total number of received messages.
 *
 * MessageObserver:
 * - Implement the addReceiver method to add a receiver to the list of observers.
 * - Implement the removeReceiver method to remove a receiver from the list of observers.
 * - Implement the notify method to send a message to all the receivers.
 *
 * Good luck!
 */

export class MessageReceiver {
    constructor() {
        /**
         * Snip
         */
    }

    receiveMessage(message) {
        /**
         * Snip
         */
    }

    lastMessage() {
        /**
         * Snip
         */
    }

    messageCount() {
        /**
         * Snip
         */
    }
}

 export class MessageObserver {
    constructor() {
        /**
         * Snip
         */
    }

    addReceiver(receiver) {
        /**
         * Snip
         */
    }

    removeReceiver(receiver) {
        /**
         * Snip
         */
    }

    notify(message) {
        /**
         * Snip
         */
    }
}

/** ------------ TEST ------------ */

function test(description, callback) {
    try {
        callback();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            strictEqual(actual, expected);
        },
    };
}

test('MessageReceiver - receiveMessage should store the received message', () => {
    const receiver = new MessageReceiver();
    receiver.receiveMessage('Hello, world!');
    expect(receiver.lastMessage()).toBe('Hello, world!');
    expect(receiver.messageCount()).toBe(1);
});

test('MessageReceiver - lastMessage should return the last received message', () => {
    const receiver = new MessageReceiver();
    receiver.receiveMessage('Message 1');
    receiver.receiveMessage('Message 2');
    expect(receiver.lastMessage()).toBe('Message 2');
});

test('MessageReceiver - messageCount should return the total number of received messages', () => {
    const receiver = new MessageReceiver();
    receiver.receiveMessage('Message 1');
    receiver.receiveMessage('Message 2');
    receiver.receiveMessage('Message 3');
    expect(receiver.messageCount()).toBe(3);
});

test('MessageObserver - addReceiver should add a receiver to the list of observers', () => {
    const observer = new MessageObserver();
    const receiver1 = new MessageReceiver();
    const receiver2 = new MessageReceiver();
    observer.addReceiver(receiver1);
    observer.addReceiver(receiver2);
    expect(observer.receivers.length).toBe(2);
});

test('MessageObserver - removeReceiver should remove a receiver from the list of observers', () => {
    const observer = new MessageObserver();
    const receiver1 = new MessageReceiver();
    const receiver2 = new MessageReceiver();
    observer.addReceiver(receiver1);
    observer.addReceiver(receiver2);
    observer.removeReceiver(receiver1);
    expect(observer.receivers.length).toBe(1);
    expect(observer.receivers[0]).toBe(receiver2);
});
