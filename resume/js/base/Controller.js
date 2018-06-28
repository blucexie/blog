window.Controller = function (options) {
    let init = options.init;
    this.bindEvnets = options.bindEvnets;
    return {
        view: null,
        model:null,
        init: function (view,model) {
            this.view = view;
            this.model = model;
            this.model.init();
            this.bindEvnets();
            init.call(this,view,model)
        },
        bindEvnets: function () {
          
        }
    }

}