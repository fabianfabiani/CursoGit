const express = require('express');// Importa el módulo 'express', un framework para crear servidores web en Node.js.

const path = require('path');// Importa el módulo 'path', que permite manejar rutas de archivos y directorios.

const app = express();// Crea una instancia de la aplicación Express.

// Configura Express para servir archivos estáticos desde la carpeta 'public'.
// 'path.join(__dirname, 'public')' garantiza que se acceda correctamente a la carpeta sin importar el sistema operativo.
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para la página principal ('/'). 
// Cuando un usuario accede a esta ruta, se le envía el archivo 'index.html' desde la carpeta 'public'.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Define una ruta para la página de contacto ('/contacto').
app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contacto.html'));
});

// Inicia el servidor en el puerto 3000 y muestra un mensaje en la consola cuando está en funcionamiento.
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
