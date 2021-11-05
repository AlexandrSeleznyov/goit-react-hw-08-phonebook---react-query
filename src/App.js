import React from "react";
import axios from "axios";
import { useFetchContacts } from "./hooks/useFetchContacts";
import ContactForm from "./components/ContactForm/ContactForm";
//import Filter from "./components/Filter/Filter";
//import ContactsList from "./components/ContactsList/ContactsList";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  const { contacts, isLoading } = useFetchContacts();
  return (
    <div>
      <ContactForm />
    </div>
  );
}
export default App;
