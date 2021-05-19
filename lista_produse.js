window.onload = function(){
    fetch('http://localhost:3000/Produse', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                var x = document.getElementById("lista_produse");
        x.style.display = "flex";
        x.style.flexDirection = "row";
        x.style.flexWrap = "wrap";
        x.style.justifyContent = "space-around";
        x.style.marginTop = "90px";
        x.style.marginLeft = "60px";
        x.style.justifyContent = "center";
        x.style.marginBottom = "50px";

        for( i = 0; i < data.length; i++ ){
            let produs = document.createElement('div');
            let denumire = document.createElement('p');
            let pret = document.createElement('p');
            let poza = document.createElement('img');
            let a = document.createElement('a');
            a.href = data[i].referinta;
            poza.src = data[i].poza;
            poza.style.maxWidth = "220px";
            poza.style.marginLeft = "5px";
            poza.style.marginRight = "5px";
            poza.style.maxHeight = "350px";
            poza.style.marginTop = "2%";
            poza.style.justifyContent = "center";
            denumire.innerHTML = data[i].denumire;
            denumire.style.textAlign = "center";
            pret.innerHTML = "Pret " + data[i].pret + "  lei";
            pret.style.textAlign = "center";
            produs.style.backgroundColor = "rgb(148, 148, 148)";
            produs.style.marginLeft = "20px";
            produs.style.marginBottom = "20px";
            produs.style.width = "230px";
            produs.className = "produse";
            produs.append(denumire);
            a.append(poza);
            produs.append(a);
            produs.append(pret);
            x.append(produs);
        }
    })
});                   
}

function aplica_filtre(){
    var x = document.getElementById("lista_produse");
    x.remove();
    fetch('http://localhost:3000/Produse', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                x = document.createElement('div');
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.flexWrap = "wrap";
    x.style.justifyContent = "space-around";
    x.style.marginTop = "90px";
    x.style.marginLeft = "60px";
    x.style.justifyContent = "center";
    x.style.marginBottom = "50px";
    var y = document.getElementById("lista_lista_produse");
    x.id = "lista_produse";
    y.append(x);
    var minim = document.getElementById("minim").value;
    var maxim = document.getElementById("maxim").value;
    for( i = 0; i < 10; i++ ){
        if( minim <= data[i].pret && maxim >= data[i].pret ){
            let produs = document.createElement('div');
            let denumire = document.createElement('p');
            let pret = document.createElement('p');
            let poza = document.createElement('img');
            let a = document.createElement('a');
            a.href = data[i].referinta;
            poza.src = data[i].poza;
            poza.style.maxWidth = "220px";
            poza.style.marginLeft = "5px";
            poza.style.marginRight = "5px";
            poza.style.maxHeight = "350px";
            poza.style.marginTop = "2%";
            poza.style.justifyContent = "center";
            denumire.innerHTML = data[i].denumire;
            denumire.style.textAlign = "center";
            pret.innerHTML = "Pret " + data[i].pret + "  lei";
            pret.style.textAlign = "center";
            produs.style.backgroundColor = "rgb(148, 148, 148)";
            produs.style.marginLeft = "20px";
            produs.style.marginBottom = "20px";
            produs.style.width = "230px";
            produs.append(denumire);
            a.append(poza);
            produs.append(a);
            produs.append(pret);
            produs.className = "produse";
            x.append(produs);
        }
    }
            })
        }); 
}
var stare_meniu = false;
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



var conectat = false;
function conectare(){

    var text1 = document.getElementById("username").value;
    var text2 = document.getElementById("password").value;

    if( text1 != "" && text2 != "" ){
        if( conectat === false ){
            var variabila = document.getElementById("Password");
            variabila.style.visibility = "hidden";
            variabila = document.getElementById("username").value;
            var x = variabila;
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
