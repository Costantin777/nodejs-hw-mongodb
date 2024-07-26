import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

// Імпортуйте модуль env з файлу './env.js'
import { env } from './env.js';

// Встановіть конфігурацію для Cloudinary
cloudinary.v2.config({
  secure: true,
  cloud_name: env('CLOUDINARY_NAME'), // Використовуйте функцію env для отримання значення
  api_key: env('API_KEY'), // Використовуйте функцію env для отримання значення
  api_secret: env('API_SECRET'), // Використовуйте функцію env для отримання значення
});

// Функція для завантаження файлу на Cloudinary
export const saveFileToCloudinary = async file => {
  try {
    const response = await cloudinary.v2.uploader.upload(file.path);
    return response.secure_url;
  } catch (error) {
    console.error('Помилка при завантаженні на Cloudinary:', error.message);
    throw error;
  }
};
import { config } from 'dotenv';
