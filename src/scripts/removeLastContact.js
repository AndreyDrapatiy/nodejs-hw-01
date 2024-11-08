import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const existingContacts = await readContacts();
  existingContacts.splice(-1,1)

  await writeContacts(existingContacts)
};

removeLastContact();
