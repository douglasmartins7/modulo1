const express = require("express");

const server = express();

server.use(express.json());

// QUery params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Diego", "email": "douglas@trexcode.com.br" }

//CRUD - Create, Read, Update, Delete

/*
server.get("/teste", (req, res) => {
  
  Query params = ?teste=1
  ex: http://localhost:3000/teste?nome=Maria
  //const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}` });

});
*/

/*
server.get("/users/:id", (req, res) => {
  Route params = /users/1
  exa: http://localhost:3000/users/3
  const id = req.params.id;

  return res.json({ message: `Buscando o usuário ${id}` });
});
*/

const users = ["Diego", "Robson", "Victor"];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

//request body
server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);

/*Midlleware é uma função que recebe os parametros req e res, ele pode receber outros parametros, e faz alguma
coisa na nossa aplicação, manipula esses dados da requisição e resposta de alguma forma
*/
