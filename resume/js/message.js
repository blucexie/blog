!function(){
    var view = document.querySelector('.message');

    var model = {
        init:function(){
            var APP_ID = 'w0eKqP38P037YNAcNoQMtE5o-gzGzoHsz';
            var APP_KEY = '55wYwO5zpNsha3LYuBB0afV3';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        //获取数据
        fatch:function(){
            var query = new AV.Query('Message');
            return query.find()  //Promise对象
         
        },
        //创建数据
        save:function(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                name:name,
                content: content
            })   //Promise对象
        }
    }

    var controller = {
        view:null,
        model:null,
        messageList:null,
        init:function(view,model){
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('#postMessageForm');
            this.model.init();
            this.loadMessage();
            this.bindEvents();
        },
        loadMessage:function(){
           this.model.fatch().then( 
                (messages)=>{
                    let array = messages.map((item)=> item.attributes);
                    array.forEach((item)=>{
                   let li = document.createElement('li');
                   li.innerText = `${item.name}:${item.content}`;
                   this.messageList.appendChild(li); 
               })
            });
        },
        bindEvents:function(){
            this.form.addEventListener('submit',function(e){
                e.preventDefault();
                this.saveMessage();
            })
        
        },
        saveMessage:function(){
            let myForm = this.form;
            let name = myForm.querySelector('input[name=name]').value;
            let content = myForm.querySelector('input[name=content]').value;

            this.model.save(name,content).then(function(object) {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}:${object.attributes.content}`;
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li); 
               myForm.querySelector('input[name=content]').value='';
               myForm.querySelector('input[name=name]').value='';
                
            })
        }
    }
    controller.init(view,model);

}.call()