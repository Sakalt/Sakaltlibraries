document.getElementById('generate-button').addEventListener('click', async () => {
    const command = document.getElementById('bash-command').value;
    const outputArea = document.getElementById('output');
    const bashExecutor = new BashExecutor();

    try {
        // Cコードを生成
        const cCode = generateCCode(command);
        
        // WebAssemblyにコンパイル
        const wasmFile = await compileToWasm(cCode);

        // WebAssemblyを実行
        await runWasm(wasmFile);
        
        outputArea.textContent = 'WebAssemblyが生成され、実行されました。';
    } catch (error) {
        outputArea.textContent = 'エラー:\n' + error;
    }
});

// Cコード生成
function generateCCode(command) {
    return `
#include <stdio.h>

int main() {
    printf("実行したコマンド: %s\\n", "${command}");
    return 0;
}`;
}

// WebAssemblyコンパイル
async function compileToWasm(cCode) {
    fs.writeFileSync('temp.c', cCode);
    return new Promise((resolve, reject) => {
        exec('emcc temp.c -o output.js -s WASM=1', (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve('output.js');
            }
        });
    });
}

// WebAssembly実行
async function runWasm(wasmFile) {
    const response = await fetch(wasmFile);
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes);
    instance.exports.main(); // main関数を実行
}
