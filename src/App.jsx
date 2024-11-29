import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Result from "./components/Result";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [resultMessage, setResultMessage] = useState(false);

  return (
    <>
      <Header />
      {isSubmit ? (
        <Result resultMessage={resultMessage} />
      ) : (
        <Login
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
          resultMessage={resultMessage}
          setResultMessage={setResultMessage}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
