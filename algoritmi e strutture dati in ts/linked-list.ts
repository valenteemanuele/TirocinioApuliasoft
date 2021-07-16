interface LinkedListNode<T> {
    value: T
    next?: LinkedListNode<T>
  }
  class LinkedList<T> {
    public head?: LinkedListNode<T> = undefined;
    public tail?: LinkedListNode<T> = undefined;

    
    add(value: T) {
      const node = {
        value,
        next: undefined
      }
      if (!this.head) {
        this.head = node;
      }
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    }

    
    *values() {
        let current = this.head;
        while (current) {
          yield current.value;
          current = current.next;
        }
      }

}

  const list = new LinkedList<number>();
  const numb = [1, 2, 4, 8];

  numb.map(x => list.add(x))

  for (const item of list.values()){
      console.log(item)
  }
