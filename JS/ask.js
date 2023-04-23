(function(){
    const titleask = [...document.querySelectorAll('.ask_title')];
    console.log(titleask)

    titleask.forEach(ask =>{
        ask.addEventListener('click', ()=>{
            let height = 0;
            let answer = ask.nextElementSibling

            ask.children[0].classList.toggle('ask_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    });

})();