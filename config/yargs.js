const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'muestra el resultado si esta en TRUE'
                    })
                    .option('m',{
                        alias: 'limite',
                        type: 'number',
                        demandOption: true,
                        describe: 'establece el limite'
                    })                                        
                    .check((argv, options) => {
                        if ( isNaN(argv.base) ) {
                            throw 'la base tiene que ser un numero'
                        }

                        return true
                    })
                    .check((argv, options) => {
                        if ( isNaN(argv.limite) ) {
                            throw 'el limite debe ser un numero no una letra'
                        }

                        return true
                    })                      
                    .argv;

module.exports = argv;