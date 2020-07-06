import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Button, Card, Elevation, Tag } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import logo from "./hsbt-logo-kid.png";

interface Props {}
interface State {}

class Article extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className={styles.main}>
        <Card
          interactive={true}
          elevation={Elevation.TWO}
        >
          <Link
            to="/"
            className={styles.leftMenu}
            style={{ textDecoration: "none" }}
          >
            <img alt="logo" src={logo} className={styles.logo} />
            <p>Xàm xí cùng Lựng </p>
          </Link>
          <Tag round>
            Phá mồi
          </Tag>

          <p>Card content</p>
          <Button>Xem</Button>
        </Card>
      </div>
    );
  }
}

export default Article;
