/*
Access modifiers change the visibility of the properties and methods of a class. 


                      / Public     => inside the class itself, outside the class as well as extended class
Access Modifiers ---->  Protected  => inside the class itselt and extended class
                     \  private    => only inside the class
*/

class AllAboutMe {
  private wakeupTime: number;
  private bedTime: number;
  public mostLikedActivities: string[];
  protected closeFriends: string[];
  protected food: string[];

  constructor(
    wakeupTime: number,
    bedTime: number,
    activities: string[],
    friends: string[],
    food: string[]
  ) {
    this.wakeupTime = wakeupTime;
    this.bedTime = bedTime;
    this.closeFriends = friends;
    this.mostLikedActivities = activities;
    this.food = food;
  }
  getMyPublicProperties() {
    return `${this.mostLikedActivities.toString()}`;
  }
  private myPrivatePropetiesOnlyICanSee() {
    return `I wake up at ${this.wakeupTime}am and go to bed at ${this.bedTime}pm`;
  }
  protected onlyMyFriendCanSeeIt() {
    return `what i eat to stay lean? => ${this.food.toString()}.\nWho are the best of friends? => ${this.closeFriends.toString()}`;
  }
  heyIWantToSeeMyPrivateData() {
    return this.myPrivatePropetiesOnlyICanSee();
  }
}

class MyBesties extends AllAboutMe {
  constructor(wakeupTime: number, betTime: number, v, d, e) {
    super(wakeupTime, betTime, v, d, e);
  }
  bestiesInvokingProtectedData() {
    return this.onlyMyFriendCanSeeIt();
  }
}

let act = ["Gymnastics", "calisthenics", "Reading", "Programming"];
let food = ["Eggs", "Salmon", "Soybeans"];
let friends = ["I", "Me", "Myself"];
let Mars = new AllAboutMe(5.3, 11, act, friends, food);
let Besties = new MyBesties(5.3, 11, act, friends, food);

console.log("Most Liked Activities");
console.log(Mars.getMyPublicProperties());
console.log("---------------------------------------------");
console.log("My Private data");
console.log(Mars.heyIWantToSeeMyPrivateData());
console.log("---------------------------------------------");
console.log("my Protected Data");
console.log(Besties.bestiesInvokingProtectedData());
console.log("---------------------------------------------");

//------------------------ShortHand--------------------------

class YogaClass {
  constructor(
    public location: string,
    private YogaMatCount: number,
    public yogaTeacher: string
  ) {
    //=> shorthand
    this.location = location;
    this.YogaMatCount = YogaMatCount;
    this.yogaTeacher = yogaTeacher;
  }
  fetchYougaCenterDetails() {
    return `This yoga center is located at ${this.location} and ${this.yogaTeacher} is the trainer having 10+ years of experience`;
  }
}
