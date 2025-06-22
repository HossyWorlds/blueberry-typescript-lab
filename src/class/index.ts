// クロージャの例：関数を返す関数
function createUser(name: string, age: number) {
    // この関数は新しい関数を返す
    // 返される関数は message を引数に取る
    return (message: string) => {
        // name と age は createUser 実行時の値が保持される（クロージャ）
        console.log(`${name} (${age}) ${message}`);
    }
}

// createUser を実行して、message を受け取る関数を取得
const getMessage = createUser("John", 30);
// getMessage は (message: string) => { ... } という関数

// getMessage 関数に "Hello" を渡して実行
getMessage("Hello");
