//TypeScript interfaces define contracts in your code and provide explicit names for type checking.

interface Programmer {
  name: string;
  salary: number;
  profile: string;
}

const printProgrammerDetails = (programmer: Programmer): string => {
  return `Hi there! I am ${programmer.name} and i am ${programmer.profile}. I earn ${programmer.salary} month.`;
};

console.log(
  printProgrammerDetails({
    name: "Jack",
    salary: 2000,
    profile: "Web developer",
  })
);

//---------------------Optional and Readonly attribute/parameters--------------------------
interface Holidays {
  startDate: string;
  endDate: string;
  managerId?: string;
  readonly leavesRemain: string;
}

const printMyHolidayCal = (myLeaveManager: Holidays) => {
  let managerId = myLeaveManager.managerId ? myLeaveManager.managerId : "10001";
  return `Hi there! You are planning to take a leave from ${myLeaveManager.startDate}th Dec to ${myLeaveManager.endDate}th Dec and you have left ${myLeaveManager.leavesRemain} leaves. Once your manager ${managerId} approves your leave we will reach out to you!`;
};

//-------------------------Function types Interface--------------------

interface MyCustomCheckIFace {
  (input: string, isUppercase: boolean): string;
}

const toggleInput: MyCustomCheckIFace = (input, isUppercase): string => {
  let toggle = isUppercase
    ? input.toLocaleLowerCase()
    : input.toLocaleUpperCase();
  return toggle;
};
