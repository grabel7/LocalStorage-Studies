let writingArea = document.querySelector('.text-input')

// Ao digitar uma tecla
addEventListener("keyup", () => {
    localStorage.setItem('save', writingArea.innerText)
});

// Ao carregar a página
function load(){
    writingArea.innerText = localStorage.getItem('save')
}

