const fs = require('fs');
const colors = require('colors')


const crearArchivo = async (base = 5, listar=false, hasta=10) =>{
    
    try {
        
        let salida, consola= '';
    for (let i = 0; i <=hasta; i++) {
        salida += `${base} * ${i} = ${base*i}\n`;
        consola += `${base} ${'*'.yellow} ${i} = ${base*i}\n`;
        
                
    }

    if (listar) {
        console.log('================================================'.green)
        console.log(`TABLA  DE MULTIPLICAR`.grey, colors.blue(base))
        console.log('================================================'.green)
        
        console.log(consola)
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt ha sido creada`)
    
    return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}