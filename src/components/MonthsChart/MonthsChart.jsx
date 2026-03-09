import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectExpens, selectIncomes } from "../../redux/selectors";
import { ChartContainer } from "./MonthChart.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const MonthsChart = ({ type, month }) => {
  const expenses = useSelector(selectExpens) || [];
  const incomes = useSelector(selectIncomes) || [];

  const data = type === "incomes" ? incomes : expenses;

  const arrCategor = data.reduce((acc, item) => {
    if (new Date(item.date).getMonth() !== month) return acc;

    const key = item.category.value;

    if (!acc[key]) {
      acc[key] = {
        value: key,
        label: item.category.label,
        sum: 0,
      };
    }

    acc[key].sum += Number(item.sum);
    return acc;
  }, {});

  const result = Object.values(arrCategor).sort((a, b) => b.sum - a.sum);
  const sums = result.map((item) => item.sum);

  const chartData = {
    labels: result.map((item) => item.label.split(" ")),
    datasets: [
      {
        data: sums,
        backgroundColor: result.map((_, index) => {
          const pattern = ["#FF751D", "#FFDAC0", "#FFDAC0"];
          return pattern[index % pattern.length];
        }),
        borderRadius: 10,
        barThickness: "38",
        hoverBackgroundColor: result.map((_, index) => {
          const pattern = ["#FF751D", "#FFDAC0", "#FFDAC0"];
          return pattern[index % pattern.length];
        }),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 12 },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 6,
        color: "#52555F",
        font: { size: 12, weight: "400" },
        formatter: (value) => `${value.toLocaleString()} грн`,
        
      },
    },
    interaction: {
      mode: "none",
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          color: "#52555F",
          font: { size: 12, weight: "400" },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
        },
        border: { color: "transparent" },
      },
      y: {
        beginAtZero: true,
        grace: "5%",
        display: true,
        grid: {
          display: true,
          drawTicks: false,
          color: "#E5E5E5",
          drawBorder: false,
        },
        ticks: { display: false },
        border: { color: "transparent" },
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={chartData} options={options} />
    </ChartContainer>
  );
};
