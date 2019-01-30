import React from 'react';
import {Button} from 'antd';
import './css/StaDataBaseManagePage.scss';
import StaDatabasePageStore from '../Store/StaDatabasePageStore';
import {Provider} from 'mobx-react';
import StaRadioButtonDBList from './Component/StaRadioButtonDBList';
import StaDatabaseTableWithToolBar from './Component/StaDatabaseTableWithToolBar'

const dblist = {
    personal:[
        {
            id:'1',
            name:'技术部',
            type:'personal',
        },
        {
            id:'2',
            name:'财务部',
            type:'personal',
        },
        {
            id:'3',
            name:'销售部',
            type:'personal',
        }
    ],
    platform:[
        {
            id:'4',
            name:'术前中',
            type:'platform',
        },
        {
            id:'5',
            name:'检验高中低',
            type:'platform',
        }
    ]
};

let stadbStore = new StaDatabasePageStore();
class  StaDataBaseManagePage extends React.Component{
    render()
    {
        return (
            <Provider StaDBStore={stadbStore}>
            <div styleName="baseContainer">

                <div styleName="dblist">
                    <span>个人上传</span>
                    <Button icon={'plus'} styleName={"addpersonDbBtn"}/>
                    {dblist.personal && dblist.personal.length > 0? (
                        <StaRadioButtonDBList BtnList={dblist.personal} Columns={1}/>
                    ):null}
                    <span>聚垒数据中心</span>
                        {dblist.platform && dblist.platform.length > 0? (
                            <StaRadioButtonDBList BtnList={dblist.platform} Columns={1}/>
                        ):null}
                </div>
                    <div styleName="dbContent">
                        <StaDatabaseTableWithToolBar />
                    </div>
            </div>
            </Provider>
        )

    }
}

export  default StaDataBaseManagePage;