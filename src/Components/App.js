import { Routes, Route, Navigate } from 'react-router-dom';
import ExampleView from '../Views/ExampleView';
import AuthView from '../Views/AuthView';
import Layout from './Layout';
import Report from './Report/Report';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthView />} />
        <Route path="example" element={<ExampleView />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="report" element={<Report />} />
      </Route>
    </Routes>
  );
}

export default App;
