! function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        prefix.innerHTML = prefix || '';
        let n = 0;
        let timer = setInterval(() => {
            n += 1;
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = prefix + code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n >= code.length) {
                window.clearInterval(timer);
                fn.call()
            }
        }, 50)
    }

    function writeMarkdown(markdown, fn) {
        let dompaper = document.querySelector('.content');
        let n = 0;
        let timer = setInterval(() => {
            n += 1;
            dompaper.innerHTML = markdown.substring(0, n);
            dompaper.scrollTop = dompaper.scrollHeight;
            if (n >= markdown.length) {
                window.clearInterval(timer);
                fn.call()
            }
        }, 50)
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
   
    .code-wrapper{
        perspective: 3000px;
        position: fixed; 
        left: 0; 
        height: 100%;
        width: 50%; 
    }
    #code{
        transform:rotateY(20deg)
    }

    /* 我需要一张白纸 */
    
    #paper > .content {
        display: block;
    }
   
    /* 于是我就可以在白纸上写字了，请看右边 */
    `
    var result = `
    /* 接下来用一个优秀的库 marked.js
     * 把 Markdown 变成 HTML
     */`
    var md = `
# 自我介绍

我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

## 技能介绍

熟悉 JavaScript CSS

## 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

## 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx# 联系方式`
  var end = `  
   
    /*
    * 这就是我的会动的简历
    * 谢谢观看
    */
   `
    writeCode('', code, () => {
        createPaper(() => {
            writeMarkdown(md, () => {
                writeCode(code, result, () => {
                    convertMarkdownToHtml(() => {
                        writeCode(code+ result,end,()=>{
                            console.log('end')
                        })
                    })
                })
            })
        });
    });

    function createPaper(fn) {
        let paper = document.createElement('div');
        paper.id = 'paper';
        let content = document.createElement('pre');
        content.className = 'content'
        paper.appendChild(content);
        document.body.appendChild(paper);
        fn.call();
    }

    function convertMarkdownToHtml(fn) {
        var div = document.createElement('div')
        div.className = 'html markdown-body'
        div.innerHTML = marked(md);
        let markdownContainer = document.querySelector('#paper > .content')
        markdownContainer.replaceWith(div)
        fn && fn.call()
    }
}.call()