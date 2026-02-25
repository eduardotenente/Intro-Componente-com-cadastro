function cadastrar() {
    var pnome = document.querySelector('input#nm1')
    var snome = document.querySelector('input#nm2')
    var email = document.querySelector('input#em')
    var senha = document.querySelector('input#senha')

    if (pnome == 0 || snome == 0) {
        alert('[Erro] Verifique seus dados e tente novamente!')
    }
}