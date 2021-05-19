window.onload = function(){
    poza = document.getElementById("poza_produs").src;
    fetch('http://localhost:3000/recenzii', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                for( let i = 0; i < data.length; i++ ){
                    if( poza === data[i].poza ){
                    var x = document.getElementById("tabel_recenzii");
                    var y = document.createElement('div');
                    var text = data[i].recenzie;
                    var recenzie = document.createElement('div');
                    var titlu = document.createElement('div');
                    var t = data[i].user;
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
                    }
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

function posteaza(){
    var text = document.getElementById("recenzie").value;
    if( conectat == 0 ){
        var utilizator = "guest";
        var poza = document.getElementById("poza_produs").src;
    var recenzie = {
        user : utilizator,
        recenzie : text,
        poza : poza
    }
    fetch('http://localhost:3000/recenzii', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recenzie)
    }).then(function(response) {
       window.location.reload();
    })
    }
    else{
        var utilizator = t;
        var poza = document.getElementById("poza_produs").src;
    var recenzie = {
        user : utilizator,
        recenzie : text,
        poza : poza
    }
    fetch('http://localhost:3000/recenzii', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recenzie)
    }).then(function(response) {
       window.location.reload();
    })

    }
}

function adauga_in_cos(){

    var size = document.getElementById("marime").value;
    var pret = document.getElementById("1").textContent;
    var nume_produs = document.getElementById("nume").textContent;
    var cantitate = document.getElementById("cantitate").value;
    var poza = document.getElementById("poza_produs").src;
    if( size == "..." || cantitate == "" ){
        alert("Nu ai selectat marimea sau nu ai introdus cantitatea");
    }
    else{
        var produs = {
            marime : size,
            cantitate : cantitate,
            pret : pret,
            poza : poza,
            nume_produs : nume_produs
        }
        alert("Produs adaugat in cos");
        fetch('http://localhost:3000/cos_cumparaturi', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(produs)
        }).then(function(response) {
        window.location.reload();
        })
    }
}
var conectat = false;
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

