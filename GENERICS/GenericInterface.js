//Generic interfaces that describe object properties
var month = {
    key: 1,
    value: "jan"
};
var List = /** @class */ (function () {
    function List() {
        this.Items = [];
    }
    List.prototype.add = function (o) {
        this.Items.push(o);
    };
    List.prototype.remove = function (o) {
        var indexToRemove = this.Items.indexOf(o);
        if (indexToRemove > -1) {
            this.Items.splice(indexToRemove, 1);
        }
        else
            throw new Error("Element not exist");
    };
    List.prototype.list = function () {
        return this.Items;
    };
    return List;
}());
var myCollection = new List();
myCollection.add(20);
myCollection.add(40);
console.log(myCollection.list());
//myCollection.remove(40);
try {
    myCollection.remove(40);
}
catch (e) {
    console.log(e);
}
console.log(myCollection.list());
