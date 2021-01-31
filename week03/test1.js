
class StrStr{
    constructor(haystack,needle){
        this.haystack = haystack
        this.needle = needle
    }
    match() {
        if(this.needle.length===0) return false
        let state = this.start
        for(let c of this.haystack){
            state = this.state(c)
        }
        return state === this.end
    }
    start(c){return c==='a'?true:false}
    end(c){ return this.end }
    foundA(c){return this.end}
    
}

let o = new StrStr('ababab','a')
console.log(o.match());


class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }

let o2 = new Point('x','y')
console.log(o2.toString());

