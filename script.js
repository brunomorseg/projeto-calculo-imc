const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

const converter=()=> {
    let num_1 = c('.input_1').value
    let num_2 = c('.input_2').value

    let IMC =  num_1 /(num_2*num_2)

    document.querySelector('.amostra-resultado').innerHTML = `Seu IMC é : ${IMC.toFixed(2)}`
    
}

const resetar = () => {
    c('.amostra-resultado').innerHTML = ''
    c('.input_1').value = ' '
    c('.input_2').value = ' '
}