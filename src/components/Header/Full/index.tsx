import * as React from 'react';
import logo from './new2.png';
import { Menu, MenuItem, Navbar, Classes, Alignment, AnchorButton, Popover, PopoverInteractionKind, Position, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <>
        <div>
        <Link to="/">
            <img alt="logo" src={logo} className={styles.logo} />
        </Link>
        </div>
        <div></div>
      </>
    );
  }
}
