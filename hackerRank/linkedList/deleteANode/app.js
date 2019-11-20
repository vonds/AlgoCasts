function getAt(head, position) {
  let counter = 0;
  let node = head;
  while (node) {
    if (counter === position) return node;
    counter++;
    node = node.next;
  }
  return null;
}

function deleteNode(head, position) {
  if (position === 0) return (head = head.next);
  const previous = getAt(head, position - 1);
  if (!previous || !previous.next) return;
  previous.next = previous.next.next;
  return head;
}
