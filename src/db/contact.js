import { model, Schema } from 'mongoose';

const Contact = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: false},
    isFavourite: {type: Boolean, required: true, default: false},
    contactType: {type: String, required: true,
      enum: ['work', 'home', 'personal'], default: 'personal', },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', Contact);
