class Workout {
  day: string;
  listOfExercise: string[];
  timeDuration: number;

  constructor(day: string, listOfExercise: string[], timeDuration: number) {
    this.day = day;
    this.listOfExercise = listOfExercise;
    this.timeDuration = timeDuration;
  }

  getWorkoutInfo() {
    let timeInMinutes = this.timeDuration * 60;
    return `On ${
      this.day
    }  you have done ${this.listOfExercise.toString()} exercises for ${timeInMinutes} minutes`;
  }
}
let list = [
  "Flat Barbell Bench Press",
  "Incline Bench Press",
  "Seated Shoulder Press",
  "Flat Bench Dumbell Flyes",
  "Standing Dumbell Lateral Raises",
  "Tricep Rope Pushdown",
  "EZ Bar Skullcrusher",
];

let MarsWorkout = new Workout("Monday", list, 1.5);
console.log(MarsWorkout.getWorkoutInfo());
