import React, { Component } from "react";
import {
  Classes,
  Icon,
  Menu,
  MenuDivider,
  MenuItem,
  AnchorButton
  
} from "@blueprintjs/core";

import styles from "./styles.module.scss";

export const gameMenu = [
  {
    title: "Game",
    menuItem: [
      { icon: "fab fa-affiliatetheme", text: "Đánh giá game" },
      { icon: "fas fa-heart", text: "Tâm sự" },
      { icon: "fas fa-book-dead", text: "Chuyên đề" },
      { icon: "fas fa-dungeon", text: "Thế giới game" },
    ],
  },
  {
    title: "Giải Trí",
    menuItem: [
      { icon: "fas fa-book-open", text: "Manga / Anime" },
      { icon: "fas fa-guitar", text: "Nhạc" },
      { icon: "fas fa-beer", text: "Thú dzui khác" },
      { icon: "fas fa-desktop", text: "Phần cứng" },
    ],
  },
  {
      title: "",
      menuItem:[
        { icon: "fab fa-apple", text: "Chuyên mục riêng MacOS" },
 
      ]
  }
];

export const macMenu = [
  { icon: "new-text-box", text: "Phần mềm" },
  { icon: "new-text-box", text: "Thủ thuật" },
  { icon: "new-text-box", text: "Review mac mỗi năm" },
];

interface Props {}
interface State {}

export default class Sidebar extends Component<Props, State> {
  state = {};

  menuGame = (gameMenu: any) => {
    return (
      <Menu className={styles.menu}>
        {gameMenu.map((item: any) => {
          return (
            <>
              <MenuDivider title={item.title}  className={styles.divider}/>
              {item.menuItem.map((menuItem: any) => {
                return <MenuItem style={{margin:'5%'}} icon={<i className={`${menuItem.icon}`}/>} text={menuItem.text} />;
              })}
            </>
          );
        })}
      </Menu>
    );
  };

//   menuMacOs = (macMenu: any) => {
//     return (

//         <MenuItem 
//           icon="clipboard"
//           text="Chuyên mục riêng cho MacOS"
//           className={`${Classes.DARK} ${styles.main}`}
//         >
//           {macMenu.map((item: any) => {
//             return (
//               <MenuItem
//                 icon={item.icon}
//                 text={item.text}
//                 className={styles.main}
//               />
//             );
//           })}
//         </MenuItem>

//     );
//   };

  render() {
    return (
      <div className={styles.main}>
        <AnchorButton 
        className={styles.button}
        text="Viết bài có nhuận bút" 
        minimal
        />
        <Menu className={styles.menu}>
          <MenuItem text="Trang Chủ" className={styles.homeMenu}/>
        </Menu>
   
        {this.menuGame(gameMenu)}
        {/* {this.menuMacOs(macMenu)} */}
 
       
      </div>
    );
  }
}
