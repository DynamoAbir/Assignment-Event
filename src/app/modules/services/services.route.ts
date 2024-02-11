import express from "express";
import { ServicesController } from "./services.controller";

const router = express.Router();

router.get("/", ServicesController.getAllServices);
router.post("/create-service", ServicesController.createService);
router.patch("/:id", ServicesController.updateService);
router.delete("/:id", ServicesController.deleteService);
export const ServiceRoute = router;
