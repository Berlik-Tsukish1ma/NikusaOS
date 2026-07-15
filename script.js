console.log("SCRIPT OK");

function openWindow(id){

    let janela = document.getElementById(id);

    if(janela){

        janela.style.display = "block";
        janela.style.zIndex = "9999";

    }

}


function closeWindow(id){

    let janela = document.getElementById(id);

    if(janela){

        janela.style.display = "none";

    }

}


function toggleStart(){

    let menu = document.getElementById("startMenu");

    console.log("Menu:", menu);


    if(menu.style.display === "block"){

        menu.style.display="none";

    }else{

        menu.style.display="block";

    }

}


function shutdown(){

    document.body.innerHTML="Niku.OS desligado";

}