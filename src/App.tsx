import React from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import styles from "./App.module.scss";
import Sidebar from "components/Sidebar"
import { Button, Card, Elevation } from "@blueprintjs/core";



const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <div className={styles.side} style={{border: '2px solid yellow'}}>
            <Sidebar />
          </div>
          <div className={styles.content}><p style={{border: '2px solid red'}}>This content</p></div>
          <div className={styles.news}><p style={{border: '2px solid green'}}>This news</p></div>
        </div>
        <div className={styles.footer}></div>
    </div>
    </BrowserRouter>
  );
};

export default App;
