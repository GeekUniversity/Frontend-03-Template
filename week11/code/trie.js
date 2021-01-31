console.log('aaaaaaaa');
    
    let $ = Symbol("$");
    class Trie {
        constructor(){
            this.root = Object.create(null)
        }
        insert(word){
            let node =this.root;
            for(let c of word){
                console.log('word',JSON.stringify(word),c);
                if(!node[c]){
                    node[c] = Object.create(null)
                }
                node = node[c]
            }
            
            if(!($ in node)){
                node[$] = 0
            }
          node[$] ++
          console.log('c----',$,node[$],$ in node);
        }
        most(){
            let max = 0;
            let maxWord = null
            let visit = (node,word) => {
                if(node[$] && node[$] >max){
                    max = node[$];
                    maxWord = word;
                }
                for(let p in node){
                    // console.log(word+p);
                    
                    visit(node[p],word+p)
                }
            }
            visit(this.root,"")
            console.log(maxWord,max)
        }           
    }

    //随机生成字典树
    function randomWord(length){
        var s = ""
        for(let i = 0;i<length;i++){
            s += String.fromCharCode(Math.random()*26+"a".charCodeAt(0))
        }
        console.log('+++++',s,"a".charCodeAt(0));
        
        return s

    }

    let trie = new Trie()
    //插入100万个空字符
    for(let i = 0; i<500;i++){
        trie.insert(randomWord(4));
    }
    console.log(JSON.stringify(trie));
    trie.most()
    