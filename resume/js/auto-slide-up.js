!function(){
    let specialTags = document.querySelectorAll('[data-x]');
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    
    }
    /* setTimeout(function () {
      
    }, 200) */
    findClosestAndRemoveOffset();
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset();
    })
    
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                    window.scrollY)) {
                minIndex = i;
            }
        }
        specialTags[minIndex].classList.remove('offset')
        for (let i = 0; i < specialTags.length; i++) {
            specialTags[i].classList.remove('active');
        }
        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href= "#' + id + '"]');
        let li = a.parentNode;
        let brothers = li.parentNode.children;
        for (let i = 0; i < brothers.length; i++) {
            brothers[i].classList.remove('heightlight')
        }
        li.classList.add('heightlight')
    }
}.call()

