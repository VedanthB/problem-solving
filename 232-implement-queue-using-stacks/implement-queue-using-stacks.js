class MyQueue {
    constructor(size = 16) {
        this.queue = new Array(size)

        // Tracks the index of the front and last element.
        this.start, this.end = -1
        // maximum number of elements the queue can hold
        this.maxSize = size
        // current size
        this.currSize = 0
    }

    // Enqueue Operation
    push(x) {
        // Check if the queue is full
        if(this.currSize === this.maxSize) {
            console.log('Queue is full')
            process.exit(1);
        }
        // if queue is empty, initialize start and end
        if(this.end === -1) {
            this.start = this.end = 0
        } else {
            // circular increment
            this.end = (this.end + 1) % this.maxSize
        }

        this.queue[this.end] = x
        // console.log('The element is pushed ' + x)
        this.currSize++
    }

    // Dequeue Operation
    pop() {
        // queue is empty
        if(this.start === -1) {
            console.log("Queue is empty")
            process.exit(1);
        }

        let popped = this.queue[this.start]

        // if only element in queue
        if(this.currSize === 1) {
            this.start = this.end = -1
        } else {
            // circular increment
            this.start = (this.start + 1) % this.maxSize
        }
        this.currSize--
        return popped
    }

    peek() {
        // queue is empty
        if(this.start === -1) {
            console.log("queue is empty")
            process.exit(1);
        }

        return this.queue[this.start]
    }

    empty() {
        return this.currSize === 0 
    }
}