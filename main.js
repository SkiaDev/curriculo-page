let trilhos = document.getElementById('trilhos')
let body = document.querySelector('body')

trilhos.addEventListener('click',()=>{
    trilhos.classList.toggle('dark')
    body.classList.toggle('dark')
})