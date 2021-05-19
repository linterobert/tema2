window.onload = function(){
    fetch('http://localhost:3000/cos_cumparaturi', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                var x = document.getElementById("cos_cumparaturi");
                x.style.justifyContent = "column";
                for( i = 0; i < data.length; i++ ){
                    var poza = document.createElement('img');
                    poza.style.maxWidth = "70px";
                    poza.src = data[i].poza;
                    var caseta_produs = document.createElement('div');
                    caseta_produs.style.display = "flex";
                    caseta_produs.justifyContent = "center";
                    poza.style.maxHeight = "100px";
                    poza.style.marginLeft = "40px"
                    var marime = data[i].marime;
                    var caseta_marime = document.createElement("div");
                    caseta_marime.innerHTML = "Marime: " + marime;
                    caseta_marime.style.marginLeft = "100px";
                    caseta_marime.style.marginTop = "40px";
                    var caseta_cantitate = document.createElement('div');
                    var cantitate = data[i].cantitate;
                    caseta_cantitate.innerHTML = cantitate;
                    caseta_cantitate.style.marginLeft = "10px";
                    caseta_cantitate.style.marginTop = "40px";
                    var caseta_modifica = document.createElement('input')
                    caseta_modifica.style.marginLeft = "10px";
                    caseta_modifica.style.marginTop = "35px";
                    caseta_modifica.style.height = "20px";
                    caseta_modifica.style.width = "20px";
                    let produs_id = data[i].id;
                    caseta_modifica.id = data[i].id;
                    let buton_cantitate = document.createElement('button');
                    buton_cantitate.innerHTML = "Modifica";
                    buton_cantitate.style.height = "20px";
                    buton_cantitate.style.marginTop = "38px";
                    buton_cantitate.style.marginLeft = "20px";
                    buton_cantitate.onclick = function(){edit_produs(produs_id)};
                    var text = document.createElement("div");
                    text.innerHTML = "Cantitate: ";
                    text.style.marginLeft = "100px";
                    text.style.marginTop = "40px";
                    var nume = document.createElement('div');
                    var m = data[i].nume_produs;
                    nume.innerHTML = m;
                    nume.style.width = "150px";
                    nume.style.marginTop = "40px";
                    nume.style.marginLeft = "100px";
                    var caseta_pret = document.createElement('div');
                    caseta_pret.innerHTML = data[i].pret;
                    caseta_pret.style.marginTop = "40px";
                    caseta_pret.style.marginLeft = "100px";
                    var buton_stergere = document.createElement('button');
                    buton_stergere.innerHTML = "X";
                    buton_stergere.onclick = function(){stergere(produs_id)};
                    buton_stergere.style.marginTop = "38px";
                    buton_stergere.style.height = "20px";
                    buton_stergere.style.width = "20px";
                    buton_stergere.style.marginLeft = "70px";
                    caseta_produs.append(poza);
                    caseta_produs.append(nume);
                    caseta_produs.append(caseta_marime);
                    caseta_produs.append(text);
                    caseta_produs.append(caseta_cantitate);
                    caseta_produs.append(caseta_modifica);
                    caseta_produs.append(buton_cantitate);
                    caseta_produs.append(caseta_pret);
                    caseta_produs.append(buton_stergere);
                    caseta_produs.style.flexDirection = "row";
                    caseta_produs.style.borderStyle = "solid";
                    caseta_produs.style.marginTop = "10px";
                    x.append(caseta_produs);
                }
            })
        });                   
}
var stare_meniu = false;
var lista_pret_cos = [];
var lista_nume_cos = [];
var meniu = document.getElementById("logo");
meniu.onclick = function schimbare_stare(){

    let meniu_lateral = document.querySelector(".meniu_lateral");
    let meniu_lateral_ul = document.querySelector(".meniu_lateral ul");
    let meniu_lateral_buton = document.querySelector(".meniu_lateral ul button");

    if( stare_meniu === false ){
        meniu_lateral.style.color = "white";
        meniu_lateral.style.width = "310px";
        meniu_lateral.style.opacity = "1";
        meniu_lateral.style.background = "grey";
        stare_meniu = true;
        meniu_lateral_buton.style.visibility = "visible";
    }
    else{
        meniu_lateral_buton.style.visibility = "hidden";
        meniu_lateral.style.color = "black";
        meniu_lateral.style.width = "50px";
        meniu_lateral.style.opacity = "0.7";
        meniu_lateral.style.background = "black";
        stare_meniu = false;
    }


}
function conectare(){
    var text1 = document.getElementById("username").value;
    var text2 = document.getElementById("password").value;
    if( text1 != "" && text2 != "" ){
        if( conectat === false ){
            var variabila = document.getElementById("Password");
            variabila.style.visibility = "hidden";
            variabila = document.getElementById("username").value;
            var x = variabila;
            t = x;
            variabila = document.getElementById("Username");
            variabila.style.visibility = "hidden";
            variabila = document.querySelector("#Conecteaza-te");
            variabila.textContent = "Bine ati venit, " + x +"!";
            variabila.style.marginLeft = "55px";
            variabila.style.marginTop = "20px";
            variabila.style.fontSize = "20px";
            variabila = document.getElementById("buton_conectare");
            variabila.textContent = "Deconecteaza-te";
            conectat = true;
            variabila = document.getElementById("Autentifica-te");
            variabila.style.visibility = "hidden";

        }
        else{

            var variabila = document.getElementById("Password");
            variabila.style.visibility = "visible";
            variabila = document.getElementById("username").value;
            var x = variabila;
            variabila = document.getElementById("Username");
            variabila.style.visibility = "visible";
            variabila = document.querySelector("#Conecteaza-te");
            variabila.textContent = "Conecteaza-te";
            variabila.style.fontSize = "20px";
            variabila.style.marginLeft = "55px";
            variabila.style.marginTop = "20px";
            variabila = document.getElementById("buton_conectare");
            variabila.textContent = "Conecteaza-te";
            conectat = false;
            variabila = document.getElementById("Autentifica-te");
            variabila.style.visibility = "visible";

        }
    }
    else{
        alert("Username sau parola neintroduse");
    }


}

function stergere(produs_id){
    fetch('http://localhost:3000/cos_cumparaturi/' + produs_id, {
    method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(function(response) 
    {
        window.location.reload();
    })
}


function edit_produs(produs_id){
    fetch('http://localhost:3000/cos_cumparaturi', {
        method: 'get'
    }).then((response) => {
        response.json().then((data)=>{
            let x = getElementById("cantitate_noua").value;
            for(let j=0 ; j < data.length ; j++)
            {
                console.log(n);
                if(data[j].id == produs_id) 
                { 
                    var z = data[j].marime;
                    var g = data[j].nume_produs;
                    var d = data[j].pret;
                    var q = data[j].poza
                }
            }
            let new_produs = {
                marime : z,
                cantitate : x,
                pret : d,
                poza : q,
                nume_produs : g
            }
        
            fetch('http://localhost:3000/cos_cumparaturi/' + produs_id, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(new_produs)
            }).then(function(response) {
                window.location.reload();
            })
        })
    })
}