import express from "express";
import bodyParser from "body-parser";
import sql from "msnodesqlv8";

const app = express();
app.use(bodyParser.json());

const connectionString = "server=DSN1191109146; Database=carros; Trusted_Connection=Yes; Driver={Sql Server Native Client 11.0}";

//leitura
app.get("/carros", (req, res) => {
    sql.query(connectionString, "SELECT * FROM carros",(erro, rows)=>{
        if(erro){
            res.status(500).json("Erro Interno de Servidor");
        }else{
            res.status(200).json(rows);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
