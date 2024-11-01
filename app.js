import express from "express";
import routes from "./routes/router.js";
import connection from "./connection/connection.js";
import User from "./models/User.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/app",routes);

await connection.sync({force:true});

app.listen(8000,()=>{

})