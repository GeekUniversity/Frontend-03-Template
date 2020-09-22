


let  iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);
const happen = (ele,e)=>{
    return new Promise(function(resolve){
        let handler = () => {
            resolve();
            ele.removeEventListener(e,handler);
        }
        ele.addEventListener(e,handler);
    })
}
const sleep = (delay) => {  
    const start = (new Date()).getTime();  
    while ((new Date()).getTime() - start < delay) {    
        continue
    }
}

void async function(){
    for(let standard of standards){
        iframe.src = standard.url;
        console.log(standard.name);
        await sleep(1000)
        await happen(iframe,"load");
        console.log(iframe.contentDocument.querySelectorAll(".dfn-paneled"));
    }
}