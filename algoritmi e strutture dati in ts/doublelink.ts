interface DoublyLinkedListNode<T> {
    value: T
    next?: DoublyLinkedListNode<T>
    prev?: DoublyLinkedListNode<T>
  }

  class DoublyLinkedList<T> {
    public head?: DoublyLinkedListNode<T> = undefined;
    public tail?: DoublyLinkedListNode<T> = undefined;

    add(value: T) {
        const node:DoublyLinkedListNode<T>= {
          value,
          next: undefined,
          prev: undefined,
        }
        if (!this.head) {
          this.head = node;
        }
        if (this.tail) {
          this.tail.next = node;
          node.prev = this.tail;
        }
        this.tail = node;
      }

      pop(): T | undefined {
        if (this.tail) {
          const value = this.tail.value;
          this.tail = this.tail.prev;
          if (!this.tail) {
            this.head = undefined;
          }
          else {
            this.tail.next = undefined;
          }
          return value;
        }
      }
    
      /**
       * Returns an iterator over the values
       */
      *values() {
        let current = this.head;
        while (current) {
          yield current.value;
          current = current.next;
        }
      }
  }  

  const double = new DoublyLinkedList<string>();

  double.add("ciao")
  double.add("ema");

  console.log(double.pop())
  /**
  for(const item of double.values()){
      console.log(item)
  }
   */