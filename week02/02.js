// 使用状态机完成”abababx”的处理

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
