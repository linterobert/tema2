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


conectat = false;
var t;

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


function autentificare(){

    var Nume = document.getElementById("Nume").value;
    var Prenume = document.getElementById("Prenume").value;
    var Adresa = document.getElementById("Adresa").value;
    var Parola = document.getElementById("Parola").value;
    var Rescrie = document.getElementById("Rescrie").value;


    if( Nume != "" && Prenume != "" && Adresa != "" && Parola != "" && Rescrie != "" && Parola == Rescrie){
        var variabila = document.getElementById("999");
        variabila.style.visibility = "hidden"; 
        variabila = document.getElementById("998");
        variabila.style.visibility = "hidden";
        variabila = document.querySelector("#titlu_autentificare");
        variabila.textContent = "Cont generat cu succes!";

    }
    else{
        if(Nume != "" && Prenume != "" && Adresa != "" && Parola != "" && Rescrie != ""){
            alert( "Parola reintrodusa nu coincide cu cea initiala" );
        }
        else{
            alert("Toate campurile sunt obligatorii!");
        }
    }

}

var x = document.getElementById("lista");

for( i = 0; i < produse.length; i++ ){
    let caseta = document.createElement('div');
    let poza = document.createElement('img');
    poza.src = produse[i].src;
    poza.style.maxHeight = "100px";
    let text = document.createElement('div');
    text.innerHTML = produse[i].nume;
    caseta.append(poza);
    caseta.append(text);
    x.append(caseta);
}

function posteaza(){
    if(conectat === false){
        alert("Trebuie sa te conectezi pentru a posta o recenzie");
    }
    else{
        var x = document.getElementById("tabel_recenzii");
        var y = document.createElement('div');
        var text = document.getElementById("recenzie").value;
        var recenzie = document.createElement('div');
        var titlu = document.createElement('div');
        titlu.innerHTML = "Recenzie adaugata de " + t + ":";
        recenzie.innerHTML = text;
        recenzie.style.marginLeft = "40px";
        titlu.style.fontSize = "20px";
        y.append(titlu);
        y.append(recenzie);
        var spatiu = document.createElement('br');
        y.append(spatiu);
        y.style.fontSize = "15px";
        x.append(y);
        var obiect = {
            user : t,
            recenzie : text
        }

        fetch('http://localhost:3000/recenzii', {
        method: 'post', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obiect)
    }).then(function(response) {
        window.location.reload();
    })
    }
}
function schimba_poza(){
    fetch('http://localhost:3000/linkuri_poze', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                var x = document.getElementById("poza_produs");
                for( i = 0; i < data.length; i++ ){
                    var n = x.src.search(data[i].link1);
                    if( n != -1 ){
                        x.src = data[i].link2;
                    }
                    else{
                        n = x.src.search(data[i].link2);
                        if( n != -1 ){
                            x.src = data[i].link1;
                        }
                    }
                }
            })
        });                   
}

