//Generic interfaces that describe object properties

interface Pair<T, K> {
  key: K;
  value: T;
}

let month: Pair<string, number> = {
  key: 1,
  value: "jan",
};

//Generic interfaces that describe methods

interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T> {
  Items: T[] = [];
  add(o: T): void {
    this.Items.push(o);
  }
  remove(o: T): void {
    let indexToRemove = this.Items.indexOf(o);
    if (indexToRemove > -1) {
      this.Items.splice(indexToRemove, 1);
    } else throw new Error("Element not exist");
  }
  list() {
    return this.Items;
  }
}

let myCollection = new List<number>();
myCollection.add(20);
myCollection.add(40);
console.log(myCollection.list());
myCollection.remove(40);
try {
  myCollection.remove(40);
} catch (e) {
  console.log(e);
}

console.log(myCollection.list());
