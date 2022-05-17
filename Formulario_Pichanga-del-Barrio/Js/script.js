
    const sliders = [...document.querySelectorAll('.form_div')];
    const buttonTransition = [...document.querySelectorAll('.form_input')];
    const topButons = [...document.querySelectorAll('.top-of-form_circle')];

    let currentElement = Number(document.querySelector('.form_show').dataset.id);
    let positionTransition = Number(document.querySelector('.input_show').dataset.indexNumber);
    let circleTransition = Number(document.querySelector('.circle_show').dataset.indexNumber);
    
    let skip = document.querySelector('#skipId');
    let sendData = document.querySelector('#enviarId');
    currentElement+=1;
    cambiar=()=>{
        for(let cont=0;cont<sliders.length;cont++){
            if(currentElement === 2){
                sliders[0].classList.remove('form_show');
                sliders[1].classList.add('form_show');
                topButons[0].classList.remove('circle_show');
                topButons[1].classList.add('circle_show');
                if(cont==1) currentElement+=1;
            }
            else if(currentElement === 3 && cont===1){
                sliders[1].classList.remove('form_show');
                sliders[2].classList.add('form_show');
                skip.style.transition="0s";
                topButons[1].classList.remove('circle_show');
                topButons[2].classList.add('circle_show');
                buttonTransition[0].classList.remove('input_show');
                buttonTransition[1].classList.add('input_show');
            }
        }
    }
    maxlengthNumber=(obj)=>{
        if(obj.value.length > obj.maxLength ){
            obj.value = obj.value.slice(0,obj.maxLength);
        }
    }
    enviarDatos=()=>{
        window.open('https://api.whatsapp.com/send?phone=+936090248&text=Ya%20me%20registre%20%F0%9F%98%8E,%20llego%20el%20momento%20del%20pago...%20Mi%20nombre%20es')
    }
    