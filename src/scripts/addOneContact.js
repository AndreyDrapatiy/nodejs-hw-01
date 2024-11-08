import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const existingContacts = await readContacts();

  await writeContacts([...existingContacts, createFakeContact()])
};

addOneContact();
