function FizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    if (n % 3 === 0) {
        return "Fizz";
    }
    if (n % 5 === 0) {
        return "Buzz";
    }
    else {
        return n.toString();
    }
}
function convertCsvToUser(csvData) {
    var users = [];
    var lines = csvData.split("\n");
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line === "") {
            continue;
        }
        var _a = line.split(","), name_1 = _a[0], ageString = _a[1], premiumUserString = _a[2];
        var age = Number(ageString);
        var premiumUser = premiumUserString === "1";
        users.push({
            name: name_1,
            age: age,
            premiumUser: premiumUser
        });
    }
    for (var _b = 0, users_1 = users; _b < users_1.length; _b++) {
        var user = users_1[_b];
        if (user.premiumUser) {
            console.log("".concat(user.name, " (").concat(user.age, ")\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30E6\u30FC\u30B6\u30FC\u3067\u3059\u3002"));
        }
        else {
            console.log("".concat(user.name, " (").concat(user.age, ")\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30E6\u30FC\u30B6\u30FC\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"));
        }
    }
}
function main() {
    // for (let i = 1; i <= 100; i++) {
    //   console.log(FizzBuzz(i));
    // }
    // for (let i = 1; i <= 100; i++) {
    //   if (i % 3 === 0 && i % 5 === 0) {
    //     console.log("FizzBuzz");
    //   } else if (i % 3 === 0) {
    //     console.log("Fizz");
    //   } else if (i % 5 === 0) {
    //     console.log("Buzz");
    //   } else {
    //     console.log(i);
    //   }
    // }
    var csvData = "\n  uhyo,26,1\n  John Smith,17,0\n  Mary Sue,14,1\n  ";
    convertCsvToUser(csvData);
}
main();
