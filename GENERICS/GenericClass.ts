class Stack<T> {
  private elements: T[] = [];
  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (!this.isFull()) {
      this.elements.push(element);
    } else {
      console.log("Stack is full!");
    }
  }
  pop(): T | string {
    if (!this.isEmpty()) {
      let lastIndex = this.elements.length - 1;
      //this.elements.pop();
      let toRemove = this.elements[lastIndex];
      this.elements.splice(lastIndex, 1);
      return toRemove;
    } else {
      return "Stack is Empty!";
    }
  }
  listElements(): T[] {
    return this.elements;
  }
}

let stack = new Stack<number>(4);
stack.push(20);
stack.push(120);
stack.push(210);
stack.push(20);
stack.push(120);
stack.push(210);
console.log(stack.listElements());

stack.pop();
console.log(stack.listElements());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("------------------------------------------------------");

let words = "The quick brown fox jumps over the lazy dog".split(" ");

//console.log(words);
let wordStack = new Stack<string>(words.length);
// push words into the stack
words.forEach((word) => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
