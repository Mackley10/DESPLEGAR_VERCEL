/*

console.log('Hola')
const http = require('http');
http.createServer((req, res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    res.write('Hola Mundo'); // significa que como respuesta a una req sera Hola Mundo
    res.end();
})
    .listen(8080); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchando el puerto: ', 8080);

--

//Haciendo lo mismo pero para el puerto 404
const http = require('http');
http.createServer((req, res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
    res.writeHead(404) // recurso no encontrado

    res.write('404 |page no found'); // significa que como respuesta a una req será 404
    res.end();
})
    .listen(8080); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchabdo el puesto: ', 8080);

--

//      Para que se descargue el archivo csv

const http = require('http');

http.createServer((req, res) => { // Crea un servidor HTTP
    console.log(req); // Registra la solicitud HTTP en la consola

    res.setHeader('Content-Disposition', 'attachment;filename=lista.csv'); // Establece el encabezado para la descarga de un archivo CSV
    res.writeHead(200, { 'Content-Type': 'application/csv' }); // Establece el código de estado de respuesta 200 OK y el tipo de contenido como CSV

    // Escribe datos CSV en la respuesta
    res.write('id,nombre\n');
    res.write('1,Fernando\n');
    res.write('2,Mariza\n');
    res.write('3,Gladys\n');

    res.end(); // Finaliza la respuesta
})
    .listen(8080); // El servidor escucha en el puerto 8080
console.log('Escuchando el puerto:', 8080); // Mensaje de registro

*/

//      Parte 3, comentando

const http = require('http');

http.createServer((req, res) => { // Crea un servidor HTTP
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
    // res.writeHead(201, { 'Content-Type': 'application/json'}) // recurso no encontrado
    // res.setHeader('Content-Disposition', 'attachment;filename = lista.csv');

    // res.writeHead(200, { 'Content-Type': 'application/csv'})

    // res.write('id,nombre\n');
    //res.write('1,Fernando\n');
    // res.write('2,Mariza\n');
    // res.write('3,Gladys\n');
    res.write('Hola Mundo ');
    res.end();
})
    .listen(8080); // El servidor escucha en el puerto 8080
console.log('Escuchando el puerto:', 8080); // Mensaje de registro
