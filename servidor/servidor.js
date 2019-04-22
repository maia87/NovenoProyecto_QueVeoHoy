//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');//sirve para parsear los atributos que son mandados en una URL
var cors = require('cors'); //se utiliza para no tener problemas al hacer peticiones entre dominios diferentes
var controladorPeliculas = require('./controladores/controladorPeliculas');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//Se setean las funciones que se van a ejecutar cuando se llame a las rutas correspondientes
//cuidar el orden en que se colocan las rutas, primero va la más específica.
app.get('/peliculas/recomendacion', controladorPeliculas.recomendarPelicula);
app.get('/peliculas',controladorPeliculas.obtenerListado);
app.get('/peliculas/:id', controladorPeliculas.obtenerPelicula);
app.get('/generos', controladorPeliculas.obtenerGeneros);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
