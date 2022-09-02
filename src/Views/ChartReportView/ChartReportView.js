import ChartReport from "../../Components/ChartReport";

const expences = [
  {
    amount: 12,
    goods: "Говʼядина",
  },
  {
    amount: 7,
    goods: "Курятина",
  },
  {
    amount: 5,
    goods: "Свинина",
  },
  {
    amount: 5,
    goods: "Гусятина",
  },
];

export default function CharReportView() {
  return <ChartReport expences={expences} />;
}
