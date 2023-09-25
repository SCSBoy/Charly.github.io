let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let res = document.querySelector("#res");

let msg1 = document.querySelector("#rep1");
let msg2 = document.querySelector("#rep2");

let plus = document.querySelector("#plus");
let moins = document.querySelector("#moins");
let multiplié_par = document.querySelector("#multiplié_par");
let divisé_par = document.querySelector("#divisé_par");

res.disabled = true

n1.addEventListener('keyup', () => {
    if (isNaN(n1.value)){
        msg1.textContent = "Erreur!!!!! Faites plus attention"
        msg1.style.color ="red"
        msg1.style.fontsize = "x_small"
        msg1.style.display= "inline"
        n2.disabled = true
        plus.disabled = true
        moins.disabled = true
        multiplié_par.disabled = true
        divisé_par.disabled = true
    }
    else {
        n2.enabled = true
        plus.enabled = true
        moins.enabled = true
        multiplié_par.enabled = true
        divisé_par.enabled = true
    }
})
n2.addEventListener('keyup', () => {
    if (isNaN(n2.value)){
        msg1.textContent = "Erreur!!!!! Faites plus attention"
        msg1.style.color ="red"
        msg1.style.fontsize = "x_small"
        msg1.style.display= "inline"
        n2.disabled = true
        plus.disabled = true
        moins.disabled = true
        multiplié_par.disabled = true
        divisé_par.disabled = true
    }
    else {
        n2.enabled = true
        plus.enabled = true
        moins.enabled = true
        multiplié_par.enabled = true
        divisé_par.enabled = true
    }

})
plus.addEventListener('click', () => {
    res.value = parseFloat(n1.value)+ parseFloat(n2.value)
})

moins.addEventListener('click', () => {
    res.value = n1.value - n2.value
})

multiplié_par.addEventListener('click', () => {
    res.value = n1.value * n2.value
})

divisé_par.addEventListener('click', () => {
    res.value = n1.value / n2.value
})
