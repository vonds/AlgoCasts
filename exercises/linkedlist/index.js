// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// 1
class Node {

}

// 2
class Node {

}

// 3
class Node {

}

// 4
class Node {

}

// 5
class Node {
    
}

// 6

// 7

// 8

// 9

// 10

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head
        while (node) {
            if (!node.next) break
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) return null
        const node = this.head
        this.head = this.head.next
        return node
    }

    removeLast() {
        if (!this.head) return null
        if (!this.head.next) return this.clear()
        let previous = this.head
        let node = this.head.next
        while (node.next) {
            previous = node
            node = node.next
        }
        previous.next = null
    }

 
    insertLast(data) {
        const last = this.getLast()
        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }
}

module.exports = { Node, LinkedList };
