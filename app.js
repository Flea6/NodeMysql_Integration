const express = require('express');
const app = express();
const User = require('./models/User');

//const db = require('./models/db'); foi para teste

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial - node+mysql");
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não castrado com sucesso!"
        })
    });

});

//res.send("Página cadastrar");

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
