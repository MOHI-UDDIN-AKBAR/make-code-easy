import React from "react";
import "./style/style.css";
import Switch from "./components/Switch";

import ResultsContextProvider from "./context/ResultContenxt";
const App = () => {
  return (
    <ResultsContextProvider>
      <React.Fragment>
        <Switch />
      </React.Fragment>
    </ResultsContextProvider>
  );
};

export default App;
