// While文の例

// 1. 基本的なwhile文
console.log("=== 基本的なwhile文 ===");
let count = 0;
while (count < 5) {
    console.log(`カウント: ${count}`);
    count++;
}

// 2. 配列の要素を処理するwhile文
console.log("\n=== 配列の処理 ===");
const fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];
let index = 0;
while (index < fruits.length) {
    console.log(`フルーツ ${index + 1}: ${fruits[index]}`);
    index++;
}

// 3. 条件付きwhile文（break文の使用）
console.log("\n=== break文の使用 ===");
let number = 1;
while (true) {
    if (number > 10) {
        break; // 10を超えたらループを抜ける
    }
    if (number % 2 === 0) {
        console.log(`${number} は偶数です`);
    }
    number++;
}

// 4. continue文の使用
console.log("\n=== continue文の使用 ===");
let i = 0;
while (i < 10) {
    i++;
    if (i % 3 === 0) {
        continue; // 3の倍数はスキップ
    }
    console.log(`処理された数: ${i}`);
}

// 5. 実践的な例：パスワード生成
console.log("\n=== パスワード生成 ===");
function generatePassword(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    let attempts = 0;
    
    while (password.length < length && attempts < 100) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
        attempts++;
    }
    
    return password;
}

const newPassword = generatePassword(8);
console.log(`生成されたパスワード: ${newPassword}`);

// 6. ネストしたwhile文
console.log("\n=== ネストしたwhile文 ===");
let row = 1;
while (row <= 3) {
    let col = 1;
    let line = "";
    while (col <= row) {
        line += "* ";
        col++;
    }
    console.log(line);
    row++;
}

// 7. do-while文の例
console.log("\n=== do-while文 ===");
let diceRoll: number;
do {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`サイコロの目: ${diceRoll}`);
} while (diceRoll !== 6);

console.log("6が出ました！");

// 8. 無限ループの防止例
console.log("\n=== 無限ループの防止 ===");
let counter = 0;
const maxIterations = 1000; // 安全装置

while (counter < maxIterations) {
    // 何らかの処理
    counter++;
    
    // 特定の条件でループを抜ける
    if (counter === 50) {
        console.log("50回目でループを終了します");
        break;
    }
}

console.log(`最終的なカウンター値: ${counter}`);

export {};
