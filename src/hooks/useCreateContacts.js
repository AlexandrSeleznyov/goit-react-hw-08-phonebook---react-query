import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

const createTodo = async ({ name, number, id }) => {
  const resp = await axios.post("/contacts", { name, number, id });
  return resp.data;
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(createTodo, {
    onSuccess() {
      queryClient.invalidateQueries("/todos");
      alert("Todo created");
    },
  });
  return {
    createTodo: mutateAsync,
    isCreating: isLoading,
  };
};

// const createContact = async (content) => {
//   const resp = await axios.post("/contacts", { content });
//   return resp.data;
// };

// export const useCreateContact = () => {
//   const queryClient = useQueryClient();
//   const { MutateAsync, isLoading } = useMutation(createContact, {
//     onSuccess() {
//       queryClient.invalidateQueries("/contacts");
//       alert("created");
//     },
//   });
//   return {
//     createContact: MutateAsync,
//     isCreating: isLoading,
//   };
// };
