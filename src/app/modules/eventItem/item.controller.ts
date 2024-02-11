import { Request, Response } from "express";
import { ItemService } from "./item.service";

const createItem = async (req: Request, res: Response) => {
  try {
    const { item: itemData } = req.body;
    const result = await ItemService.createItemIntoDB(itemData);

    res.status(200).json({
      success: true,
      message: "Item is created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getAllItem = async (req: Request, res: Response) => {
  try {
    const result = await ItemService.getAllItemFromDB();
    res.status(200).json({
      success: true,
      message: "Items are retrieved Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { item } = req.body;
    const id = req.params.id;
    const result = await ItemService.updateItem(id, item);
    res.status(200).json({
      success: true,
      message: "Item updated Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};
const deleteItem = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ItemService.deleteItem(id);
  res.status(200).json({
    success: true,
    message: "Item deleted Successfully",
  });
};

export const ItemController = {
  createItem,
  getAllItem,
  updateItem,
  deleteItem,
};
