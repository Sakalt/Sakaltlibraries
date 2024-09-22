const { exec } = require('child_process');

class BashExecutor {
    constructor() {
        this.history = [];
    }

    // bash関数の定義
    bash(command) {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                this.history.push(command); // コマンドを履歴に追加

                if (error) {
                    reject(stderr); // エラー出力を返す
                } else {
                    resolve(stdout); // 標準出力を返す
                }
            });
        });
    }

    getHistory() {
        return this.history; // コマンドの履歴を返す
    }

    clearHistory() {
        this.history = []; // 履歴をクリア
    }
}

// 使用例
const bashExecutor = new BashExecutor();

// コマンドを実行
bashExecutor.bash('ls -l')
    .then(output => {
        console.log('出力:\n', output);
    })
    .catch(error => {
        console.error('エラー:', error);
    });

// コマンドの履歴を表示
console.log('履歴:', bashExecutor.getHistory());

// 履歴をクリア
bashExecutor.clearHistory();
