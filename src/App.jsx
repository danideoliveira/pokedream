import { GlobalStyle } from "./helpers/GlobalStyles";
import "./fonts/fonts.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ fontSize: "1.8rem" }}
        />
        <AnimatedRoutes />
      <Footer/>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
