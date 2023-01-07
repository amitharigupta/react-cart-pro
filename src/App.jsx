import "./styles/app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  )
}

export default App
