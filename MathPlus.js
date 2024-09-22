// MathPlus.js
const MathPlus = {
    PHI: (1 + Math.sqrt(5)) / 2, // 黄金比
    PHIxp: (x) => Math.pow(MathPlus.PHI, x), // 黄金比のべき

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
    const sorted = arr.sort((a, b) => a - b);
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
  }

  // 素数判定関数 (エラトステネスの篩)
  isPrime(num) {
    // 2以下の数は素数ではない
    if (num <= 1) return false;
    // 2は素数
    if (num <= 3) return true;
    // 2と3以外の偶数や3の倍数は素数ではない
    if (num % 2 === 0 || num % 3 === 0) return false;
    // 6k±1の形の素数をチェック
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
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  },

  // 分散率を計算する関数
  variance(arr) {
    const mean = MathPlus.mean(arr);
    return arr.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / arr.length;
  },
};
