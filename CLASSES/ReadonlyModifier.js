/*
Use the readonly access modifier to mark a class property as immutable.
A readonly property must be initialized as a part of the declaration or in the constructor of the same class.

*/
var RulesAndRegulation = /** @class */ (function () {
    function RulesAndRegulation(workplaceRules, title) {
        this.workplaceRules = workplaceRules;
        this.title = title;
        if (this.title) {
            this.title = title;
        }
        this.workplaceRules = workplaceRules;
    }
    RulesAndRegulation.prototype.showWorkplaceRules = function () {
        var Heading = this.title ? this.title : "Default title";
        return "".concat(Heading, " \n").concat(this.workplaceRules.toString(), " ");
    };
    return RulesAndRegulation;
}());
var officeRules = [
    "Maintain punctuality",
    "Know Operating Procedures",
    "Keep emotion at check",
    "Maintain confidentiality",
    "Be smart in work",
];
var regulation = new RulesAndRegulation(officeRules, "Rules and regulation");
console.log(regulation.showWorkplaceRules());
//regulation.workplaceRules = ['Clean your workplace']  //=> Cannot assign to 'workplaceRules' because it is a read-only property
