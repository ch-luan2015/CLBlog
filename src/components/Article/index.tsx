import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Button, Card, Elevation, Tag, AnchorButton } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import logo from "../../img/caphesua.jpg";
interface Props {}
interface State {}

class Article extends Component<Props, State> {
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
                <p>Cà Phê Sữa</p>
                <Tag round>Phá mồi</Tag>
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
              Tui thì nghe nhạc không nhiều, và thường có thói quen nghe bài nào
              chết bài nấy suốt một thời gian dài. Bến Thượng Hải là một trong
              những bài tui hay nghe, nghe từ thời còn học cấp 2. Thời ... 
              <Link  to="/" className={styles.button}> Đọc bài </Link>
            </p>
            
          </div>
        </Card>
      </div>
    );
  }
}

export default Article;
