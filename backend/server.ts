// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import controller from "./Routes/controller";
import part_controller from "./Routes/part_controller";
import sql_init from "./sql/init";
import config from "./Utils/config";


const server = express();
sql_init();
const currentPort = config.port;
server.use(cors());
server.use(express.json());
server.use("/problem/parts",part_controller);
server.use("/problem",controller);
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )