const body = document.querySelector('body')
body.style.height = `100vh`
body.style.overflow = `hidden`
body.style.backgroundColor = `rgb(32, 32, 52)`
body.style.display = `flex`
body.style.justifyContent = `space-between`
body.style.alignItems = `center`
body.style.flexDirection = `column`;
body.style.fontFamily = `helvetica`

const header = document.createElement('header')
header.style.backgroundColor = `rgb(217, 197, 197)`
header.style.height = `60px`
header.style.width = `100%`
body.appendChild(header)

const div = document.createElement('div')
div.style.width = `1000px`
div.style.height = `500px`
div.style.display = `flex`
div.style.justifyContent = `space-around`
div.style.alignItems = `center`
div.style.flexDirection = `column`
div.style.backgroundColor = `rgb(217, 197, 197)`
div.style.borderRadius = `30px`
body.appendChild(div)


const texto = document.createElement('h1')
texto.textContent = `Atividade DOM`
texto.style.fontSize = `30px`

div.appendChild(texto)


const nome = document.createElement('input')
nome.style.height = `23px`
nome.style.width = `500px`
nome.placeholder = `Digite seu nome`
nome.style.borderRadius = `50px`
nome.style.border = `none`
nome.style.paddingLeft = `20px`
div.appendChild(nome)


const nota1 = document.createElement('input')
nota1.style.height = `23px`
nota1.style.width = `500px`
nota1.style.borderRadius = `50px`
nota1.style.border = `none`
nota1.style.paddingLeft = `20px`
nota1.placeholder = `digite sua primeira nota`
div.appendChild(nota1)


const nota2 = document.createElement('input')
nota2.style.height = `23px`
nota2.style.width = `500px`
nota2.style.borderRadius = `50px`
nota2.style.border = `none`
nota2.style.paddingLeft = `20px`
nota2.placeholder = `digite sua segunda nota`
div.appendChild(nota2)

const nota3 = document.createElement('input')
nota3.style.height = `23px`
nota3.style.width = `500px`
nota3.style.borderRadius = `50px`
nota3.style.border = `none`
nota3.style.paddingLeft = `20px`
nota3.placeholder = `digite sua terceira nota`
div.appendChild(nota3)

const resultado = document.createElement('p')
div.appendChild(resultado)

const passou = document.createElement('p')
div.appendChild(passou)

const btn = document.createElement('button')
btn.textContent = `Calcular média`
btn.style.color = `rgb(255,255,255)`
btn.style.width = `500px`
btn.style.height = `30px`
btn.style.borderRadius = `50px`
btn.style.backgroundColor = `rgb(32, 32, 52)`
div.appendChild(btn)

const footer = document.createElement('footer')
footer.style.height = `60px`
footer.style.width = `100%`
footer.style.backgroundColor = `rgb(217, 197, 197)`
body.appendChild(footer);


btn.addEventListener('click', function calcnota() {
    var n = nome.value
    var m1 = Number(nota1.value)
    var m2 = Number(nota2.value)
    var m3 = Number(nota3.value)

    var media = (m1 + m2 + m3) / 3
    resultado.textContent = `Olá, aluno ${n}. Sua media é ${media.toFixed(2)}`

    if (media >= 7) {
        passou.textContent = `você passou`
        passou.style.color = `green`
    }

    else{
        passou.textContent = `você reprovou`
        passou.style.color = `red`

    }

})



