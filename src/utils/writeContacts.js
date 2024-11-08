import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('Contacts successfully written.');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
