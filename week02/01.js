//用状态机实现：字符串“abcabx”的解析

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

  //reconsume 重组技巧
