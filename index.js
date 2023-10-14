"use strict"
let _txtN;
let _btnInvia;
let _btnRigioca;
let _chkN;
let a, b, c;

function init(){
    _txtN = document.getElementsByName("txtN");
    _chkN = document.getElementsByName("chkN");
    _btnInvia = document.getElementById("btnInvia");
    _btnRigioca = document.getElementById("btnRigioca");
    genera();
    controlla();
    rigioca();
}

function genera(){
    a = generaNumero(1,9);
    do {
        b = generaNumero(1,9);
    }
    while(b==a);

    do {
        c = generaNumero(1,9);
    }
    while(c==a || c==b);

    console.log("I valori sono: " + a + " " + b + " " + c);
}

function controlla(){
    // campi di unput non vuoti
    for(let i=0;i<_txtN.length;i++)
    {
        if(_txtN[i].value=="") // con _txtN[i].value si ottiene una stringa
        {
            alert("Campi vuoti");
            return; // fa in modo di uscire dalla funzione forzatamente
        }
    }
    // controlliamo i valori nel range 1-9
    for(let i=0;i<_txtN.length;i++)
    {
        if(parseInt(_txtN[i].value) < 1 || parseInt(_txtN[i].value) > 9) // con _txtN[i].value si ottiene una stringa
        {
            alert("Valori fuori dal range");
            return;
        }
    }
    // valori tutti diversi
    for(let i=0;i<_txtN.length;i++)
    {
        for(let j=i+1;j<_txtN.length;j++)
        {
            if(_txtN[i].value == _txtN[j].value)
            {
                alert("Valori uguali");
                return;
            }
        }
    }
    // confronto con valori estratti
    let cntOk = 0;
    for(let i=0;i<_txtN.length;i++)
    {
        _chkN[i].checked = false;
        if(parseInt(_txtN[i].value) == a || parseInt(_txtN[i].value) == b || parseInt(_txtN[i].value) == c)
        {
            _chkN[i].checked = true;
            cntOk++;
        }
    }

    if(cntOk == _txtN.length)
    {
        alert("Hai vinto");
        _btnInvia.disabled = true;
    }
}

function rigioca(){
    _btnInvia.disabled = false;
    _chkN.checked = false;
    _txtN.text = "";
}

function generaNumero(a, b){
    return(Math.floor((b-a+1)*Math.random())+ a);
}