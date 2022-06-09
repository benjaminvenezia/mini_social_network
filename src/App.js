import Button from "@mui/material/Button";
import GlobalStyle from "./utils/globalStyles";
import { Footer, Navbar } from "./components";
import {
  Homepage,
  LoginPage,
  RegisterPage,
  PostPage,
  ProfilPage,
  LandingPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route index path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
