class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const queue = new Queue();
console.log(queue.isEmpty()); // Deve exibir true
queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString()); // John, Jack
queue.enqueue('Camila')

console.log(queue.toString()) //John, Jack e Camila
console.log(queue.size()) //exibe 3
console.log(queue.isEmpty()) //exibe false
queue.dequeue() //remove John
queue.dequeue() //remove Jack
console.log(queue.toString()) // Camila