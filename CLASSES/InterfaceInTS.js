var printProgrammerDetails = function (programmer) {
    return "Hi there! I am ".concat(programmer.name, " and i am ").concat(programmer.profile, ". I earn ").concat(programmer.salary, " month.");
};
console.log(printProgrammerDetails({
    name: "Jack",
    salary: 2000,
    profile: "Web developer"
}));
