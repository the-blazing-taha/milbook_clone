import Footer from "./components/footer";
import Navigationbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/header";
import Milbook, {AZR_Nova, Customized_platform, System_on_board} from "./pages/milbbookf10";
import Contact from "./pages/contact";
import Services, {Services2} from "./pages/services";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/m1" element={<Milbook />} />
          <Route path="/services" element={<Services />} />
            <Route path="/service2" element={<Services2 />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/azr_nova" element={<AZR_Nova />} />
            <Route path="/sob" element={<System_on_board />} />
            <Route path="/customized_platform" element={<Customized_platform />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
