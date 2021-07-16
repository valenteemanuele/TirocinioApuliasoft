 /** Lifo List in - First Out */
 
 class Stack<T> {
    private data: T[]=[]

    push(item: T): void {
        this.data.push(item)
    }

    pop(): T | undefined{
        return this.data.pop()
    
    }

    size(): number{
        return this.data.length
    }
}

const stack = new Stack<string>()

stack.push("1");
stack.push("2");

console.log(stack.pop())