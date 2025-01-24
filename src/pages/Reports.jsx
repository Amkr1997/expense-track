import { defaults, Chart as ChartJs } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useGetExpensesQuery } from "../features/apiSlice";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Reports = () => {
  const { data: expenses } = useGetExpensesQuery();

  const categoryRepresentation = expenses?.allExpense?.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;

    return acc;
  }, {});

  const totalCategoryVal = Object.values(categoryRepresentation || {}).reduce(
    (acc, curr) => (acc += curr),
    0
  );

  const categoryKeys = Object.keys(categoryRepresentation || {});
  const categoryValues = Object.values(categoryRepresentation || {});

  return (
    <section className="container">
      <h2 className="py-4 text-center">Expense Report</h2>
      <div className="row py-4">
        <div className="col-12 col-lg-6" style={{ height: "50vh" }}>
          <div className="card h-100">
            <Doughnut
              data={{
                labels: categoryKeys,
                datasets: [
                  {
                    label: "Percentage",
                    data: categoryValues.map(
                      (categoryVal) => (categoryVal / totalCategoryVal) * 100
                    ),
                    backgroundColor: [
                      "#22b8cf",
                      "#20c997",
                      "#94d82d",
                      "#fab005",
                      "#fd7e14",
                    ],
                  },
                ],
              }}
              options={{
                plugins: { title: { text: "Expenses category wise" } },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
