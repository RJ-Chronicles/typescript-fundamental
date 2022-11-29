abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}
  getfullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  abstract getSalary(): number;
  compensationStatement(): string {
    return `${this.firstName} makes ${this.getSalary()} in a month`;
  }
}

class fullTimeEmployee extends Employee {
  constructor(name: string, surname: string, private salary: number) {
    super(name, surname);
  }
  getSalary(): number {
    return this.salary;
  }
}

class ContractBasedEmployee extends Employee {
  constructor(
    name: string,
    surname: string,
    private hours: number,
    private rate: number
  ) {
    super(name, surname);
  }
  getSalary(): number {
    return this.hours * this.rate;
  }
}
