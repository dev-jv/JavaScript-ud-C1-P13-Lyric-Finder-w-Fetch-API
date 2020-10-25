import API from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent = 'All fields are requiered!'
        UI.divMensajes.classList.add('error');
    
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 2345);
    return;
    }
const busqueda = new API(artista, cancion);

busqueda.consultarAPI();
// console.log(busqueda);
}
