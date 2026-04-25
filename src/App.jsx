import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InboxPage from "./pages/InboxPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inbox" element={<InboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}
