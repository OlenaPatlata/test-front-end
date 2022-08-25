import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import HomePage from "pages/HomePage";

import Container from './components/Container/Container';


function App() {
  return (
    <Container>
      <HomePage />

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggablePercent={60}
        pauseOnHover
        limit={3}
      />
    </Container>
  );
}

export default App;