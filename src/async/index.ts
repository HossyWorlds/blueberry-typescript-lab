/**
 * 非同期処理と同期処理の違いを学ぶための実践的な例
 * 
 * 同期処理（Synchronous）: 処理が順番に実行され、前の処理が完了するまで次の処理は待機
 * 非同期処理（Asynchronous）: 処理が並行して実行され、完了を待たずに次の処理に進む
 */

// ===== 同期処理の例 =====
console.log('=== 同期処理の例 ===');

function syncTask1(): string {
  console.log('同期タスク1開始');
  // 重い処理をシミュレート（実際にはCPUを大量に使用）
  const start = Date.now();
  while (Date.now() - start < 1000) {
    // 1秒間ループ
  }
  console.log('同期タスク1完了');
  return 'タスク1の結果';
}

function syncTask2(): string {
  console.log('同期タスク2開始');
  const start = Date.now();
  while (Date.now() - start < 500) {
    // 0.5秒間ループ
  }
  console.log('同期タスク2完了');
  return 'タスク2の結果';
}

function syncTask3(): string {
  console.log('同期タスク3開始');
  const start = Date.now();
  while (Date.now() - start < 300) {
    // 0.3秒間ループ
  }
  console.log('同期タスク3完了');
  return 'タスク3の結果';
}

// 同期処理の実行（順次実行）
console.log('同期処理開始時刻:', new Date().toLocaleTimeString());
const result1 = syncTask1();
const result2 = syncTask2();
const result3 = syncTask3();
console.log('同期処理完了時刻:', new Date().toLocaleTimeString());
console.log('同期処理結果:', [result1, result2, result3]);

// ===== 非同期処理の例（Promise） =====
console.log('\n=== 非同期処理の例（Promise） ===');

function asyncTask1(): Promise<string> {
  return new Promise((resolve) => {
    console.log('非同期タスク1開始');
    setTimeout(() => {
      console.log('非同期タスク1完了');
      resolve('非同期タスク1の結果');
    }, 1000);
  });
}

function asyncTask2(): Promise<string> {
  return new Promise((resolve) => {
    console.log('非同期タスク2開始');
    setTimeout(() => {
      console.log('非同期タスク2完了');
      resolve('非同期タスク2の結果');
    }, 500);
  });
}

function asyncTask3(): Promise<string> {
  return new Promise((resolve) => {
    console.log('非同期タスク3開始');
    setTimeout(() => {
      console.log('非同期タスク3完了');
      resolve('非同期タスク3の結果');
    }, 300);
  });
}

// 非同期処理の実行（並行実行）
console.log('非同期処理開始時刻:', new Date().toLocaleTimeString());

// Promise.allを使用して並行実行
Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
  .then((results) => {
    console.log('非同期処理完了時刻:', new Date().toLocaleTimeString());
    console.log('非同期処理結果:', results);
  });

// ===== async/awaitの例 =====
console.log('\n=== async/awaitの例 ===');

async function runAsyncTasks(): Promise<void> {
  console.log('async/await処理開始時刻:', new Date().toLocaleTimeString());
  
  // 並行実行
  const [result1, result2, result3] = await Promise.all([
    asyncTask1(),
    asyncTask2(),
    asyncTask3()
  ]);
  
  console.log('async/await処理完了時刻:', new Date().toLocaleTimeString());
  console.log('async/await処理結果:', [result1, result2, result3]);
}

// 順次実行の例
async function runAsyncTasksSequentially(): Promise<void> {
  console.log('順次実行開始時刻:', new Date().toLocaleTimeString());
  
  const result1 = await asyncTask1();
  const result2 = await asyncTask2();
  const result3 = await asyncTask3();
  
  console.log('順次実行完了時刻:', new Date().toLocaleTimeString());
  console.log('順次実行結果:', [result1, result2, result3]);
}

// 実行
runAsyncTasks();
runAsyncTasksSequentially();

// ===== 実際の使用例（ファイル読み込みのシミュレーション） =====
console.log('\n=== 実際の使用例 ===');

// ファイル読み込みをシミュレート
function simulateFileRead(filename: string, delay: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90%の確率で成功
        resolve(`${filename}の内容を読み込みました`);
      } else {
        reject(new Error(`${filename}の読み込みに失敗しました`));
      }
    }, delay);
  });
}

async function processFiles(): Promise<void> {
  try {
    console.log('ファイル処理開始');
    
    // 複数のファイルを並行して読み込み
    const files = [
      simulateFileRead('config.json', 800),
      simulateFileRead('data.csv', 1200),
      simulateFileRead('template.html', 600)
    ];
    
    const results = await Promise.all(files);
    console.log('ファイル処理完了:', results);
    
  } catch (error) {
    console.error('ファイル処理エラー:', error);
  }
}

processFiles();

// ===== エラーハンドリングの例 =====
console.log('\n=== エラーハンドリングの例 ===');

async function demonstrateErrorHandling(): Promise<void> {
  try {
    // 成功する処理
    const successResult = await simulateFileRead('success.txt', 200);
    console.log('成功:', successResult);
    
    // 失敗する可能性のある処理
    const failResult = await simulateFileRead('fail.txt', 100);
    console.log('これは表示されません:', failResult);
    
  } catch (error) {
    console.log('エラーをキャッチ:', error instanceof Error ? error.message : error);
  } finally {
    console.log('エラーハンドリング完了');
  }
}

demonstrateErrorHandling(); 
