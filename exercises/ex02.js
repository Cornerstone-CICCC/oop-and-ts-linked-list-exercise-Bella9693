// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here
  let runner = list.getHead();

  while (runner) {
    if (runner.data === value) {
      const prevNode = runner.prev;
      const nextNode = runner.next;

      if (prevNode) {
        prevNode.next = nextNode;
      } else {
        list.setHead(nextNode);
      }

      if (nextNode) {
        nextNode.prev = prevNode;
      } else {
        list.setTail(prevNode);
      }

      list.setSize(list.length() - 1);
    }
    runner = runner.next;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
