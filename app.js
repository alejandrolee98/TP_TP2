import express from "express";
import routes from "./routes/router.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import roleSeed from "./seed/rolesSeed.js";
import userSeed from "./seed/usersSeed.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/app",routes);

await connection.sync({force:true});
await roleSeed();
await userSeed();

app.listen(SERVER_PORT,()=>{

})