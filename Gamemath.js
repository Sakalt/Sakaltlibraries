// gamemath.js
const GameMath = {
    PHI: (1 + Math.sqrt(5)) / 2, // 黄金比
    PHIxp: (x) => Math.pow(GameMath.PHI, x), // 黄金比のべき

    Silver: (1 + Math.sqrt(3)) / 2, // 銀比
    Silverxp: (x) => Math.pow(GameMath.Silver, x), // 銀比のべき

    Copper: (3 + Math.sqrt(5)) / 2, // 架空の数、銅比
    Copperxp: (x) => Math.pow(GameMath.Copper, x), // 銅比のべき

    // 配列の合計を計算する関数
    sum(arr) {
        return arr.reduce((total, value) => total + value, 0);
    },

    // 配列の最大値を返す関数
    max(arr) {
        return Math.max(...arr);
    },

    // 配列の最小値を返す関数
    min(arr) {
        return Math.min(...arr);
    },

    // ユークリッド距離を計算する関数
    euclideanDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    },

    // 線形補間を行う関数
    lerp(start, end, t) {
        return start + (end - start) * t;
    }
};
