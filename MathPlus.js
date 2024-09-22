const MathPlus = {
    PHI: (1 + Math.sqrt(5)) / 2, // 黄金比
    PHIxp: (x) => Math.pow(MathPlus.PHI, x), // 黄金比のべき
    magicangle: Math.acos(-1 / Math.sqrt(3)) * (180 / Math.PI),
    Plat: (2 + Math.sqrt(2)) / 2,
    mile: (km) => km * 0.621371, // キロメートルからマイルへの変換
    theta: (degrees) => degrees * Math.PI / 180, // 度からラジアンへの変換

    // 超黄金比
    SuperPHI: (1 + Math.sqrt(5)) / 2,
    SuperPHIxp: (x) => Math.pow(MathPlus.SuperPHI, x),

    // 銀比
    silver: (1 + Math.sqrt(3)) / 2,

    // 配列の平均値
    mean(arr) {
        return arr.reduce((sum, value) => sum + value, 0) / arr.length;
    },

    // 配列の中央値
    median(arr) {
        const sorted = arr.slice().sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0
            ? (sorted[middle - 1] + sorted[middle]) / 2
            : sorted[middle];
    },

    // 配列の最小値
    min(arr) {
        return Math.min(...arr);
    },

    // 約数を求める関数
    divisors(num) {
        const divisors = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== num / i) {
                    divisors.push(num / i);
                }
            }
        }
        return divisors;
    },

    // 最大公約数を求める関数 (ユークリッドの互除法)
    gcd(a, b) {
        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    },

    // 素数判定関数 (エラトステネスの篩)
    isPrime(num) {
        if (num <= 1) return false; // 2以下の数は素数ではない
        if (num <= 3) return true; // 2は素数
        if (num % 2 === 0 || num % 3 === 0) return false; // 2と3以外の偶数や3の倍数は素数ではない
        
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    },

    // 指定された範囲の素数を返す関数
    primes(start, end) {
        const primes = [];
        for (let num = start; num <= end; num++) {
            if (this.isPrime(num)) {
                primes.push(num);
            }
        }
        return primes;
    },

    // 分散率を計算する関数
    variance(arr) {
        const mean = this.mean(arr); // `this`を使って呼び出す
        return arr.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / arr.length;
    },

    // SI接頭詞の変換
    siPrefixes: {
        'yotta': 1e24,
        'zetta': 1e21,
        'exa': 1e18,
        'peta': 1e15,
        'tera': 1e12,
        'giga': 1e9,
        'mega': 1e6,
        'kilo': 1e3,
        'hecto': 1e2,
        'deka': 1e1,
        'deci': 1e-1,
        'centi': 1e-2,
        'milli': 1e-3,
        'micro': 1e-6,
        'nano': 1e-9,
        'pico': 1e-12,
        'femto': 1e-15,
        'atto': 1e-18,
        'zepto': 1e-21,
        'yocto': 1e-24,
    },

    // SI接頭詞を使った変換
    convertSI(value, prefix) {
        const factor = this.siPrefixes[prefix.toLowerCase()];
        if (factor === undefined) {
            throw new Error('無効なSI接頭詞です。');
        }
        return value * factor;
    },

    // コンピューターのSI接頭詞変換
    computerSiPrefixes: {
        'kibi': 1024,
        'mebi': 1024 ** 2,
        'gibi': 1024 ** 3,
        'tebi': 1024 ** 4,
        'pebi': 1024 ** 5,
        'exbi': 1024 ** 6,
        'zebi': 1024 ** 7,
        'yobi': 1024 ** 8,
    },

    // コンピューターのSI接頭詞を使った変換
    convertComputerSI(value, prefix) {
        const factor = this.computerSiPrefixes[prefix.toLowerCase()];
        if (factor === undefined) {
            throw new Error('無効なコンピューターSI接頭詞です。');
        }
        return value * factor;
    }
};
