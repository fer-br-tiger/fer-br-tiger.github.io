const tooltips = document.getElementsByClassName('tooltip-inner');
const elemTooltips = document.getElementsByClassName('tooltip');

for (let i = 0; i < tooltips.length; i++) {
    const tooltip = tooltips[i];
    const elemTooltip = elemTooltips[i];

    // Posicionamiento de tooltip

    calcularPosicion(tooltip);

    elemTooltip.addEventListener('mouseover', () => tooltip.classList.add('activo'));

    let timer;
    elemTooltip.addEventListener('mouseout', () => {
        timer = setTimeout(() => {
            tooltip.classList.remove('activo');
        }, 500);
    });

    tooltip.addEventListener('mouseover', () => clearTimeout(timer));
}

function calcularPosicion(tempTooltip) {

    const arriba = -(tempTooltip.clientHeight + 7);

    tempTooltip.style.top = `${arriba}px`
}

function myFunction() {
    document.getElementById('myNavbar').classList.toggle('responsive');
}