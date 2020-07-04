import React, { Component } from 'react'
import { Classes, Icon, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
interface Props {
    
}
interface State {
    
}

export default class Sidebar extends Component<Props, State> {
    state = {}

    render() {
        return (
         <>
                <Menu className={Classes.ELEVATION_1}>
                    <MenuItem  text="Trang Chủ" />
                </Menu>
                <Menu className={Classes.ELEVATION_1}>
                    <MenuDivider title="Game" />
                    <MenuItem icon="new-text-box" text="Đánh giá game" />
                    <MenuItem icon="new-object" text="Tâm sự" />
                    <MenuItem icon="new-link" text="Chuyên đề" />
                    <MenuItem icon="new-link" text="Thế giới game" />
                </Menu>
                <Menu className={Classes.ELEVATION_1}>
                    <MenuDivider title="Giải trí" />
                    <MenuItem icon="cut" text="Manga / Anime" label="⌘X" />
                    <MenuItem icon="duplicate" text="Nhạc" label="⌘C" />
                    <MenuItem icon="clipboard" text="Thú dzui khác" label="⌘V"  />
                    

                    <MenuItem  icon="align-left" text="Phần cứng ">
                        <MenuItem icon="align-left" text="Left" />
                        <MenuItem icon="align-center" text="Center" />
                        <MenuItem icon="align-right" text="Right" />
                        <MenuItem icon="align-justify" text="Justify" />
                    </MenuItem>
                </Menu>
                <Menu className={Classes.ELEVATION_1}>
                    <MenuItem icon="clipboard" text="Chuyên mục riêng cho MacOS" >
                        <MenuItem icon="cut" text="Phần mềm" label="⌘X" />
                        <MenuItem icon="duplicate" text="Thủ thuật" label="⌘C" />
                        <MenuItem icon="clipboard" text="Review Mac mỗi năm" label="⌘V"  />
                    </MenuItem>
                   
                </Menu>
        </>
        )
    }
}
