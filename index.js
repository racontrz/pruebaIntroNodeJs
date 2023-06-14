const {registrar, leer} = require('./operaciones')

const [x, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if(x === 'registrar') {
  registrar(nombre, edad, tipo, color, enfermedad)
}
if(x === 'leer') {
  leer()
}