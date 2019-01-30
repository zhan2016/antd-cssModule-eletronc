import React from 'react';
import {Collapse, Icon,Button} from 'antd';
import './css/StatStatisticWorkSpacePage.scss'
import StaRadioButtonList from './Component/StaRadioButtonList';
import StaStatisticPageStore from '../Store/StaStatisticPageStore';
import StaWorkSpaceContent from './Component/StaWorkSpaceContent';
import {Provider} from 'mobx-react';
import StaResultModal from './StaResultModal';

const Panel = Collapse.Panel;
const FunctionList = [
    {
        name:'频数'
    },
    {
        name:'分类汇总'
    },
    {
        name:'描述'
    },
    {
        name:'交叉(卡方)'
    },
    {
        name:'相关'
    },
    {
        name:'线性回归'
    },
    {
        name:'方差'
    },
    {
        name:'单样本T检验'
    },
];
const AdvanceFunctionList = [
    {
        name:'聚类'
    },
    {
        name:'因子'
    },
    {
        name:'二元Logit'
    },
    {
        name:'多分类Logit'
    },
    {
        name:'双因素方差'
    },
    {
        name:'Robust回归'
    },
    {
        name:'曲线回归'
    },
    {
        name:'分层聚类'
    },
];
const MedicalFunctionList = [
    {
        name:'卡方检验'
    },
    {
        name:'kappa'
    },
    {
        name:'配对卡方'
    },
    {
        name:'二元Probit'
    },
    {
        name:'Poisson回归'
    },
    {
        name:'icc组内相关系数'
    },
    {
        name:'kendall协调系数'
    },
    {
        name:'多样本Friedeman'
    },
];



const customPanelStyle = {

    borderRadius: 4,
    marginBottom: 15,
    border: 0,
    overflow: 'hidden',
};

let StaStatisticStore = new StaStatisticPageStore();

class  StaStatisticWorkSpacePage extends  React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            resultModalVisible:false
        }
    }
    _handleOK = ()=>{
        this.setState({
            resultModalVisible:false
        })
    }
    _handleCacel = ()=>{
        this.setState({
            resultModalVisible:false
        })
    };
    _startAnalysisClick = ()=>{
        this.setState({
            resultModalVisible:true
        })
    }
        render()
        {
            return(
            <Provider StatisticStore={StaStatisticStore}>
            <div styleName="homebaseContainer">

                <div styleName="functionArea">
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        onChange={this._callback}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        styleName={"collapseArea"}

                    >
                        <Panel header="通用方法" key="1" style={customPanelStyle}>
                            <StaRadioButtonList BtnList={FunctionList} />
                        </Panel>
                        <Panel header="进阶方法" key="2" style={customPanelStyle}>
                            <StaRadioButtonList BtnList={AdvanceFunctionList} />
                        </Panel>
                        <Panel header="医学实验专用" key="3" style={customPanelStyle} >
                            <StaRadioButtonList BtnList={MedicalFunctionList}/>
                        </Panel>
                    </Collapse>
                </div>
                <div styleName="workspaceArea">
                    <StaWorkSpaceContent startAnalysisHandle={this._startAnalysisClick}/>
                </div>
                <Button styleName={"showresultBtn"} onClick={()=>{this.setState({resultModalVisible:!this.state.resultModalVisible})}}  icon="eye"></Button>
                <StaResultModal visible={this.state.resultModalVisible}  handleOk={this._handleOK} handleCancel={this._handleCacel}/>
            </div>
            </Provider>)
        }

}
export  default  StaStatisticWorkSpacePage;