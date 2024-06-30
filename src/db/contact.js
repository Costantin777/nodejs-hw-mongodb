import { model, Schema } from 'mongoose';

const Contact = new Schema(
  {
    name: {
      type: String,
      required: true, // Залишаємо обов'язковість для поля "name"
    },
    phoneNumber: {
      type: String,
      required: true, // Залишаємо обов'язковість для поля "phoneNumber"
    },
    email: {
      type: String,
      // Видаляємо обов'язковість для поля "email"
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', Contact);
