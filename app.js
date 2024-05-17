/*

//      Para hacer uso de una ruta especifica

const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
})

app.listen(8080)

--

//      Para manejar rutas no existentes con un comodín (*)

const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', function (req, res) {
    res.send('404 | Page not found')
})

app.listen(8080)

--

//      Cambiando las funciones tradicionales por funciones de flecha:

const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})
app.get('*', (req, res) => {
    res.send('404 | Page not found')
})
app.listen(8080)

---

//      Poniendo el puerto 8080 como variable

const express = require('express')
const app = express()
const port = 8080;
app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})
app.get('*', (req, res) => {
    res.send('404 | Page not found')
})
app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

--

//      para que este index.html sea publico en nuestro app.js

const express = require('express')
const app = express()
const port = 8080;
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path
app.get('/', (req, res) => {
    res.send('Home Page')
});
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});
app.get('*', (req, res) => {
    res.send('404 | Page not found')
})
app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


---

//      Borrando app.get('/', (req, res) de app.js y direccionando a 404.html

const express = require('express')
const app = express()
const port = 8080;
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


--

//      Para que al acceder a generics, se nos muestre solo generic y no generic.html
//      Hacemos lo mismo con element.

const express = require('express')
const app = express()
const port = 8080;
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

---

//      Inndicando que usaremos handlebars

const express = require('express')
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


--

//      Pasar argumentos desde el controlador,

const express = require('express')
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    });
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

---

//      Para uso de parciales

const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    });
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


---

//      Haciendo el renderizado de Elements y Generic

const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    });
})


app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    })
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


--

//      Cragando las variables de entorno

const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    });
})


app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    })
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})


*/

//      Agregando la pestaña salidas

const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    });
})


app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Armando David',
        titulo: 'Curso de node'
    })
});

app.get('/salidas',(req,res)=>{
    res.render('salidas',{
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

