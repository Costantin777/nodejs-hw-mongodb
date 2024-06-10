import { getAllContacts, getContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(createHttpError(500, 'Error getting contacts'));
  }
};

export const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const contact = await getContactById(id);

    if (!contact) {
      next(createHttpError(404, 'Contact not found'));
      return;
    }

    res.status(200).json({
      message: `Successfully found contact with id ${id}!`,
      data: contact,
    });
  } catch (error) {
    next(createHttpError(500, `Error getting contact with id ${id}`));
  }
};
