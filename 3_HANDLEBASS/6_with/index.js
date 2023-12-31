
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// configurando o handlebars com template engine 
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")

app.get('/post', (req,res) =>{
    const post = {
        title: "Aprendendo Node.js",
        category: "javascript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        coments: 4 
    }
    res.render("post", {post})
})

app.get("/dashboard", (req, res) => {
    const itens = ['item a', 'intem b', 'item c']
    res.render("dashboard", {itens})
})

app.get("/", (req,res) => {
    const usuario = {
        nome: "Caique",
        profissao: "Programador",
        idade: 19 
    }
    
    const auth = true

    res.render('home', {usuario, auth})
})




app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000!')
})
