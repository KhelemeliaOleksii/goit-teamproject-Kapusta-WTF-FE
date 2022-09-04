import { Routes, Route, Navigate } from 'react-router-dom';
import ExampleView from '../Views/ExampleView';
import ChartReportView from '../Views/ChartReportView';
import AuthView from '../Views/AuthView';
import Layout from './Layout';
import Report from './Report/Report';
import HomeView from '../Views/HomeView/HomeView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="example" element={<ExampleView />} />
        <Route path="chart-report" element={<ChartReportView />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="report" element={<Report />} />
      </Route>
    </Routes>
  );
}

export default App;
