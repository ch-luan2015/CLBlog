import React from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import styles from "./App.module.scss";
import  {Searchbar}  from "components/Searchbar";
import { Button, Card, Elevation } from "@blueprintjs/core";


import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./styles/core.scss";
const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <Card interactive={true} elevation={Elevation.TWO}>
        <h5><a href="#">Card heading</a></h5>
          <p>Card content</p>
          <Button>Submit</Button>
        </Card>

      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
