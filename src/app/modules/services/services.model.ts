import { Schema, model, connect } from "mongoose";
import { TService } from "./services.interface";

const serviceSchema = new Schema<TService>({
  imgUrl: { type: String },
  serviceName: { type: String, required: true },
  serviceDLineOne: { type: String, required: true },
  serviceDLineTwo: { type: String, required: true },
  serviceDLineThree: { type: String, required: true },
  serviceDLineFour: { type: String, required: true },
  serviceDLineFive: { type: String, required: true },
});

export const ServiceModel = model<TService>("Service", serviceSchema);
