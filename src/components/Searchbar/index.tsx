import * as React from "react";

import { Icon, InputGroup } from "@blueprintjs/core";

export interface IExampleProps {
  disabled?: boolean;
  large?: boolean;
  small?: boolean;
}

export interface IInputGroupExampleState {
  disabled?: boolean;
  large?: boolean;
  small?: boolean;
}

export class Searchbar extends React.PureComponent<
  IExampleProps,
  IInputGroupExampleState
> {
  public state: IInputGroupExampleState = {
    disabled: false,
    large: true,
    small: false,
  };

  public render() {
    return (
      <InputGroup
        
        disabled={false}
        round={true}
        large={true}
       fill={true}
        leftIcon="search"
        placeholder="Gõ điều muốn tìm vào..."
        // rightElement={<Icon icon={"arrow-right"} iconSize={48} />}
      />
    );
  }
}
