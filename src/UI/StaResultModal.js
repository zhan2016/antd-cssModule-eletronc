import React from 'react';
import {Tabs,Empty,Modal,Drawer} from 'antd';
import StaResultTab from './Component/StaResultTab'
import {inject, observer} from "mobx-react/index";
const TabPane = Tabs.TabPane;

@inject("StatisticStore")
@observer
class  StaResultModal extends  React.Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        let activekey = '';
        if(this.props.StatisticStore.resultList && this.props.StatisticStore.resultList.length > 0)
        {
            activekey = this.props.StatisticStore.resultList[this.props.StatisticStore.resultList.length - 1].id;

        }
        this.state = {
            activeKey: activekey
        };
    }

    onChange = (activeKey) => {
       // console.log(`onchange activeKey:${activeKey}`);
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        //console.log(`删除了Tab,activeKet:${targetKey}`);
        let activeKey = this.state.activeKey;
        let lastIndex;
        let resultList = [...this.props.StatisticStore.resultList];
        resultList.forEach((result, i) => {
            if (result.id === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = resultList.filter(pane => pane.id !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].id;
        }
        this.props.StatisticStore.setResultList(panes);
        this.setState({activeKey});
    };
    componentWillReceiveProps(nextprops)
    {
        if(this.props.StatisticStore.resultList && this.props.StatisticStore.resultList.length > 0)
        {
            //仅仅是显示切换的时候，默认显示当前结果列表的最后一个！
            this.setState({activeKey:this.props.StatisticStore.resultList[this.props.StatisticStore.resultList.length - 1].id});
        }
    }

    render() {
        //console.log('重新渲染结果集' + this.state.activeKey);

        return (
            <Drawer
                visible={this.props.visible}
                title="结果查看"
                onOk={this.props.handleOk}
                onClose={this.props.handleCancel}
                width={1000}
            >
                {
                    this.props.StatisticStore.resultList && this.props.StatisticStore.resultList.length > 0?(
                        <Tabs
                            hideAdd
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
                            {this.props.StatisticStore.resultList.map(result=>{
                                return (
                                    <TabPane
                                        tab={result.title} key={result.id}
                                    >
                                        <StaResultTab resultID={result.id}/>
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    ):<Empty description={"还没有创建分析"}/>
                }
            </Drawer>
        );
    }

}

export default  StaResultModal;