var Singleton = /** @class */ (function () {
    function Singleton() {
        this.testMessage = "Hello Something!";
    }
    Singleton.getSingletonObject = function () {
        if (this.singleton == null) {
            console.log("New Object has been created!");
            this.singleton = new Singleton();
        }
        return this.singleton;
    };
    Singleton.prototype.alterTestMessage = function (newTestMessage) {
        this.testMessage = newTestMessage;
    };
    Singleton.prototype.getTestMessage = function () {
        return this.testMessage;
    };
    Singleton.singleton = null;
    return Singleton;
}());
var testSingleton = Singleton.getSingletonObject();
var testSingleton2 = Singleton.getSingletonObject();
var testSingleton3 = Singleton.getSingletonObject();
console.log(testSingleton.getTestMessage());
console.log(testSingleton2.getTestMessage());
console.log(testSingleton3.getTestMessage());
testSingleton.alterTestMessage("Happy Coding Mars!");
console.log(testSingleton2.getTestMessage());
