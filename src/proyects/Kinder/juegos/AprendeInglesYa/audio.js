async function loquendo(texto) {//este codigo todavia no esta ni trabajado ni implementado, es una api que transforma texto a audio pero todavia no la probe ya que ademas solo tenia 100 consultas disponibles
    
const url = `https://text-to-speech27.p.rapidapi.com/speech?text=${texto}&lang=es`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0da5fe62c2msh1ee3f8c081ec628p1b74d6jsnd14d82b9f8e0',
		'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}