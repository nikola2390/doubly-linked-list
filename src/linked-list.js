const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        let currentIndex = 0;
        while( node !== null) {
            if (currentIndex === index) {
                return node.data;
            }

        currentIndex++;
        node = node.next;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);
        let count = 0;
        let currentNode = this._head;

        
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        

        currentNode.data = data;
        this.length++;
        
        return this;


    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        let node = new Node();
        this._head = node;
        this._tail = node;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let count = 0;
        let currentNode = this._head;

        if (index === 0) {
            this.head = currentNode.next;
            currentNode.prev = null;
        } else {

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        }

        this.length--;
        return this;

    }

    reverse() {
        let count = 0;
        let head = this._head;
        let tail = this._tail;

        while (count < this.length/2){
            let buff = head.data;
            head.data = tail.data;
            tail.data = buff;
            head = head.next;
            tail = tail.prev;
            count++;

        }


        return this;
    }

    indexOf(data) {
        let count = 0;
        let currentNode = this._head;

        while (count < this.length) {
            if (currentNode.data === data) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }

        return -1;
    }
}

module.exports = LinkedList;
