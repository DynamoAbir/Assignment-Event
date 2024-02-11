import { Schema, model } from "mongoose";
import { TItem } from "./item.interface";

const serviceSchema = new Schema<TItem>({
  imgUrl: { type: String },
  itemName: { type: String, required: true },
});

export const ItemModel = model<TItem>("Item", serviceSchema);
