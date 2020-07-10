import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Card, Tag } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import logo from "../../img/caphesua.jpg";

interface Props {
  logo?: any;
  userName?:string;
  title?: string;
  badge?: string;
  content?: string;
}
interface State {}

export default class View extends Component<Props, State> {
  state = {};
  render() {
    return (
      <div>
        <Card className={styles.main}>
          <Link
            to="/"
            className={styles.title}
            style={{ textDecoration: "none" }}
          >
            <img alt="logo" src={logo} className={styles.logo} />
            <div className={styles.tag}>
              <p>{this.props.userName}</p>
              <Tag round>{this.props.badge}</Tag>
            </div>
          </Link>

          <div className={styles.image}>
            <img
              src={require("../../img/benthuonghai.jpg")}
              alt="benthuonghai"
            />
          </div>

          <div className={styles.content}>
            <h1>Thượng Hải một chiều cay bụp mắt</h1>
            <p>04.07.2020</p>
            <p>
              {this.props.content}
              <Link to="/" className={styles.button}>
                Đọc bài
              </Link>
            </p>
          </div>
        </Card>
      </div>
    );
  }
}
