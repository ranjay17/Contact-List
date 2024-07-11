import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import ViewContact from './components/ViewContact';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  const [contacts, setContacts] = useState([]);

   // Function to update contact information
  const updateContact = async (id, updatedContact) => {
    console.log('Updating contact with ID:', id);
    try {
      // Simulate a successful response without making a network request
      const data = { ...updatedContact };
      console.log('Contact updated successfully:', data);
      setContacts(prevContacts => {
        const updatedContacts = prevContacts.map(contact => (contact.id === id ? data : contact));
        console.log('Updated contacts state:', updatedContacts);
        return updatedContacts;
      });
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Defining routes for different components */}
        <Route path="/" element={<ViewContact contacts={contacts} setContacts={setContacts} />} />
        <Route path="/add-contact" element={<AddContact setContacts={setContacts} />} />
        <Route path="/edit-contact/:id" element={<EditContact updateContact={updateContact} />} />
      </Routes>
    </div>
  );
}

export default App;
