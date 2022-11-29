/*
Access modifiers change the visibility of the properties and methods of a class.


                      / Public     => inside the class itself, outside the class as well as extended class
Access Modifiers ---->  Protected  => inside the class itselt and extended class
                     \  private    => only inside the class
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AllAboutMe = /** @class */ (function () {
    function AllAboutMe(wakeupTime, bedTime, activities, friends, food) {
        this.wakeupTime = wakeupTime;
        this.bedTime = bedTime;
        this.closeFriends = friends;
        this.mostLikedActivities = activities;
        this.food = food;
    }
    AllAboutMe.prototype.getMyPublicProperties = function () {
        return "".concat(this.mostLikedActivities.toString());
    };
    AllAboutMe.prototype.myPrivatePropetiesOnlyICanSee = function () {
        return "I wake up at ".concat(this.wakeupTime, "am and go to bed at ").concat(this.bedTime, "pm");
    };
    AllAboutMe.prototype.onlyMyFriendCanSeeIt = function () {
        return "what i eat to stay lean? => ".concat(this.food.toString(), ".\nWho are the best of friends? => ").concat(this.closeFriends.toString());
    };
    AllAboutMe.prototype.heyIWantToSeeMyPrivateData = function () {
        return this.myPrivatePropetiesOnlyICanSee();
    };
    return AllAboutMe;
}());
var MyBesties = /** @class */ (function (_super) {
    __extends(MyBesties, _super);
    function MyBesties(wakeupTime, betTime, v, d, e) {
        return _super.call(this, wakeupTime, betTime, v, d, e) || this;
    }
    MyBesties.prototype.bestiesInvokingProtectedData = function () {
        return this.onlyMyFriendCanSeeIt();
    };
    return MyBesties;
}(AllAboutMe));
var act = ["Gymnastics", "calisthenics", "Reading", "Programming"];
var food = ["Eggs", "Salmon", "Soybeans"];
var friends = ["I", "Me", "Myself"];
var Mars = new AllAboutMe(5.3, 11, act, friends, food);
var Besties = new MyBesties(5.3, 11, act, friends, food);
console.log("Most Liked Activities");
console.log(Mars.getMyPublicProperties());
console.log("---------------------------------------------");
console.log("My Private data");
console.log(Mars.heyIWantToSeeMyPrivateData());
console.log("---------------------------------------------");
console.log("my Protected Data");
console.log(Besties.bestiesInvokingProtectedData());
