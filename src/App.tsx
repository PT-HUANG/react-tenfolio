import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename="/react-tenfolio/">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
