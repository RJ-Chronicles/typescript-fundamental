var doSomeWork = function (x, xx, xxx) {
    if (typeof x === "number") {
        return x;
    }
    return "something is still pending!";
};
console.log(doSomeWork("12", 55, 44));
