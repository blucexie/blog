window.Model = function(options){
    let resourceName = options.resourceName;
    return {
        init:function(){
            var APP_ID = 'w0eKqP38P037YNAcNoQMtE5o-gzGzoHsz';
            var APP_KEY = '55wYwO5zpNsha3LYuBB0afV3';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fatch:function(){
            var query = new AV.Query(resourceName);
            return query.find()  //Promise对象
        },
        save:function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}