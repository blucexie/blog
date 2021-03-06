! function () {
    
    var model = Model({
        resourceName: 'Message'
    });
    var view = View('.message');

    var controller = Controller({
        messageList: null,
        form: null,
        init: function (view, controller) {
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('#postMessageForm');
            this.loadMessage();
        },
        loadMessage: function () {
            this.model.fatch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveMessage()
            })

        },
        saveMessage: function () {
            let myForm = this.form;
            let name = myForm.querySelector('input[name=name]').value;
            let content = myForm.querySelector('input[name=content]').value;

            this.model.save({
                'name': name,
                'content': content
            }).then(function (object) {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}:${object.attributes.content}`;
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = '';
                myForm.querySelector('input[name=name]').value = '';

            })
        }
    })

    controller.init(view, model);

}.call()