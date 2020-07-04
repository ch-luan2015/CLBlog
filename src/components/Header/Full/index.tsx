import * as React from "react";
import logo from "./hsbt-logo-kid.png";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import  {Searchbar}  from "components/Searchbar";

export default class HeaderFull extends React.Component {
  render() {
    return (
      <div className={styles.main}>

          <Link to="/" className={styles.leftMenu} style={{textDecoration:'none'}}>
            <img alt="logo" src={logo} className={styles.logo} /> 
            <p >Xàm xí cùng Lựng </p>
          </Link>
          
      
        <div className={styles.midMenu}>
            <Searchbar />
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
