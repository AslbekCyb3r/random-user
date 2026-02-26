const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
const localmode = localStorage.getItem('mode')



if (localmode) {
    body.classList.toggle('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}
const toglemodebtn = () => {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}

darkBtn.addEventListener('click', () => {
    toglemodebtn()
    localStorage.setItem('mode', 'dark-mode')
})


lightBtn.addEventListener('click', () => {
    toglemodebtn()
    localStorage.setItem('mode', '')

})