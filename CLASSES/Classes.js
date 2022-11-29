var Workout = /** @class */ (function () {
    function Workout(day, listOfExercise, timeDuration) {
        this.day = day;
        this.listOfExercise = listOfExercise;
        this.timeDuration = timeDuration;
    }
    Workout.prototype.getWorkoutInfo = function () {
        var timeInMinutes = this.timeDuration * 60;
        return "On ".concat(this.day, "  you have done ").concat(this.listOfExercise.toString(), " exercises for ").concat(timeInMinutes, " minutes");
    };
    return Workout;
}());
var list = [
    "Flat Barbell Bench Press",
    "Incline Bench Press",
    "Seated Shoulder Press",
    "Flat Bench Dumbell Flyes",
    "Standing Dumbell Lateral Raises",
    "Tricep Rope Pushdown",
    "EZ Bar Skullcrusher",
];
var MarsWorkout = new Workout("Monday", list, 1.5);
console.log(MarsWorkout.getWorkoutInfo());
