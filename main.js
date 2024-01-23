button = document.getElementById('forms')

function higherNumber (num1, num2) {
    if (num1 > num2) {
        return false
    } else if(num1 == num2){
        return false
    } else {
        return true
    }
}

button.addEventListener('submit', function(e) {
    e.preventDefault()

    let num1 = document.getElementById('number1')
    let num2 = document.getElementById('number2')
    sucess = document.querySelector('.message')
    fail = document.querySelector('.fail')

    numbers = higherNumber(num1.value, num2.value)

    if (numbers) {
        document.querySelector(".fail").style.display = "none"
        sucess.innerHTML = "FOMULARIO VALIDO!"
        sucess.style.display = "block"

        num1.value = ''
        num2.value = ''

    } else {
        document.querySelector(".message").style.display = "none"
        sucess.style.display = "none"
        fail.innerHTML = "FOMULARIO INVALIDO!"
        fail.style.display = "block"

        num1.value = ''
        num2.value = ''
    }
})