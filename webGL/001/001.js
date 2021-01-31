// 从这里开始
class main { 
    constructor(id){
        this.canvas = document.querySelector(id)
        this.gl = gl = canvas.getContext("webgl");
    }
    render(){
        if (!this.gl) {
            throw new Error("无法初始化WebGL，你的浏览器、操作系统或硬件等可能不支持WebGL。");
        }
        // 使用完全不透明的黑色清除所有图像
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // 用上面指定的颜色清除缓冲区
        this.gl.clear(gl.COLOR_BUFFER_BIT);
    }
}

module.exports = main;