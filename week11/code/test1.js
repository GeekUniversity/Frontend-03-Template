
let str = 'abcdccbdb58575'
const fn = (s) => {
  if (typeof s === 'string') {
    let i = 0
    let len = s.length
    const m1 = new Map()
    const m2 = new Map()
    let [s1, s2] = [0, 0]
    let res = []
    let temp = 0
    while (i < len) {
      let k = s.charAt(i)
      if (isNaN(k)) {
        if (m1.has(k)) {
          temp = m1.get(k)
          temp++
          m1.set(k, temp)
          if (s1 < temp) {
            s1 = m1.get(k)
          }
        } else {
          m1.set(k, 1)
        }
      } else {
        if (m2.has(k)) {
          temp = m2.get(k)
          temp++
          m2.set(k, temp)
          if (s2 < temp) {
            s2 = m2.get(k)
          }
        } else {
          m2.set(k, 1)
        }
      }
      i++
    }
    console.log(m1, m2, s1, s2)

    for (let [k, v] of m1.entries()) {
      if (v === s1) {
        res.push(k)
      }
    }
    for (let [k, v] of m2.entries()) {
      if (v === s2) {
        res.push(k)
      }
    }
    return res
  }
  return []
}

console.log(fn(str))
