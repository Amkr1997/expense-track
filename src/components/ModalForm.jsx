import { useState } from "react";
import { useAddExpenseMutation } from "../features/apiSlice";
import { toast } from "react-toastify";

const ModalForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [addExpense] = useAddExpenseMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await addExpense({ name, price, category });
    toast.success(response.data.message);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label className="form-label">Expense Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="form-label">Expense Price:</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <select
          className="form-control"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>--Select Category--</option>
          <option value="Grocery">Grocery</option>
          <option value="Leisure">Leisure</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Grooming">Grooming</option>
          <option value="Gadget">Gadget</option>
        </select>
        <br />
        <button
          className="btn btn-outline-success w-100 rounded-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ModalForm;
