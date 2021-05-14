function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('ano')
    const res = document.querySelector('div#resultado')
    
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        const fsex = document.getElementsByName('sexo')
        const idade = ano - Number(fano.value)
        
        let img = document.createElement('img')
        img.setAttribute('alt', 'Foto')

        let genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade <= 10) {
                img.setAttribute('src', './images/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', './images/moco.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/homem.png')
            } else {
                img.setAttribute('src', './images/velho.png')
            }
        } else {
            genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src', './images/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', './images/moca.png')
            } else if (idade < 50) {
                img.setAttribute('src', './images/mulher.png')
            } else {
                img.setAttribute('src', './images/velha.png')
            }
        } 

        res.innerHTML = `<p>${genero} de ${idade} anos</p>`
        res.prepend(img) //res.appendChild(img)
    }
}