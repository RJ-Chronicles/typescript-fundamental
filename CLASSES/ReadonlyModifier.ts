/*
Use the readonly access modifier to mark a class property as immutable.
A readonly property must be initialized as a part of the declaration or in the constructor of the same class.

*/

class RulesAndRegulation {
  constructor(readonly workplaceRules: string[], public title?: string) {
    if (this.title) {
      this.title = title;
    }
    this.workplaceRules = workplaceRules;
  }
  showWorkplaceRules() {
    let Heading = this.title ? this.title : "Default title";
    return `${Heading} \n${this.workplaceRules.toString()} `;
  }
}

let officeRules = [
  "Maintain punctuality",
  "Know Operating Procedures",
  "Keep emotion at check",
  "Maintain confidentiality",
  "Be smart in work",
];

let regulation = new RulesAndRegulation(officeRules, "Rules and regulation");
console.log(regulation.showWorkplaceRules());
//regulation.workplaceRules = ['Clean your workplace']  //=> Cannot assign to 'workplaceRules' because it is a read-only property
