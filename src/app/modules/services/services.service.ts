import { TService } from "./services.interface";
import { ServiceModel } from "./services.model";

const createServicesIntoDB = async (service: TService) => {
  const result = await ServiceModel.create(service);
  return result;
};

export const ServicesService = {
  createServicesIntoDB,
};
