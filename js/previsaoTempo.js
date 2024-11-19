// Guarda Global ID Local : 1090700
// Castelo Branco Global Id Local: 1050200 - apenas monsanto

// EndPoint : https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/{globalIdLocal}.json

const queryString = window.location.pathname;
let endPoint;

// Definindo o endpoint com base no caminho
if (queryString.includes("monsanto.html")) {
  endPoint = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1050200.json";
} else {
  endPoint = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1090700.json";
}

// Função para definir o ícone de acordo com a probabilidade de precipitação
function defineIcone(probabilidade) {
  if (probabilidade > 75) {
    return `../assets/icones/chuva.png`;
  } else if (probabilidade > 50) {
    return `../assets/icones/aguaceiros.png`;
  } else if (probabilidade > 25) {
    return `../assets/icones/nublado.png`;
  } else {
    return `../assets/icones/sol.png`;
  }
};



// Verifica a existência dos elementos antes de acessá-los
const dias = document.querySelectorAll(".temperatura-dia");
const min = document.querySelectorAll(".temperatura-min");
const max = document.querySelectorAll(".temperatura-max");
const icone = document.querySelectorAll(".temperatura-icon");

icone[0].src = "../assets/icones/chuva.png"

if (dias.length && min.length && max.length) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  fetch(endPoint)
    .then((res) => res.json())
    .then((data) => {
      const arrayInfo = data.data;

      arrayInfo.forEach((dia, index) => {
        const dataObj = new Date(dia.forecastDate);
        const diaFormatado = `${dataObj.getDate()}/${meses[dataObj.getMonth()]}`;

        if (index < dias.length) {
          dias[index].textContent = diaFormatado;
          min[index].textContent = `${dia.tMin}°`;
          max[index].textContent = `${dia.tMax}°`;
          //icone[index].src = dia.precipitaProb
        }
      });
    })
    .catch((error) => console.error("Erro ao buscar os dados:", error));
} else {
  console.error("Elementos de previsão do tempo não encontrados na página.");
}
