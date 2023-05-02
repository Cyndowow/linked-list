import LinkedList from "./linkedList.js";

//Tests
const linkedList = new LinkedList();

linkedList.prepend("prepend test 1");
linkedList.append("append test 1");
linkedList.append("append test 2");
//to String 
console.log(linkedList.toString()); // (prepend test 1) -> (append test 1) -> (append test 2) -> null
//size
console.log(linkedList.size()); // 3
//head
console.log(linkedList.head()); // Node { value: 'prepend test 1', nextNode }
//tail
console.log(linkedList.tail()); // Node { value: 'append test 2', nextNode: null }
//at
console.log(linkedList.at(2)); // Node { value: 'append test 2', nextNode: null }
console.log(linkedList.at(4)); // "No item with this index found."
//pop
linkedList.pop();
console.log(linkedList.toString()); //  (prepend test 1) -> (append test 1) -> null
//contains
console.log(linkedList.contains("append test 1")); // true
//find
linkedList.prepend("prepend test 2");
console.log(linkedList.find("prepend test 1")); // 1
//insertAt
linkedList.insertAt("insert test", 2);
console.log(linkedList.toString()); //  (prepend test 2) -> (prepend test 1) -> (insert test) -> (append test 1) -> null
linkedList.insertAt("insert test 2", 10);
//removeAt
linkedList.removeAt(2);
console.log(linkedList.toString()); // (prepend test 2) -> (prepend test 1) -> (append test 1) -> (insert test 2) -> null

