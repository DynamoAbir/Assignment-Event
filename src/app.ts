import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ServiceRoute } from "./app/modules/services/services.route";
import { ItemRoute } from "./app/modules/eventItem/item.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

/* Application Routes */

app.use("/api/v1/services", ServiceRoute);
app.use("/api/v1/items", ItemRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Event Management System");
});

export default app;
