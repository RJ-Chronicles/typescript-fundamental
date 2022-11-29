//enum is special type in ts that holds the named constant values.

enum Role {
  ADMIN,
  DEVELOPER,
  TESTER,
  DESIGNER,
}

const processData = (role: Role): { message: string; status: string } => {
  console.log(role);
  let acknowledge: { message: string; status: string } = {
    message: "",
    status: "",
  };
  if (role === Role.ADMIN) {
    acknowledge.message = `Welcome ${role}`;
    acknowledge.status = "success";
  } else {
    acknowledge.message = `Welcome ${role}`;
    acknowledge.status = "failed";
  }
  return acknowledge;
};

console.log(processData(Role.ADMIN));
