!function(){
    let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
    function writeCode(code) {
        
        let n = 0;
        let timer = setInterval(()=>{
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.innerHTML =  Prism.highlight(container.innerHTML, Prism.languages.css);
            container.scrollTop = container.scrollHeight;
            if (n >= code.length) {
               window.clearInterval(timer);
               createPaper();
               fn3(code);
            }
        },10)
        /*  let timer; 
         timer=  setTimeout(function run() {
            n += 1;
            container.innerHTML = css1.substring(0, n);
            styleTag.innerHTML = css1.substring(0, n);
            container.innerHTML =  Prism.highlight(container.innerHTML, Prism.languages.css);
            
            container.scrollTop = container.scrollHeight;
            if (n < css1.length) {
                timer= setTimeout(run,5)
            }else{
                createPaper()
            }
            }, 5); */

    }
    let code = `/* 
    * 面试官你好，我是XXX
    * 只用文字作做我介绍太单调了
    * 我就用代码来介绍吧
    * 首先准备一些样式
    */

    *{
    transition: all 1s;
    }
    html{
    background: #eee;
    }
    #code{
    border: 1px solid #aaa;
    padding: 16px;
    }

    /* 我需要一点代码高亮 */

    .token.selector{ color: #690; }
    .token.property{ color: #905; }

    /* 加一个呼吸效果 */

    #code{
    animation: breath 0.5s infinite alternate-reverse;
    }
    /* 加3D效果 */
    #code{
        transform:rotate(360deg)
    }
    /* 现在正式开始 */

    /* 我需要一张白纸 */

    #code-wrapper{
    width: 50%; left: 0; position: fixed; 
    height: 100%;
    }

    #paper > .content {
    display: block;
    }

    /* 于是我就可以在白纸上写字了，请看右边 */
    `
    writeCode(code) 

    function createPaper(){
        let paper = document.createElement('div');
        paper.id = 'paper';
        let content = document.createElement('pre');
        content.className ='content'
        paper.appendChild(content); 
        document.body.appendChild(paper);
    }
    function fn3(){
        var result = `#paper{
            position:flxed;
            width:50%;
            background:red;
        }`  
        
        let n = 0;
        let timer = setInterval(()=>{
            n += 1;
            container.innerHTML = container.innerHTML+result.substring(n-1, n);
            styleTag.innerHTML = result.substring(n-1, n);
           console.log(result.substring(n-1,n));
           if(n>result.length){
               window.clearInterval(timer)
           }
        },10)
    }
}.call()