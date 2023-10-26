const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');



console.clear();    


console.log( argv )

// console.log(process.argv);  

// const [,,vr3] = process.argv;
// const [,base] = vr3.split('=')
// console.log(vr3, base)





// let base = 10;
crearArchivo( argv.b, argv.l, argv.m )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err)) 