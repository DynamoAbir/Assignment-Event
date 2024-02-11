import { Schema, model, connect } from "mongoose";

export type TService = {
  imgUrl: string;
  serviceName: string;
  serviceDLineOne: string;
  serviceDLineTwo: string;
  serviceDLineThree: string;
  serviceDLineFour: string;
  serviceDLineFive: string;
};
