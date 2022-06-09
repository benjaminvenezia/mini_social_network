import Button from "@mui/material/Button";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./utils/globalStyles";
import { Footer, Navbar } from "./components";

function App() {
  return (
    // <Button size="large" variant="contained" color="secondary">
    //   Hello World
    // </Button>
    <>
      <GlobalStyle />
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
