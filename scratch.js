const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    anguloInicial = 0,
    anguloFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar),
    txtPixel = document.getElementById("txtPixel"),
    imagens = ["0_YFrg-NTFzLxzcoKS.png" , "franboesa.png"];

var posicaoSuperior = 300,
    posicaoEsquerda = 70,
    topAvatar,
    leftAvatar;
    anguloAvatar = 0;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";
imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px",''));
}

function getLeftStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value);
        if (posicaoEsquerda < posicaoEsquerdaInicial) {
            posicaoEsquerda = posicaoEsquerdaInicial;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
}

function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar < posicaoEsquerdaFinal) {
        posicaoEsquerda += parseInt(txtPixel.value);
        if (posicaoEsquerda > posicaoEsquerda) {
            posicaoEsquerda = posicaoEsquerdaFinal;
        }
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para direita. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
}

function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar > posicaoSuperiorInicial) {
        posicaoSuperior -= parseInt(txtPixel.value);
        if (posicaoSuperior < posicaoSuperiorInicial) {
            posicaoSuperior = posicaoSuperiorInicial;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);
}

function moverParaBaixo() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar < posicaoSuperiorFinal) {
        posicaoSuperior += parseInt(txtPixel.value);
        if (posicaoSuperior > posicaoSuperiorFinal) {
            posicaoSuperior = posicaoSuperiorFinal;
        }
        imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    }
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);
}

function girarHorario() {
    console.clear();
    console.log(" angulo do avatar antes: ", anguloAvatar + "deg");
    if (anguloAvatar < anguloFinal) {
        anguloAvatar += parseInt(txtPixel.value);
        if (anguloAvatar > anguloFinal) {
            anguloAvatar = anguloFinal;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horario. Tente outro botão.");
    }
    console.log("Angulo do avatar depois: ", anguloAvatar + "deg");
}

function girarAntiHorario() {
    console.clear();
    console.log(" angulo do avatar antes: ", anguloAvatar + "deg");
    if (anguloAvatar > anguloInicial) {
        anguloAvatar -= parseInt(txtPixel.value);
        if (anguloAvatar < anguloInicial) {
            anguloAvatar = anguloInicial;
        }
        imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horario. Tente outro botão.");
    }
    console.log("Angulo do avatar depois: ", anguloAvatar + "deg");
}

function deslizarParaDireita() {
    var img = document.getElementById("imgAvatar")
    img.style.transition = "margin-left 1s ease-in-out"
    img.style.marginLeft = "100px"
}

function deslizarParaEsquerda() {
    var img = document.getElementById("imgAvatar")
    img.style.transition = "margin-left 1s ease-in-out"
    img.style.marginLeft = "-100px"
}

function deslizarParaCima() {
    var img = document.getElementById("imgAvatar")
    img.style.transition = "margin-top 1s ease-in-out"
    img.style.marginTop = "-100px"
}

function deslizarParaBaixo() {
    var img = document.getElementById("imgAvatar")
    img.style.transition = "margin-top 1s ease-in-out"
    img.style.marginTop = "100px"
}

function irPosiçao() {
    var img = document.getElementById("imgAvatar");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var randomX = Math.floor(Math.random() * (screenWidth - img.width));
    var randomY = Math.floor(Math.random() * (screenHeight - img.height));
    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";
}

function direçaoE() {
    var image = document.getElementById("imgAvatar");
    image.style.transform = "scaleX(-1)";
}

function direçaoD() {
    var image = document.getElementById("imgAvatar");
    image.style.transform = "scaleX(+1)";
}
  
function deslizarPosiçao() {
    var img = document.getElementById("imgAvatar");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var randomX = Math.floor(Math.random() * (screenWidth - img.width));
    var randomY = Math.floor(Math.random() * (screenHeight - img.height));
    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";
    img.style.transition = "margin-left 1s ease-in-out";
    img.style.marginLeft = "100px";
}

  
  
function seguirM() {
    const imagem = document.getElementById("imgAvatar");
    let seguirCursor = true;

    document.addEventListener("mousemove", seguirCursorHandler);

    setTimeout(() => {
        seguirCursor = false;
        document.removeEventListener("mousemove", seguirCursorHandler);
    }, 3000);  // 3 segundos

    function seguirCursorHandler(event) {
        if (seguirCursor) {
            imagem.style.left = (event.pageX - imagem.offsetWidth / 2) + 'px';
            imagem.style.top = (event.pageY - imagem.offsetHeight / 2) + 'px';
        }
    }
}

function aumentarA(){
    var tamanhoAtual = imgAvatar.clientWidth;
    var novoTamanho = tamanhoAtual * 1.2;
    var tamanhoMaximo = 500;
    imgAvatar.style.width = novoTamanho + "px";
    
    if (novoTamanho <= tamanhoMaximo){
        imgAvatar.style.width = novoTamanho + "px";
    } else {
        alert("a imagem atingiu o valor maximo!")
    }
}

function diminuirA(){
    var tamanhoAtual = imgAvatar.clientWidth;
    var tamanhoMinimo = 100;
    var novoTamanho = tamanhoAtual * 0.8;

    if(novoTamanho >= tamanhoMinimo){
        imgAvatar.style.width = novoTamanho + "px";
    } else {
        alert("a imagem atingiu o valor minimo")
    }
}

function trocarAvatar(){
    for(let i = 0; i < imagens.length; i++){
        if(! imgAvatar.src.includes(imagens[i])){
            imgAvatar.src = "./" + imagens[i];
            break;
        }
    }
}

function desaparecerAvatar() {
    var imagem = document.getElementById("imgAvatar");
    imagem.style.display = "none";
}

function aparecerAvatar() {
    var imagem = document.getElementById("imgAvatar");
    imagem.style.display = "block"; // ou 'inline' dependendo do estilo original da imagem
}

(function(){
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event;
        if(event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientop || body && body.clientTop|| 0);
    }

    txtMouseX.value = event.pageX
    txtMouseY.value = event.pageY
}
})()
