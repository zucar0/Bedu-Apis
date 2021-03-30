const express = require("express");
const server = express();
const products = [
  {
    id: 0,
    name: "Coca Cola 600ml",
    category: "Refresco",
  },
  {
    id: 1,
    name: "Gansito",
    category: "Pastelito",
  },
  {
    id: 2,
    name: "Pepsi 600ml",
    category: "Refresco",
  },
];
server.get("/products", function (request, response) {
  const c = request.query.c;
  if (c) {
    response.send(
      products.filter(
        (product) => product.category.toLowerCase() === c.toLowerCase()
      )
    );
  } else {
    response.send(products);
  }
});

// server.get("/products", function(request, response){
//     response.send(products);
// });
server.listen(9000);