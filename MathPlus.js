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
};
