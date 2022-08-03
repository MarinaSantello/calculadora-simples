'use strict'

function somar() {
    const numero01 = document.getElementById("valor01").value;
    const numero02 = document.getElementById("valor02").value;
    const output = document.getElementById("output");

    const result = parseFloat(numero01) + parseFloat(numero02);

    output.textContent = result;
}

document.getElementById("somar").addEventListener('click', somar);

function subtrair() {
    let numero01 = document.getElementById("valor01").value;
    let numero02 = document.getElementById("valor02").value;
    let output = document.getElementById("output");

    let result = parseFloat(numero01) - parseFloat(numero02);

    output.textContent = result;
}

document.getElementById("subtrair").addEventListener('click', subtrair);

function multiplicar() {
    let numero01 = document.getElementById("valor01").value;
    let numero02 = document.getElementById("valor02").value;
    let output = document.getElementById("output");

    let result = parseFloat(numero01) * parseFloat(numero02);

    output.textContent = result;
}

document.getElementById("multiplicar").addEventListener('click', multiplicar);

function dividir() {
    let numero01 = document.getElementById("valor01").value;
    let numero02 = document.getElementById("valor02").value;
    let output = document.getElementById("output");

    let result = parseFloat(numero01) / parseFloat(numero02);

    output.textContent = result;
}

document.getElementById("dividir").addEventListener('click', dividir);