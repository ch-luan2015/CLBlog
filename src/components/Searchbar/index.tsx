import * as React from "react";
import styles from './styles.module.scss'
import { InputGroup, Classes } from "@blueprintjs/core";
import './styles.module.scss'
export interface IProps {
  disabled?: boolean;
  large?: boolean;
  small?: boolean;
}


export class Searchbar extends React.PureComponent<IProps> {
 
  public render() {
    return (
      <InputGroup   
      style={{color:"#2e231d", backgroundColor:"#d6c9b6"}}
      round={true}
      fill={true}
      large={true}
      type="text"
      placeholder="Gõ điều bạn muốn tìm..."
    />
    );
  }
}
