import express from "express";
import { ServicesController } from "./services.controller";

const router = express.Router();

router.post("/create-service", ServicesController.createService);

export const ServiceRoute = router;
