var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["DEVELOPER"] = 1] = "DEVELOPER";
    Role[Role["TESTER"] = 2] = "TESTER";
    Role[Role["DESIGNER"] = 3] = "DESIGNER";
})(Role || (Role = {}));
var processData = function (role) {
    console.log(role);
    var acknowledge = {
        message: "",
        status: ""
    };
    if (role === Role.ADMIN) {
        acknowledge.message = "Welcome ".concat(role);
        acknowledge.status = "success";
    }
    else {
        acknowledge.message = "Welcome ".concat(role);
        acknowledge.status = "failed";
    }
    return acknowledge;
};
console.log(processData(Role.ADMIN));
