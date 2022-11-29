class Singleton {
  private static singleton: Singleton = null;
  private testMessage: string = "Hello Something!";
  static getSingletonObject(): Singleton {
    if (this.singleton == null) {
      console.log("New Object has been created!");
      this.singleton = new Singleton();
    }
    return this.singleton;
  }
  public alterTestMessage(newTestMessage: string) {
    this.testMessage = newTestMessage;
  }
  public getTestMessage() {
    return this.testMessage;
  }
}

const testSingleton = Singleton.getSingletonObject();
const testSingleton2 = Singleton.getSingletonObject();
const testSingleton3 = Singleton.getSingletonObject();

console.log(testSingleton.getTestMessage());
console.log(testSingleton2.getTestMessage());
console.log(testSingleton3.getTestMessage());
testSingleton.alterTestMessage("Happy Coding Mars!");

console.log(testSingleton2.getTestMessage());
