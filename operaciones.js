/* const fs = require('fs');


const registrar = (nombre, edad, tipo, color, enfermedad)=>{
  const citas = {
    nombre,
    edad, 
    tipo,
    color,
    enfermedad
  }
  fs.writeFileSync('citas.json', JSON.stringify(citas))
  console.log('Registrado Correctamente');
}

const leer = () => {
  const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
  console.log(data);
}

module.exports = {
  registrar,
  leer
}; */

const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const cita = JSON.parse(fs.readFileSync('citas.json','utf-8'))
  cita.push({nombre, edad, tipo, color, enfermedad})
  fs.writeFileSync('citas.json', JSON.stringify(cita))
  console.log('Datos Ingresados Correctamente');
}

const leer = () => {
  const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
  console.log(data);
}

module.exports = {
  registrar,
  leer
};