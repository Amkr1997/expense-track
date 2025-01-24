import {
  useDeleteExpenseMutation,
  useGetExpensesQuery,
} from "../features/apiSlice";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

const Home = () => {
  const {
    data: expenses,
    isLoading: expensesLoading,
    isError,
    error,
  } = useGetExpensesQuery();

  const [deleteExpense] = useDeleteExpenseMutation();

  const deleteHandler = async (id) => {
    const response = await deleteExpense(id);

    if (response?.error?.status === 500) {
      toast.warning(response?.error?.data?.message);
    } else if (response?.error?.data?.status === 404) {
      toast.warn(response?.error?.data?.message);
    } else {
      toast.success(response?.data?.message);
    }
  };

  return (
    <section className="container py-4">
      <h2 className="py-2 text-center fw-medium">All Expense Listed</h2>

      <div className="row py-4">
        <div className="col-md-3">
          <Modal />
        </div>

        <div
          className="col-md-9"
          style={{ overflowY: "scroll", height: "30rem" }}
        >
          <table className="table table-warning">
            <thead className="table-danger">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Expense</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {isError && (
                <h3 className="text-center mt-5 display-5 fw-normal">
                  {error.message}
                </h3>
              )}
              {expensesLoading ? (
                <h2 className="text-center mt-5 display-5 fw-normal">
                  LOADING...
                </h2>
              ) : (
                expenses?.allExpense
                  ?.slice()
                  .reverse()
                  .map((expense, index) => {
                    return (
                      <tr key={expense?._id}>
                        <th scope="row">{index + 1}</th>
                        <td className="fw-medium text-capitalize">
                          {expense?.name}
                        </td>
                        <td className="fw-medium">Rs {expense?.price}</td>
                        <td className="fw-medium">{expense?.category}</td>
                        <td className="fw-medium">
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => deleteHandler(expense?._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Home;
