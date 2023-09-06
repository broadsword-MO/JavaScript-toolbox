// Works good! From first rendition of my Filename Fixer app
function onInputChange() {
    // .value only works to extract current text with 'input', 'form', 'textarea' etc.
    const fileName = document.getElementById('input').value;
    document.getElementById('output').innerHTML = fileName; /* .replace(/\s/g, '%20') */
}
