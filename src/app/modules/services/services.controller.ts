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
  } catch (error) {
    console.log(error);
  }
};

export const ServicesController = {
  createService,
};
