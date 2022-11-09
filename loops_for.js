var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log('Hola, ${estudiantes}');
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
console.log(estudiantes[i]);
}









var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log('Hola, ${estudiantes}');
}
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}