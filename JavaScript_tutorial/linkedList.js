// To create link list.
/**
 * Params required are:
 * 1. head
 * 2. next
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Singly_linked_list{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    prepend(data){
        /**
         * @description: Create a node instance object (having value and next), newNode.   next is then assign to head and this.head is then assign a new node, which will just have value and (next=null).
         */
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    append(data){
        newNode = new Node(data);
        if (this.head == null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}