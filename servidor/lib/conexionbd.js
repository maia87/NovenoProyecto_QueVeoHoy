//en este archivo se colocan los parámetros para la conexión con la base de datos
var mysql      = require('mysql'); //este paquete conecta el proyecto con la BDD

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Cambio17',
  database : 'base_datos_peliculas'
});

module.exports = connection;
