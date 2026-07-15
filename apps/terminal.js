// ====================================
// Niku.OS - Terminal
// apps/terminal.js
// ====================================

const terminalOutput = document.getElementById("terminalOutput");
const terminalInput = document.getElementById("terminalInput");

const filesystem = {
    "/": [
        "logs",
        "system",
        "users",
        "secret",
        "readme.txt",
        "boot.log"
    ],

    "/logs": [
        "log001.txt",
        "log002.txt",
        "log003.txt"
    ],

    "/system": [
        "kernel.dll",
        "niku.sys"
    ],

    "/secret":[
        "?????"
    ]
};

let currentPath="/";

let admin=false;

let glitchLevel=0;

// =====================

function print(text){

    terminalOutput.innerHTML+=text+"\n";

    terminalOutput.scrollTop=terminalOutput.scrollHeight;

}

// =====================

function prompt(){

    print("");

}

// =====================

function clearTerminal(){

    terminalOutput.innerHTML="";

}

// =====================

function list(){

    filesystem[currentPath].forEach(file=>{

        print(file);

    });

}

// =====================

function cd(folder){

    if(folder==".."){

        currentPath="/";

        return;

    }

    let novo=currentPath+"/"+folder;

    novo=novo.replace("//","/");

    if(filesystem[novo]){

        currentPath=novo;

    }

    else{

        print("Pasta inexistente.");

    }

}

// =====================

function type(file){

    switch(file){

        case "readme.txt":

            print("Bem-vindo ao Niku.OS");

            break;

        case "boot.log":

            print("Boot realizado com sucesso.");

            break;

        case "log001.txt":

            print("Dia 1: Tudo normal.");

            break;

        case "log002.txt":

            print("Dia 8: Algo está errado.");

            break;

        case "log003.txt":

            print("Dia 15: Ela está aqui.");

            break;

        default:

            print("Arquivo inexistente.");

    }

}

// =====================

function help(){

print(`
Comandos

help

dir

cd

pwd

type

clear

scan

admin

shutdown

nikusa

recover

version

whoami
`);

}

// =====================

function scan(){

print("Escaneando...");

setTimeout(()=>{

print("Nenhuma ameaça encontrada.");

},1500);

}

// =====================

function version(){

print("Niku.OS 1.0");

}

// =====================

function whoami(){

if(admin)

print("Administrador");

else

print("Usuário");

}

// =====================

function login(){

let senha=prompt("Senha:");

if(senha=="NIKU95"){

admin=true;

print("Modo administrador ativado.");

}

else{

print("Senha incorreta.");

}

}

// =====================

function recover(){

print("Recovery indisponível.");

}

// =====================

function nikusa(){

    glitchLevel++;

    switch(glitchLevel){

        case 1:

            print("ERROR 0x0001");

        break;


        case 2:

            print("Arquivo protegido.");

        break;


        case 3:

            print("Quem te contou esse nome?");

        break;


        case 4:

            print("...");

        break;


        case 5:

            print("Eu consigo ver você.");

            document.body.classList.add("glitch");

            nikusaGlitch();


            // começa a contagem de 5 minutos

            setTimeout(()=>{

                nikusaNotification();

            }, 10000);


        break;


        default:

            print("█");

    }

}

// =====================

function shutdown(){

document.body.innerHTML=`

<div style="

background:black;

color:white;

width:100vw;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

font-size:40px;

font-family:Consolas;

">

Desligando...

</div>

`;

}

// =====================

terminalInput.addEventListener("keydown",function(e){

if(e.key!="Enter") return;

let cmd=terminalInput.value.trim();

terminalInput.value="";

print("> "+cmd);

let args=cmd.split(" ");

let comando=args[0];

switch(comando){

case "help":

help();

break;

case "dir":

list();

break;

case "pwd":

print(currentPath);

break;

case "cd":

cd(args[1]);

break;

case "type":

type(args[1]);

break;

case "clear":

clearTerminal();

break;

case "scan":

scan();

break;

case "recover":

recover();

break;

case "version":

version();

break;

case "shutdown":

shutdown();

break;

case "whoami":

whoami();

break;

case "admin":

login();

break;

case "nikusa":

nikusa();

break;

default:

print("Comando desconhecido.");

}

});