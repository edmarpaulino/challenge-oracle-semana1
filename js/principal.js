function main() {
	const botaoCripto = document.getElementById("cripto");
	const botaoDescripto = document.getElementById("descripto");
	const outputArea = document.getElementById("text-output");
	const copyButton = document.getElementById("copy");
	const inputArea = document.getElementById("text-input");
	
	inputArea.value = "";

	botaoCripto.addEventListener("click", criptografarMensagem);
	botaoDescripto.addEventListener("click", descriptografarMensagem);

	copyButton.onclick = () => { navigator.clipboard.writeText(outputArea.value) }
}

main();
