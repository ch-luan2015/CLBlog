import * as React from "react";
import logo from "./hsbt-logo-kid.png";

import { Link } from "react-router-dom";

import  {Searchbar}  from "components/Searchbar";
import styles from "./styles.module.scss";

export default class HeaderFull extends React.Component {
  render() {
    return (
      <div className={styles.main}>

          <Link to="/" className={styles.leftMenu}>
            <img alt="logo" src={logo} className={styles.logo} /> 
            <span >Xàm xí cùng Lựng </span>
          </Link>
          
      
        <div>
            <Searchbar/>
        </div>


        <div className={styles.rightMenu}>
            <i className="fab fa-facebook "/>
            <i className="fab fa-youtube " />
            <i className="fas fa-sign-in-alt " />
        </div>
      </div>
    );
  }
}
