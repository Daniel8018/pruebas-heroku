


/* 

@!!!!!!!!!!!!!!!!!!!!!!!!!
para subirlo a una web server ocupamos arreglar el puerto y agregar
el start
porque puede que sea el 8080 pero depende mucho!

para saber en que puerto necesita estarse corriendo 
pero en realidad.. es facil...

npm install dotenv

creamos el .env en la raiz

importamos el dotenv le ponemos el puerto a la variable de entorno

agregamos el "start" al package.json

*/

const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');









app.use(express.static('public'));


// RUTA HOME
app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Daniel',
        titulo: 'Node',
        subtitle: 'Match'
    });
});

// con la ruta /generic
app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre: 'Daniel',
        titulo: 'Node',
        subtitle: 'Match'
    });
});

// con la ruta /elements
app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Daniel',
        titulo: 'Node',
        subtitle: 'Match'
    });
});


// con la ruta /admin
app.get('/admin',(req,res)=>{
    res.send('Hello Administrator');
});
// cualquier otra ruta que no sean las de arriba

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, ()=>{
    console.log(`Example is running at http://localhost:${port}`);
});


