import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      return {
        ...state,
        items: [{ id: nanoid(), ...payload }, ...state.items],
      };
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };
    },
    updateFilter: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);

  return items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
