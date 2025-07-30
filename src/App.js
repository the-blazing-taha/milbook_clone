import Footer from "./components/footer";
import Navigationbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Header from "./components/header";
import Milbook from "./pages/milbbookf10";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/m1" element={<Milbook />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
