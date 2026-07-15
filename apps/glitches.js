function nikusaGlitch(){

    let overlay = document.createElement("div");

    overlay.id = "nikusaGlitch";

    overlay.innerHTML = `
        <img src="img/nikusa.png">
        <p>É rude falar de quem está escutando</p>
    `;

    document.body.appendChild(overlay);


    setTimeout(()=>{

        overlay.remove();

    },5000);

}

function nikusaNotification(){

    let aviso = document.createElement("div");

    aviso.id = "nikusaNotification";

    aviso.innerHTML = `
        <h2>NIKUSA.EXE</h2>
        <p>já ficou tempo demais vendo minhas coisas</p>
    `;


    document.body.appendChild(aviso);



    setTimeout(()=>{

        shutdown();

    },10000);

}