import ChartReport from "../../Components/ChartReport";

const expences = [
  {
    amount: 12,
    goods: "Pork",
  },
  {
    amount: 7,
    goods: "Beef",
  },
  {
    amount: 5,
    goods: "Chicken",
  },
];

export default function CharReportView() {
  return <ChartReport expences={expences} />;
}
