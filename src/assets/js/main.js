// Coloca a mascara de 00:00:00 dentro da nossa hora, alem de converter segundos para milisegundos.
const getHoursMascara = (sec) => {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', { //esse localeTime ele que faz a conversão para transformar nossa data em texto, retornando principalmente em portugues, com o horario ate 24 horas e com o time zone ITC, que é um time zone que n fique 3 horas antes do horario original.
        hour12: false,
        timeZone: 'UTC'
    })
}

const clock = document.querySelector(".clock");
let timer;



document.addEventListener('click', function(e){

    let seconds = 0;
    const startTimer = () => {

        timer = setInterval(function(){
            seconds++; //de um em um segundo ele vai adicionar mais um nos segundos;
            clock.innerHTML = getHoursMascara(seconds)
        },1000)


    };

    const stopTimer = () => {

        clearInterval(timer);
    }

    let element = e.target;

    if(element.classList.contains('stop')){
        stopTimer();
        clock.innerHTML = '00:00:00';
    }

    if(element.classList.contains('pause')){
        stopTimer();
    }

    if(element.classList.contains('start')){
        stopTimer();
        startTimer();
    }
});