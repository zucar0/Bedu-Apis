// 1. Importar el módulo de HTTP (interno)
const http = require("http");
// 2. Crear el servidor
const server = http.createServer(function (request, response) {
  // 4. Esta función se va a ejecutar en cada petición.
  // 5. Escribir en el mensaje de respuesta "Hello World"
  response.write("Hello World");
  // IMPORTANTE: 6. Se termina la petición / se envía el mensaje al cliente
  response.end();
});
// 3. Escuchar un puerto
// Puerto: Es un canal comunicación que tiene disponible la máquina
// 0 - 65550 => 0 - 1023 son de uso exclusivo del sistema operativo
// 22 -> SSH, 80 -> HTTP, 443 -> HTTPS
server.listen(8080);