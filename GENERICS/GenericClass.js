var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (!this.isFull()) {
            this.elements.push(element);
        }
        else {
            console.log("Stack is full!");
        }
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            var lastIndex = this.elements.length - 1;
            //this.elements.pop();
            var toRemove = this.elements[lastIndex];
            this.elements.splice(lastIndex, 1);
            return toRemove;
        }
        else {
            return "Stack is Empty!";
        }
    };
    Stack.prototype.listElements = function () {
        return this.elements;
    };
    return Stack;
}());
var stack = new Stack(4);
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
var words = "The quick brown fox jumps over the lazy dog".split(" ");
//console.log(words);
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
