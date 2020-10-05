class Queue {
    constructor(capacity) {
        this._capacity = capacity || infinity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }

    // O(1)
    enqueue(value) {
        if(this.count() < this._capacity) {
            this._storage(this._tail++) = value;
            return this.count();
        }
        return 'Max capacity already reached. Remove element before adding a new one.';
    }

    // O(1)
    dequeue() {
        const element = this._storage[this._head];
        delete this._storage[this._head];
        if(this._head < this._tail) this._head++;
        return element;
    }

    peek() {
        return this._storage[this.head];
    }

    count() {
        return this._tail - this._head;
    }

    contains(value) {
        for(let i = this._head; i < this._tail; i++) {
            if(this._storage[i] === value) return true;
        }
        return false;
    }

    until(value) {
        for(let i = this._head; i < this._tail; i++) {
            if(this._storage[i] === value) return i - this._head + 1;
        }
        return null;
    }
}

const queue = new Queue(5);

console.log('empty: ', queue)

queue.enqueue('hello');
queue.enqueue('my');
queue.enqueue('is');
queue.enqueue('milk');
console.log('full: ', queue)
queue.dequeue();
queue.dequeue();
console.log('after two dequeues: ', queue)
console.log('check: ', queue.contains('milk'));
console.log(queue);