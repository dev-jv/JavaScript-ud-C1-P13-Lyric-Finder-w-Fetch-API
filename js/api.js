import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        // console.log('Desde alli');
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        limpiarHTML();
        // UI.divMensajes.classList.remove('.error')
        spinner();

        setTimeout(() => {
            fetch(url)
                .then(respuesta => respuesta.json())
                .then(resultado => { 
                    console.log(resultado);
                        if(resultado.lyrics){
                            const{lyrics} = resultado;
                            console.log();
                            UI.divResultado.textContent = lyrics;
                            UI.headingResultado.textContent = `${this.cancion} - ${this.artista}`;
                        } else {
                            limpiarHTML();
                            UI.divMensajes.textContent = 'The song was not found, try again. '
                            UI.divMensajes.classList.add('error')

                            setTimeout(() => {
                                UI.divMensajes.classList.remove('error')
                                UI.divMensajes.textContent = ''
                            }, 2345);   
                        }
                    })
            }, 2345);
    }
}

function spinner(){

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    divSpinner.innerHTML = `
        <div class="cube1"></div>
        <div class="cube2"></div>
    `;
    resultado.appendChild(divSpinner);
}

function limpiarHTML(){
    while(UI.divResultado.firstChild){
        UI.divResultado.removeChild(UI.divResultado.firstChild);
    }

    while(UI.headingResultado.firstChild){
        UI.headingResultado.removeChild(UI.headingResultado.firstChild);
    }

    UI.formularioBuscar.reset();
    // UI.divMensajes.classList.remove('error')

}

export default API;