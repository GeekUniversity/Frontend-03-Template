class KMP {
    constructor(txt,pat){
        this.txt = txt
        this.pat = pat
        this.dp = []
    }

    KMP() {
        let M = this.pat.length;
        // dp[状态][字符] = 下个状态
        this.dp = new Array(256);
        // base case
        this.dp[0][this.pat[0]] = 1;
        // 影子状态 X 初始为 0
        let X = 0;
        // 构建状态转移图（稍改的更紧凑了）
        for (let j = 1; j < M; j++) {
            for (let c = 0; c < 256; c++) {
                this.dp[j][c] = this.dp[X][c];
            }
            this.dp[j][this.pat[j]] = j + 1;
            // 更新影子状态
            X = this.dp[X][this.pat[j]];
        }
    }

   search() {
        let M = this.pat.length;
        let N = this.txt.length;
        // pat 的初始态为 0
        let j = 0;
        for (let i = 0; i < N; i++) {
            // 计算 pat 的下一个状态
            j = this.dp[j][this.txt[i]];
            // 到达终止态，返回结果
            if (j == M) return i - M + 1;
        }
        // 没到达终止态，匹配失败
        return -1;
    }
}

let txt = "bacbababadababacambabacaddababacasdsd";
let pat = "ababaca";
const finde = new KMP(txt,pat)
finde.search(txt,pat)