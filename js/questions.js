(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; /* Selecciona el elemento que sigue que en este caso es P */
            let addPadding = question.parentElement.parentElement; /* Selecciona el padre del elemento */

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate'); /* Obtiene la clase del hijo y Agrega o elminina la clase colocada en el parentesis dependiendo si existe o no la clase */

            if(answer.clientHeight === 0){ /* Pregunto si tiene un height igual a cero */
                height = answer.scrollHeight; /*  Nos da el alto minimo para que se muestre un elemento */
            }

            answer.style.height = `${height}px`;
        });
    });
})();