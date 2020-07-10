import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import image from "../../img/hsbt_hnbt_quy_lairai-576x576.jpg";

interface Props {}
interface State {}

export default class News extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className={styles.main}>
      

        <div className={styles.note}>
          <h2>Lời nhắn nhủ</h2>
          <p>
                Không có gì nhắn nhủ hết, chỉ cần nhậu vui vẻ, không phá mồi, không kể chuyện
            chính trị, tính tiền đừng im lặng dứt áo ra đi là vui gòi. 
            <p>Ưu tiên kể chuyện sụp hầm khi combat, play game... </p>
            <h4>Đặc biệt: </h4>
            <p>Cần nắm chắc tửu lượng để có thể an toàn về nhà với dợ con .</p>
          </p>
        </div>

        <div className={styles.image}>
          <Link to="/">
            <img src={image} alt="thongbao" />
          </Link>
        </div>
      </div>
    );
  }
}
