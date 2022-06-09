var frases = ["Você é muito especial para mim.",
              "Você é maravilhosa e eu te amo.",
              "Eu só fico feliz depois do seu Bom Dia.",
              "Eu te amo muito.",
              "Bom dia amor da minha vida.",
              "Nós vamos ser felizes para sempre.",
              "Gosto de acordar e pensar em você.",
              "Nunca fui tão feliz quanto sou ao seu lado.",
              "Gosto quando a gente se olha e sorri.",
              "Quero sempre poder acordar ao seu lado.",
              "Você me completa.",
              "Você é minha metade.",
              "Só sou completo com você.",
              "Queria poder te abraçar agora e sempre.",
              "Seu abraço me liberta de qualquer sofrimento.",
              "Seu olhar me anima mesmo nos piores momentos.",
              "Seu abraço tira qualquer peso de mim.",
              "Eu amo estar ao seu lado.",
              "Mesmo quando estamos longe sinto que estamos tão perto...",
              "Bate saudades mesmo depois de ter ver.",
              "Nós vamos sempre estar juntos não importa a situação.",
              "Sem você eu não teria nada.",
              "As vezes parece que nos conhecemos a anos.",
              "Mesmo longe te sinto tão perto."];

var min = 0;
var max = frases.length - 1;

function hideTitle(){
    var elem = document.getElementById("title");
    elem.style.display = 'none';
}

function gerarFrase(){
    hideTitle();

    if( document.getElementById("frase") != null)
    {
        var elem = document.getElementById("frase");
        document.body.removeChild(elem);
    }

    var novaFrase = document.createElement("p");
    novaFrase.id = "frase";

    var texto = frases[Math.floor(Math.random() * (max - min + 1)) + min];

    novaFrase.append(texto);
    document.body.appendChild(novaFrase);
}

/**
Ref: https://medium.com/front-end-weekly/how-to-fill-your-website-with-lovely-valentines-hearts-d30fe66d58eb
*/
var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));

const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;

var hearts = [];
		
function generateHeart(x, y, xBound, xStart, scale)
{
	var heart = document.createElement("DIV");
	heart.setAttribute('class', 'heart');
	brd.appendChild(heart);
	heart.time = duration;
	heart.x = x;
	heart.y = y;
	heart.bound = xBound;
	heart.direction = xStart;
	heart.style.left = heart.x + "px";
	heart.style.top = heart.y + "px";
	heart.scale = scale;
	heart.style.transform = "scale(" + scale + "," + scale + ")";
	if(hearts == null)
		hearts = [];
	hearts.push(heart);
	return heart;
}

var down = false;
var event = null;

document.onmousedown = function(e) {
	down = true;
	event = e;
}

document.onmouseup = function(e) {
	down = false;
}

document.onmousemove = function(e) {
	event = e;
}

document.ontouchstart = function(e) {
	down = true;
	event = e.touches[0];
}

document.ontouchend = function(e) {
	down = false;
}

document.ontouchmove = function(e) {
	event = e.touches[0];
}

var before = Date.now();
var id = setInterval(frame, 5);
var gr = setInterval(check, 100);

function frame()
{
	var current = Date.now();
	var deltaTime = current - before;
	before = current;
	for(i in hearts)
	{
		var heart = hearts[i];
		heart.time -= deltaTime;
		if(heart.time > 0)
		{
			heart.y -= speed;
			heart.style.top = heart.y + "px";
			heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
    }
		else
		{
			heart.parentNode.removeChild(heart);
			hearts.splice(i, 1);
		}
	}
}

function check()
{
	if(down)
	{
		var start = 1 - Math.round(Math.random()) * 2;
		var scale = Math.random() * Math.random() * 0.8 + 0.7;
		var bound = 30 + Math.random() * 20;
		generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
	}
}