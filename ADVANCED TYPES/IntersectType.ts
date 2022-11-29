//An intersection type combines two or more types to create a new type that has all properties of the existing types.

interface BussinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: string;
  name: string;
}
interface Contact {
  email: string;
  phone: number;
}

type Employee = BussinessPartner & Contact;
let Mars: Employee = {
  name: "Jack",
  credit: 1000,
  email: "mars@gmail.com",
  phone: 20000, //=> mandatory
};

type Employee2 = BussinessPartner | Contact;
let John: Employee2 = {
  name: "Jack",
  credit: 1000,
  email: "mars@gmail.com",
  //phone:20000 => not mandatory
};

type Developer = BussinessPartner & Identity;
let Millie: Developer = {
  name: "Millie",
  credit: 40000,
  id: "10000",
};
