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
  NotFound,
  EditPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
