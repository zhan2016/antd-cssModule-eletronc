import React from 'react';
import {Dropdown,Menu,Icon} from 'antd';
import StaStatisticWorkSpacePage from './StaStatisticWorkSpacePage';
import StaDataBaseManagePage from './StaDataBaseManagePage';
import './css/StaHomePage.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class StaHomePage extends  React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            current:'mail'
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    _userProfileClick = (itemType)=>{
        if(itemType === "quit")
        {
            //this.props.commonVariable.SetLoginStatus(false);
        }
    };
    _callback = (key)=>{
        console.log(key);
    };
    _compromiseComponnet = ()=>{

        switch(this.state.current)
        {
            case "mail":
            return  <StaStatisticWorkSpacePage />
            case "database":
                return <StaDataBaseManagePage />;
            case "helpcenter":
                return null;
        }
    }
        render()
        {
            const userDownloadList = (
                <Menu className="userdropdown">
                    <Menu.Item key={"editprofile"}>
                        <a target="_blank" rel="noopener noreferrer" onClick={()=>{this._userProfileClick("editprofile")}}>编辑资料</a>
                    </Menu.Item>
                    <Menu.Item key={"quit"}>
                        <a target="_blank" rel="noopener noreferrer"  onClick={()=>{this._userProfileClick("quit")}}>退出</a>
                    </Menu.Item>
                </Menu>
            );
            return (
                <div styleName={"homecontainer"}>
                    <div styleName={"hometoolbar"}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="mail">
                                <Icon type="bar-chart" />统计分析
                            </Menu.Item>
                            <Menu.Item key="database" >
                                <Icon type="appstore" />数据库管理
                            </Menu.Item>
                            <Menu.Item key="helpcenter">
                                <Icon type="question-circle" />帮助中心
                            </Menu.Item>
                            <SubMenu title={<span><Icon type="setting" />用户中心</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div styleName={"homecontent"}>
                        {this._compromiseComponnet()}
                    </div>
                </div>
            );
        }
}
export  default  StaHomePage;