import React from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import styles from "./App.module.scss";
import Sidebar from "components/Sidebar"
import { Button, Card, Elevation } from "@blueprintjs/core";



const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Header />
        <Sidebar/>
      </BrowserRouter>
    </div>
  );
};

export default App;
