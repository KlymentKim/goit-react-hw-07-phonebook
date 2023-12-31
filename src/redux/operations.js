import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Встановлення базового URL для axios
axios.defaults.baseURL = 'https://64ae6308c85640541d4cf69e.mockapi.io/api/v3/';
const path = '/contacts'

// Thunk-дії fetchContacts - одержання масиву контактів (метод GET) запитом.
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // Унікальний рядок, що ідентифікує цю дію
  async (_, thunkAPI) => {
    try {
      // Надсилання GET-запиту на '/contacts'
      const response = await axios.get(path);
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Створення асинхронної Thunk-дії addContacts
export const addContacts = createAsyncThunk(
  'contacts/addContact', // Унікальний рядок, що ідентифікує цю дію
  async (contacts, thunkAPI) => {
    try {
      // Надсилання POST-запиту на '/contacts' з даними { name, number }
      const response = await axios.post(path, contacts);
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Создание асинхронного Thunk-действия deleteContacts
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts', // Унікальний рядок, що ідентифікує цю дію
  async (contactId, thunkAPI) => {
    try {
      // Надсилання DELETE-запиту на `/contacts/${contactId}`
      const response = await axios.delete(`/contacts/${contactId}`);
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
