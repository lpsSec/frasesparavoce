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
			  "Nós vamos sempre estar juntos não importa a situação."];

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