import Joi from 'joi';

export const createContactSchema = Joi.object({
  // userId: Joi.string().required(),
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});

export const updateContactSchema = Joi.object({
  // userId: Joi.string().required(),
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
import { object, string, required, boolean, valid } from 'joi';
