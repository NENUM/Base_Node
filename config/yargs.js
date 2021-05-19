const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    demandOption: true,
                    default:false,
                    describe:'Lista la tabla de multiplicar'
                })
                .option('h',{
                    alias:'hasta',
                    type: 'number',
                    demandOption: true,
                    describe:'Limite de la tabla'
                })
                .check((argv, options)=>{
                    console.log(argv)
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;//Especifica y personaliza los comandos de consola para cada proyecto

module.exports=argv;