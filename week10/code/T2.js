
//请用闭包定义一个函数，实现每隔1秒，输出从1到500 。
const fn = (timer)=>{
    let i = 0
    let startTime = (new Date()).getTime()
    while(i<timer){
        let now = (new Date()).getTime()
        if(now-startTime==1000){
            i++
            console.log(i);
            startTime = now
        }
    }
}


fn(500)
