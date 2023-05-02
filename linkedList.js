import Node from "./node.js"

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if(this.listHead == null) {
            this.listhead = new Node(value);
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    prepend(value) {
        let tmp = null;
        if (this.listHead != null) {
            tmp = this.listHead;
        }
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    size(){
        let tmp = this.listHead;
        let counter = 0;
        while (tmp != null) {
            counter++;
            tmp = tmp.nextNode;
        }

        return counter;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
            if (tmp == null) {
                return "No item with this index found.";
            }
        }

        return tmp;
    }

    pop() {
        let cur = this.listHead;
        let prev = null;
        while (cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while (tmp != null) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null) {
            if(tmp.value === value) {
                return index;
            }
            tmp = tmp.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let tmp = this.listHead;
        let stringlist = "";
        while (tmp != null) {
            stringlist += ` (${tmp.value}) ->`;
            tmp = tmp.nextNode;
        }
        return (stringlist += " null");
    }

    insertAt(value, index) {
        if(this.listHead == null) {
            this.prepend(value);
        } else {
            let cur = this.listHead;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = cur;
                cur = cur.nextNode;
                if (cur == null) break;
            }
            const tmp = new Node(value);
            prev.nextNode = tmp;
            tmp.nextNode = cur;
        }
    }

    removeAt(index) {
        if(this.listHead == null) {
            return "This list is empty.";
        }
    
        let cur = this.listHead;
        let prev = null;
        for(let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.nextNode;
            if (cur == null) return "No item found at index."
        }
        prev.nextNode = cur.nextNode;
    }

}