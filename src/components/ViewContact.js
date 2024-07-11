// Importing hooks and components
import { useEffect, useCallback } from 'react';
import ContactPage from './ContactPage';

// Creating ViewContact functional component
const ViewContact = ({ contacts, setContacts }) => {

  // Fetching contacts from API
  const fetchData = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setContacts(data);
  }, [setContacts]);

  useEffect(() => {
    if (contacts.length === 0) {
      fetchData();
    }
  }, [contacts.length, fetchData]);

  // Function to delete a contact
  const deleteContact = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="contact-container">
      {/* Map function to display each contact */}
      {contacts.map((contact) => (
        <ContactPage
          key={contact.id}
          contact={contact}
          onDelete={deleteContact}
        />
      ))}
    </div>
  );
};

export default ViewContact;
