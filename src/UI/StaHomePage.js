import React from 'react';
import {Dropdown,Menu} from 'antd';
import StaStatisticWorkSpacePage from './StaStatisticWorkSpacePage'
import './css/StaHomePage.scss';


class StaHomePage extends  React.Component{
    _userProfileClick = (itemType)=>{
        if(itemType === "quit")
        {
            //this.props.commonVariable.SetLoginStatus(false);
        }
    };
    _callback = (key)=>{
        console.log(key);
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
                            <div styleName="toolbarLogo">
                                LOGO区域
                            </div>
                        <div>
                            <ul styleName="menuList">
                                <li styleName="menuItem">帮助中心</li>
                                <li styleName="menuItem">查看数据</li>
                                <div styleName="userInfo">
                                    <Dropdown overlay={userDownloadList} handleClick={this._userProfileClick}>
                                        <a className="ant-dropdown-link" href="#">
                                            {`Hello, 张大侠`}
                                        </a>
                                    </Dropdown>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div styleName={"homecontent"}>
                        <StaStatisticWorkSpacePage />
                    </div>
                </div>
            );
        }
}
export  default  StaHomePage;