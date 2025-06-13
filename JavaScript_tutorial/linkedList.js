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
         * @description: Create a node instance object (having value and next), newNode.next is then assign to head and this.head is then assign a new node, which will just have value and (next=null).
         */
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size += 1;
    }
    append(data){
        let newNode = new Node(data);
        if (this.head == null){
            this.head = newNode;
            return;
        }
        else {
            let current = this.head;
            while (current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    insertNodeAt(data, n){
        let data = new Node(data);
    }
    printList(){
        let values = [];
        let current = this.head;
        while (current){
            values.push(current.value);
            current = current.next;
        }
        return values.join("->") + "-> null";
    }
}

const myList = new Singly_linked_list();
myList.prepend([1, 2, 3]);
myList.prepend([4, 5, 6]);
myList.prepend([7, 8, 9]);
myList.prepend([10, 11, 12]);
myList.prepend(["a", " b", " c", " d"]);

console.log(myList.getSize());
console.log(myList.printList())