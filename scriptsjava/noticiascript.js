// Definir la URL del archivo JSON
const url = 'noticias.json';

// Obtener la lista UL donde se van a mostrar las noticias
const newsList = document.getElementById('news-list');

// Realizar una petición HTTP GET para obtener el archivo JSON
fetch('./noticias.json')
  .then(response => response.json())
  .then(data => {
    // Recorrer las noticias y agregarlas a la lista UL
    data.noticias.forEach(noticia => {
      const listItem = document.createElement('li');
      listItem.textContent = noticia.titulo + ' - ' + noticia.fecha;
      newsList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error al obtener las noticias:', error);
  });
