import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ServiceRoute } from "./app/modules/services/services.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

/* Application Routes */

app.use("/api/v1/services", ServiceRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Event Management System");
});

export default app;
