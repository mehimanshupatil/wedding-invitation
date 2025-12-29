import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WeddingPage from './pages/WeddingPage';
import { himanshuEvents } from './data/himanshuEvents';
import { shremalEvents } from './data/shremalEvents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/himanshu" element={<WeddingPage events={himanshuEvents} />} />
        <Route path="/shremal" element={<WeddingPage events={shremalEvents} />} />
        <Route path="/" element={<Navigate to="/himanshu" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
