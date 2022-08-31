import ChartReport from "../../Components/ChartReport";

const expences = [
  {
    amount: 12,
    goods: "Говядина",
  },
  {
    amount: 7,
    goods: "Свинюшка",
  },
];

export default function CharReportView() {
  return <ChartReport expences={expences} />;
}
