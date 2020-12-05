const button = document.getElementById('go');
const input = document.getElementById('name');
const output = document.getElementById('output');

button.addEventListener('click', aisatsu);

function aisatsu() {
    output.textContent = input.value;
}