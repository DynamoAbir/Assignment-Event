import { TItem } from "./item.interface";
import { ItemModel } from "./item.model";

const createItemIntoDB = async (item: TItem) => {
  const result = await ItemModel.create(item);
  return result;
};
const getAllItemFromDB = async () => {
  const result = await ItemModel.find();
  return result;
};
const updateItem = async (id: string, item: TItem) => {
  const result = await ItemModel.findByIdAndUpdate(id, item, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteItem = async (id: string) => {
  const result = await ItemModel.findByIdAndDelete(id);
  return result;
};

export const ItemService = {
  createItemIntoDB,
  updateItem,
  getAllItemFromDB,
  deleteItem,
};
