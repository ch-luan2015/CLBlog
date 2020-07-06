import React from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import styles from "./App.module.scss";
import Sidebar from "components/Sidebar";
import Article from "components/Article";



const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <div className={styles.side}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Article/>
          </div>
          <div className={styles.news}></div>
        </div>
        <div className={styles.footer}></div>
    </div>
    </BrowserRouter>
  );
};

export default App;
