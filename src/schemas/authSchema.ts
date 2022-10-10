import joi from "joi";
import { CreateUserData } from "../types/CreateUserDataType";

export const loginSchema = joi.object<CreateUserData>({
  email: joi
    .string()
    .email()
    .required()
    .label("A valid email address is required"),
  password: joi
    .string()
    .min(10)
    .required()
    .label("Password is a required field"),
});

export const registrationSchema = joi.object<CreateUserData>({
  name: joi.string().required().label("Name is a required field"),
  lastName: joi.string().required().label("Last name is a required field"),
  email: joi
    .string()
    .email()
    .required()
    .label("A valid email address is required for registration"),
  password: joi
    .string()
    .min(10)
    .required()
    .label("Password is a required field"),
  confirmPassword: joi
    .string()
    .min(10)
    .required()
    .valid(joi.ref("password"))
    .label("Typed passwords are not the same"),
});
