AOS.init();

const dataEvento = new Date("Dec 07, 2023 13:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras= setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteEvento = timeStampEvento - timeStampAtual;

    const dias = Math.floor(distaciaAteEvento / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distaciaAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distaciaAteEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distaciaAteEvento % (1000 * 60)) / 1000);

    const contagemFinal = `${dias}d ${horas}h ${minutos}m ${segundos}s`
    document.getElementById('contador').innerText = contagemFinal;

    if(distaciaAteEvento < 0){
        clearInterval(contaHoras);

        document.getElementById('contador').innerText = `Evento expirado`;
    }
}, 1000);
