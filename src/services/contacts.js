import { Contact } from '../db/contact.js';
import mongoose from 'mongoose';

export const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
    throw error;
  }
};

export const getContactById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`Invalid ID: ${id}`);
  }
  try {
    const contact = await Contact.findById(id);
    return contact;
  } catch (error) {
    console.error(`Error getting contact by ID: ${id}`, error);
    throw error;
  }
};
