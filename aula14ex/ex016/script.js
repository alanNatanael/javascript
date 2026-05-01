function contar() {
    var inicio = window.document.getElementById('in')
    var fim = window.document.getElementById('fn')
    var passo = window.document.getElementById('pn')
    var resultado = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = '[ERRO] Informe os dados corretamente!'
        window.alert('[ERRO] Informe os dados corretamente!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p == 0) {
            alert('Passo inválido! Considerando passo = 1')
            p = 1
        }
        if (i < f) {
            for (i; i <= f; i += p) {
                resultado.innerHTML += i + " 👉 "
            }
        } else {
            for (i; i >= f; i -= p) {
                resultado.innerHTML += i + " 👉 "
            }
        }
        resultado.innerHTML += " 🏁 "
    }
}    