import { TService } from "./services.interface";
import { ServiceModel } from "./services.model";

const createServicesIntoDB = async (service: TService) => {
  const result = await ServiceModel.create(service);
  return result;
};
const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};
const updateService = async (id: string, service: TService) => {
  const result = await ServiceModel.findByIdAndUpdate(id, service, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteService = async (id: string) => {
  const result = await ServiceModel.findByIdAndDelete(id);
  return result;
};

export const ServicesService = {
  createServicesIntoDB,
  getAllServiceFromDB,
  updateService,
  deleteService,
};
