import { useQuery } from "react-query";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const fetchContacts = async () => {
  const { data } = await axios.get("/contacts");

  return data;
};

export const useFetchContacts = () => {
  const { data, isLoading } = useQuery("/contacts", fetchContacts);
  return { contacts: data, isLoading };
};
