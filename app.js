import express from "express";
import routes from "./routes/router.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/app",routes);

await connection.sync({force:false});

app.listen(SERVER_PORT,()=>{

})