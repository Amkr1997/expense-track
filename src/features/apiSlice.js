import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = import.meta.env.VITE_API_URL;

const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["GetAllExpenses"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),

  endpoints: (builder) => {
    return {
      addExpense: builder.mutation({
        query: (expenseData) => {
          return {
            url: `/add/expense`,
            method: "POST",
            body: expenseData,
          };
        },

        invalidatesTags: ["GetAllExpenses"],
      }),

      getExpenses: builder.query({
        query: () => {
          return {
            url: `/get/all/expenses`,
            method: "GET",
          };
        },

        providesTags: ["GetAllExpenses"],
      }),

      deleteExpense: builder.mutation({
        query: (expenseId) => {
          return {
            url: `delete/expense/${expenseId}`,
            method: "DELETE",
          };
        },

        invalidatesTags: ["GetAllExpenses"],
      }),
    };
  },
});

export const {
  useGetExpensesQuery,
  useAddExpenseMutation,
  useDeleteExpenseMutation,
} = apiSlice;

export default apiSlice;
