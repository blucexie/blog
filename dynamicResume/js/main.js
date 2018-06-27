!function(){
    function writeCode(css1) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
         let timer; 
         timer=  setTimeout(function run() {
            n += 1;
            container.innerHTML = css1.substring(0, n);
            styleTag.innerHTML = css1.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n < css1.length) {
                timer= setTimeout(run,10)
            }
            }, 10);

    }
    let css1 = `/* 
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
    writeCode(css1) 
}.call()