
declare global {
    interface Window {
        ethereum: any;
        web3: any;
        Buffer: any;
        solana: any; // 或者使用具体的类型定义
        google: any; // 添加 google 对象
    }
}

// 如果该文件是模块，确保包含 export {}
export { };
