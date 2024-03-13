const sectionCards = document.getElementById('cards');
const listaCard = document.getElementById('listaCard');
const totalPersonagens = document.getElementById('personagens');
const totalLocalizacao = document.getElementById('localizacao');
const totalEpisodios = document.getElementById('episodios');

const exibirPersonagens = () => {
    api.get('/character')
        .then(res => {
            const personagens = res.data.results;

            personagens.forEach(persona => {
                const li = document.createElement('li');
                const hr = document.createElement('hr');
                li.setAttribute('class', 'card');
                listaCard.appendChild(li);


                li.innerHTML = `
            <img src="${persona.image}" alt="">
            <div class="cardInfo">
                <div class="tituloStatus">
                    <h2>${persona.name}</h2>
                    <p>${persona.status} - ${persona.species}</p>
                </div>
                <div class="localizacao">
                    <p class="ultima">Ultima localização conhecida</p>
                    <p class="local">${persona.location.name}</p>
                </div>

                <div class="capitulo">
                    <p class="visto">Visto a ultima vez em:</p>
                    <p class="nome">${persona.episode[0]}</p>
                    </div>
                    `

                if ((persona.id) % 2 === 0 && persona.id < personagens.length - 1) {
                    listaCard.appendChild(hr);
                }
            });

            totalPersonagens.innerText = res.data.info.count;

            

        })
        .catch(err => {
            console.log(err);
        })
}

const pegarLocais = () => {
    api.get('/location')
        .then(res => {

            totalLocalizacao.innerText = res.data.info.count


        })
        .catch(err => {
            console.log(err);
        })
}

const pegarEpisodios = () => {
    api.get('/episode')
        .then(res => {

            totalEpisodios.innerText = res.data.info.count


        })
        .catch(err => {
            console.log(err);
        })
}

exibirPersonagens();
pegarLocais();
pegarEpisodios();
