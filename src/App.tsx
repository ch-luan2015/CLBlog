import React from "react";
import "./App.module.scss";
import Header from "components/Header";
import styles from "./App.module.scss";
import Sidebar from "components/Sidebar";
import Article from "components/Article";
import News from "components/News";



const App: React.FC = () => {
  return (
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
          <div className={styles.news}>
            <News/>
          </div>
        </div>
        <div className={styles.footer}></div>
    </div>
  );
};

export default App;
