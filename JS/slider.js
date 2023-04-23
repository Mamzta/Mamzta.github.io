(function(){

    const sliders= [...document.querySelectorAll('.leaving_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentleaving = document.querySelector('.leaving_body--show').dataset.id;
        value = Number(currentleaving);
        value+= add;

        sliders[Number(currentleaving)-1].classList.remove('leaving_body--show');
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0 ? sliders.length : 1; 
        }

        sliders[value-1].classList.add('leaving_body--show');
    }

})();