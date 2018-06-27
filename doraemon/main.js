! function () {
    let duration =20;
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        $button.addClass('active').siblings('.active').removeClass('active');

        switch(speed){
            case 'slow':
            duration = 50
            break
            case 'normal':
            duration =20
            break
            case 'fast':
            duration =5
            break
        }
       
   })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
         let timer; 
         timer=  setTimeout(function run() {
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n < code.length) {
                timer= setTimeout(run,duration)
            }else{
                fn && fn.call();
            }
            }, duration);

    }
    let code = `.main {
        width: 12rem;
        height: auto;
        position: relative;
        margin: 1% auto;
        animation: volar 1s linear
         2s infinite alternate;
    }
    /* 画头部 */
    .header {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 0.04rem solid #000;
        margin: 0 auto;
        background-color: #35A1C9;
        position: relative;
        overflow: hidden;
        z-index: 100;
    }
    .headerInside {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
        background-color: #fff;
        border: 0.04rem solid #000;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    /* 画眼睛 */
    .eyes {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .eyes>div {
        background-color: #fff;
        width: 0.96rem;
        height: 0.96rem;
        border-radius: 50%;
        border: 0.02rem solid #000;
        overflow: hidden;
    }
    .pupila,
    .pupila2 {
        width: 0.46rem;
        height: 0.3rem;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        top: 0.4rem;
        transform: rotate(90deg);
    }
    .pupila {
        left: 1.16rem;
    }
    .iris1,
    .iris2 {
        width: 0.12rem;
        height: 0.06rem;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .rightEye-animation {
        width: 0.96rem;
        height: 0.96rem;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        animation-duration: 1s;
        animation-iteration-count: 3;
        animation-name: pulse;
        z-index: 100;
    }
    @keyframes pulse {
        to {
            bottom: 2rem;
        }
        from {
            bottom: 0;
        }
    }
    .rightEye-animation:after {
        content: "⌒";
        width: 0.96rem;
        position: absolute;
        text-align: center;
        color: #000;
        font-size: 0.6rem;
        font-weight: bold;
        line-height: 2.5;
    }
    /* 画鼻子 */
    .noss {
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
        border: 0.02rem solid #000;
        background-color: #B11735;
        margin: 0 auto;
        position: relative;
        top: -0.16rem;
    }
    .nostril {
        width: 0.2rem;
        height: 0.2rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 0.12rem;
        left: 0.16rem;
    }
    .nasolabialSulcus {
        width: 0.04rem;
        height: 0.4rem;
        background-color: #000;
        margin: 0 auto;
        position: relative;
        top: -0.16rem;
    }
    /* 画嘴 */
    .mouth {
        width: 2.8rem;
        height: 1.4rem;
        background-color: #B11635;
        margin: 0 auto;
        position: relative;
        top: -0.26rem;
        border-radius: 2.8rem 2.8rem 0 0;
        transform: rotate(180deg);
        overflow: hidden;
    }
    .mouthInside {
        position: relative;
        width: 2rem;
        height: 1.8rem;
        margin: 0 auto;
        top: -1rem;
        transform: rotate(180deg);
    }
    .mouthInside::before,
    .mouthInside::after {
        content: "";
        display: block;
        width: 1rem;
        height: 1.6rem;
        background-color: #CA2533;
        position: absolute;
        top: 0;
        left: 1rem;
        border-radius: 1rem 1rem 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    .mouthInside::after {
        transform: rotate(45deg);
        left: 0;
        transform-origin: 100% 100%;
    }
    /* 画胡子 */
    .leftBeard {
        position: relative;
        float: left;
        top: 1.2rem;
        left: 0.32rem;
    }
    .rightBeard {
        position: relative;
        float: right;
        top: 1.2rem;
        right: 0.32rem;
    }
    .leftBeard>div,
    .rightBeard>div {
        width: 1.2rem;
        height: 0.04rem;
        background-color: #000;
        margin-bottom: 0.36rem;
    }
    .leftBeard .l1 {
        transform: rotate(25deg);
    }
    .leftBeard .l2,
    .rightBeard .r2 {
        margin-bottom: 0.2rem;
    }
    .leftBeard .l3 {
        transform: rotate(-10deg);
    }
    .rightBeard .r1 {
        transform: rotate(-25deg);
    }
    .rightBeard .r3 {
        transform: rotate(10deg);
    }
    /* 头顶 */
    .dragonfly {
        width: 2rem;
        height: 0.1rem;
        background: transparent;
        margin: 0 auto;
        position: relative;
        margin-bottom: 0.2rem;
    }
    .wing {
        width: 2rem;
        height: 0.1rem;
        margin: 0 auto;
        background-color: grey;
        border-radius: 0.1rem;
        border: 0.04rem solid grey;
        opacity: 0.6;
        position: absolute;
        top: 0.1rem;
        animation-name: rotar;
        animation-duration: .1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes rotar {
        0% {
            transform: rotate3D(0, 1, 0, 0deg);
        }
        100% {
            transform: rotate3D(0, 1, 0, 360deg);
        }
    }
    .dragonflyBody {
        width: 0.4rem;
        height: 0.2rem;
        display: block;
        border: 0.04rem solid #555;
        background-color: #BD8D22;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius: 0.4rem 0.4rem 0 0;
    }
    .dragonflyBodyInside {
        width: 0.14rem;
        height: 0.6rem;
        background-color: #FCC136;
        border: 0.04rem solid #000;
        position: relative;
        top: 0.14rem;
        margin: 0 auto;
    }
    /* 画身体 */
    .content {
        width: 2.84rem;
        height: 3.44rem;
        background-color: #35A1C9;
        border: 0.04rem solid #000;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        margin: 0 auto;
        position: relative;
        top: -2rem;
        z-index: 2;
    }
    .scarf {
        width: 2rem;
        height: 1rem;
        margin: 0 auto;
        background-color: #A1172E;
        position: relative;
        top: 1.1rem;
        border-radius: 0.0008rem;
        z-index: 2;
    }
    .sign {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: -1.2rem;
        margin: auto;
        width: 0.7rem;
        height: 0.7rem;
        background-color: #F19629;
        border-radius: 50%;
        border: 0.04rem solid #000;
        z-index: 3;
    }
    .signCircular {
        width: 0.16rem;
        height: 0.16rem;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0.16rem;
        bottom: 0;
        margin: auto;
    }
    .signLine {
        width: 0.3rem;
        height: 0.04rem;
        background-color: #000;
        margin: 0 auto;
        position: relative;
        top: 0.5rem;
    }
    /* 画肚皮 */
    .belly {
        width: 2rem;
        height: 1.2rem;
        margin: 0 auto;
        position: relative;
        top: 0.8rem;
        background-color: #fff;
        border-radius: 2rem /1.2rem;
    }
    .bellyInside {
        width: 1.2rem;
        height: 0.6rem;
        border-radius: 0 0 1.2rem 1.2rem;
        background-color: #fff;
        border: 0.04rem solid #000;
        position: absolute;
        top: 0.4rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    /* 画手 */
    .hand {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .arm {
        width: 1.1rem;
        height: 1.7rem;
        margin: 0 auto;
        background-color: #35A1C9;
        border-radius: 1.1rem /1.7rem;
        border: 0.04rem solid #000;
        position: relative;
        top: -1.8rem;
    }
    .leftArm {
        left: -0.92rem;
        transform: rotate(-45deg);
    }
    .rightArm {
        right: -0.92rem;
        transform: rotate(45deg);
    }
    .leftHand,
    .rightHand {
        width: 1.2rem;
        height: 1.2rem;
        background-color: #fff;
        border-radius: 50%;
        border: 0.04rem solid #000;
        position: absolute;
    }
    .leftHand {
        top: -0.68rem;
        right: -0.2rem;
    }
    .rightHand {
        top: -0.68rem;
        left: -0.2rem;
    }
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .leftFooter,
    .rightFooter {
        width: 1.1rem;
        height: 1.54rem;
        background-color: #fff;
        border-radius: 1.1rem/1.54rem;
        border: 0.04rem solid #000;
        position: relative;
        bottom: 3rem;
    }
    @keyframes volar {
        0% {
            top: 0;
        }
        25% {
            top: 0;
        }
        50% {
            top: 50px;
        }
        75% {
            top: 75px;
        }
        100% {
            top: 0;
        }
    }`
    writeCode('', code)

  
}.call();