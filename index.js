// 1. Importar el módulo de express
const express = require("express");
// 2. Crear una instancia de un servidor
const server = express();
// 3. Definir las diferentes operaciones que hace mi API
server.get("/", function (request, response) {
  response.send("Hello World from Express"); // http -> .write + .end
});

server.get("/about", function (request, response) {
    response.send("<h1>Esto es un about</h1>");
  });

  server.get("/contact", function (request, response) {
    console.log(`${__dirname}/contact.html`);
    response.sendFile(`${__dirname}/contact.html`); 
  });

// Utilizando el Query String
// localhost:8090/suma ? a = 10 & b = 20
// 30
server.get("/suma", function (request, response) {
    const a = parseInt(request.query.a);
    const b = parseInt(request.query.b);
    response.send(`La suma de ${a} + ${b} = ${a + b}`);
  });
  
//RESTAR
server.get("/resta", function (request, response) {
    const a = parseInt(request.query.a);
    const b = parseInt(request.query.b);
    response.send(`La resta de ${a} + ${b} = ${a - b}`);
  });

  //FACTORIAL
  server.get("/factorial", function(request,response){
    const n = parseInt(request.query.n);
    function factorialRecursivo (n) { 
        if (n == 0){ 
            return 1; 
        }
        return n * factorialRecursivo (n-1); 
    }
    const respuesta = factorialRecursivo(n);
    response.send(`El factorial de ${n} = ${respuesta}`)
  });

// 4. Escuchar un puerto
server.listen(8090);