// Funções para lidar com requisições GET e POST.

import { Request, Response } from "express";
import { Car } from "@prisma/client";
import prisma from "../prisma";

export const getCars = async (req: Request, res: Response): Promise<void> => {
  console.log(res);

  try {
    const cars: Car[] = await prisma.car.findMany();

    res.status(200).send(cars);
  } catch (error) {
    console.log(error);

    res.status(404).send({
      message: "Não foi possível exibir os carros registrados",
      status: error,
    });
  }
};

export const createCars = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await prisma.car.create({
      data: {
        ...req.body,
      },
    });

    res.status(201).send({ message: "Carro adicionado com sucesso" });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      message: "Não foi possível adicionar um novo carro",
      status: error,
    });
  }
};
