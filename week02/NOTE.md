学习笔记

### 有限状态机
每一个状态都是一个机器
每一个机器知道下一个状态

### 用状态机实现：字符串“abcabx”的解析
```js
const match = (str) => {
    let state = start
    for(let c of str){
      state = state(c)
    }
    return state === end                
  }

  const start = c => c ==='a'? foundA:start
  const end = () => end
  const foundA = c => c ==='b'? foundB : start(c) 
  const foundB = c => c ==='c'? foundC : start(c)  
  const foundC = c => c ==='a'? foundA2 : start(c)  
  const foundA2 = c => c ==='b'? foundB2 : start(c) 
  const foundB2 = c => c === 'x'? end : foundB(c)  

  console.log(match('abcabcabx'))
  console.log(match('abcaabcabx'))
  console.log(match('abcaabbcabx'))
```
 ### 用状态机实现：字符串“abababx”的解析
```js
const match = (str) => {
    let state = start
    for(let c of str){
      state = state(c)
    }
    return state === end                
  }

  const start = c => c ==='a'? foundA:start
  const end = () => end
  const foundA = c => c ==='b'? foundB : start(c) 
  const foundB = c => c ==='a'? foundA2 : start(c)  
  const foundA2 = c => c ==='b'? foundB2 : start(c) 
  const foundB2 = c => c ==='a'? foundA3 : start(c)  
  const foundA3 = c => c ==='b'? foundX : start(c)  
  const foundX = c => c === 'x'? end : foundB2(c)   

  console.log(match('ababababx'))
  console.log(match('abaaabababx'))
  console.log(match('abababaabababx'))
  console.log(match('abababaabaababx'))
  //reconsume 重组技巧
  ```
KMP资料阅读，按照JAVA版的改了下没有实现 ，js Class语法不熟悉 需要加强训练。

### HTTP请求
####  HTTP协议解析
####  服务端环境准备
####  实现一个HTTP请求
####  send函数编写了解response格式
####  发送请求
####  response解析