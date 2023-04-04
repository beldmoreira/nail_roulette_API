import joi from "joi";
import { NailPolishData } from "../types/NailPolishDataType";

export const nailPolishSchema = joi.object<NailPolishData>({
  name: joi.string().min(2).required().label("Name is a required field"),
  brand: joi.string().min(2).required().label("Brand is a required field"),
  shade: joi.string().min(2).required().label("Shade is a required field"),
  finish: joi.string().min(2).required().label("Finish is a required field"),
  expiration_date: joi
    .date()
    .required()
    .label("Expiration date is a required field"),
});
