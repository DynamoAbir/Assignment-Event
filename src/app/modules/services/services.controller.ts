import { Request, Response } from "express";
import { ServicesService } from "./services.service";

const createService = async (req: Request, res: Response) => {
  try {
    const { service: serviceData } = req.body;
    const result = await ServicesService.createServicesIntoDB(serviceData);

    res.status(200).json({
      success: true,
      message: "Service is created Successfully",
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

const getAllServices = async (req: Request, res: Response) => {
  try {
    const result = await ServicesService.getAllServiceFromDB();
    res.status(200).json({
      success: true,
      message: "Service are retrieved Successfully",
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
const updateService = async (req: Request, res: Response) => {
  try {
    const { service } = req.body;
    const id = req.params.id;
    const result = await ServicesService.updateService(id, service);
    res.status(200).json({
      success: true,
      message: "Service updated Successfully",
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
const deleteService = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ServicesService.deleteService(id);
  res.status(200).json({
    success: true,
    message: "Service deleted Successfully",
  });
};

export const ServicesController = {
  createService,
  getAllServices,
  deleteService,
  updateService,
};
