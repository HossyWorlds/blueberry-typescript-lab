function FizzBuzz(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n.toString();
  }
}

type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

function convertCsvToUser(csvData: string): void {
  const users: User[] = [];

  const lines = csvData.split("\n");
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine === "") {
      continue;
    }

    const [name, ageString, premiumUserString] = trimmedLine.split(",");
    const age = Number(ageString);
    const premiumUser = premiumUserString === "1";

    users.push({
      name,
      age,
      premiumUser
    });
  }
  // console.log(users);

  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
  }
}

function sequence(start: number, end: number): number[] {
  let result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function map(array: number[], callback: (value: number) => number): number[] {
  const result: number[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}

function map2<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
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

  // const csvData: string = `
  // uhyo,26,1
  // John Smith,17,0
  // Mary Sue,14,1
  // `;

  // convertCsvToUser(csvData);

  console.log(sequence(1, 100));
}

main();
