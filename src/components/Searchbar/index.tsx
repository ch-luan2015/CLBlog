import * as React from "react";

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
      <InputGroup  className={Classes.LARGE}
      large={true}
      type="text"
      placeholder="Gõ điều bạn muốn tìm..."
     
    />
    );
  }
}
