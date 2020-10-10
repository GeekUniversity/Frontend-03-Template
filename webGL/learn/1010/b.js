//闭包
const fn =()=>{
    let a = 0
    return ()=> ++a;
}

let f = fn()
// f()
// f()

console.log(f(),f());
