import express, { Express } from "express";
import { Port } from "./types";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/routes";

const app: Express = express();
const port: Port = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, (): void => {
  console.log("Servidor rodando em: http://localhost:3333");
});
