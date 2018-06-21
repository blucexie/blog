!function(){
    var view = document.querySelector('#topNavBar');
    var controller = {
        view:null,
        init:function(view){
            this.view = view;
            this.bindEvnets();
        },
        bindEvnets:function(){
            var view = this.view;
            window.addEventListener('scroll', (x)=>{
                if (window.scrollY) {
                   this.active();
                } else {
                    this.deactive();
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky');
        },
        deactive:function(){
            this.view.classList.remove('sticky');
        }
    }
   
    controller.init(view)
}.call()

