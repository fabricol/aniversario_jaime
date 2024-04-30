AOS.init();

const dataDoEvento = new Date("Feb 26, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;
    const segundosEmMS = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horasEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMS) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS) / segundosEmMS);

    document.getElementById('contador').innerHTML = `${diasAteOEvento} dias ${horasAteOEvento} horas ${minutosAteOEvento} minutos e ${segundosAteOEvento} segundos.`
    if (distanciaAteOEvento < 0) {
        clearInterval (contaAsHoras);
        document.getElementById('contador').innerHTML = 'Vendas encerradas'
    }
}, 1000);
