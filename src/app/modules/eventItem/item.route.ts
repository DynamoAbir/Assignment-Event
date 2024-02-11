import express from "express";
import { ItemController } from "./item.controller";

const router = express.Router();

router.get("/", ItemController.getAllItem);
router.post("/create-item", ItemController.createItem);
router.patch("/:id", ItemController.updateItem);
router.delete("/:id", ItemController.deleteItem);
export const ItemRoute = router;
