const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, listar = false, limite) =>{

    return new Promise((resolve, reject) =>{
      
        let salida = '';
        let consola = '';

        for (let i = 0; i <= limite ; i++) {
            salida += `${base} X ${i} = ${ base * i } \n`;
            consola += `${base} ${'X'.green} ${i} ${'='.yellow} ${base * i} \n`;
        }
        if (listar) {
             
        console.log('=============================================='.green);
        console.log('              TABLA DEL '.red ,colors.blue(base)          );
        console.log('=============================================='.green);
        console.log('')
        console.log(consola)

        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        
           resolve(`Tabla del ${base}`)
    })
       
  

}

module.exports = {
    crearArchivo

}