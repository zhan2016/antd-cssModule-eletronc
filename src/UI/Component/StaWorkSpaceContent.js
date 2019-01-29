import React from 'react';
import {Button,Select,Checkbox,InputNumber} from 'antd';
import '../css/StaWorkSpaceContent.scss';
import {inject,observer} from 'mobx-react';
import  { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import StaColumnSource from './StaColumnSource';
import StaColumnTarget from './StaColumnTarget';
const Option = Select.Option;
const methodConfig = {
    "频数":{
        name:'频数',
        analysisParameter:{
        },
        columns:{
            dateType:['string', 'enum', 'number'],
            columnsContent:[
                {
                    label:'x定量',
                    datatype:['string','number'],
                    tooltip:'x的分析哦',
                    minrowCount:1,
                    maxrowCount:2,
                },
                {
                    label:'Y定量',
                    datatype:['enum'],
                    tooltip:'玉面小飞龙',
                    minrowCount:1,
                    maxrowCount:1
                },
                {
                    label:'可选项',
                    datatype:['string'],
                    tooltip:'可选的项啊',
                    minrowCount:0,
                    maxrowCount:10
                }
            ]
        }
    },
    "分类汇总":{
        name:'频数',
        analysisParameter:{
            type:'option',
            options:[
                '汇总类型',
                '平均值',
                '百分数',
            ]
        }
    },
    "相关":{
        name:'相关',
        analysisParameter:{
            type:'option',
            options:[
                'Person相关系数',
                'Spearman相关系数',
                'KendaII相关系数',
            ]
        }
    },
    "线性回归":{
        name:'线性回归',
        analysisParameter:{
            type:'check',
            label:'保存残差和预测值'
        }
    },
    "单样本T检验":{
        name:'单样本T检验',
        analysisParameter:{
            type:'number',
            placeholder:'输入对比数字,默认为0'
        }
    },
};

const columns ={
    string:[ {
        id:'1',
        name:'患者主索引',
        type:'string'
    },
        {
            id:'2',
            name:'姓名',
            type:'string'
        },

        {
            id:'4',
            name:'生日',
            type:'string'
        },
        {
            id:'7',
            name:'测试7',
            type:'string'
        },
        {
            id:'8',
            name:'测试8',
            type:'string'
        },
        {
            id:'9',
            name:'测试9',
            type:'string'
        },
        {
            id:'10',
            name:'测试10',
            type:'string'
        },
        {
            id:'11',
            name:'测试11',
            type:'string'
        }
    ],
    enum:[ {
        id:'3',
        name:'性别',
        type:'enum2'
    },{
        id:'5',
        name:'检验类型',
        type:'enumN'
    },],
    number:[
        {
            id:'6',
            name:'检验结果',
            type:'number'
        },
        {
            id:'14',
            name:'血压',
            type:'number'
        }
    ]
};

class StaParameter extends React.Component{
    _getComponnet = ()=> {
        const {analysisParameter} = this.props;
        if(!analysisParameter)
        {
            return null;
        }
        switch (analysisParameter.type)
        {
            case "option":
                return (<Select dropdownMatchSelectWidth defaultValue = {analysisParameter.options[0]} >
                    {analysisParameter.options.map((item,index)=>{
                       return  <Option value={item} key={index}>{item}</Option>
                    })}
                </Select>)
            case "check":
                return (<Checkbox>{analysisParameter.label}</Checkbox>)
            case "number":
                return (<InputNumber placeholder={analysisParameter.placeholder}/>)
            default:
                return null;
        }
    }

    render()
    {
        //const {type} = this.props;
        return(<React.Fragment>
            {this._getComponnet()}
        </React.Fragment>)
    }
}

@inject("StatisticStore")
@observer
class StaWorkSpaceContent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            currentDragDataType:''
        }
    }
    _reorder = (list, startIndex, endIndex)=>{
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    _move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        console.log(`destination:${JSON.stringify(destination)} Source:${source}`);
        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        this.props.StatisticStore.SetColumnList(droppableSource.droppableId, sourceClone);
        this.props.StatisticStore.SetColumnList(droppableDestination.droppableId, destClone);

        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };
    _onDragStart = (start) =>{

    }
    _onDragEnd= (result)=>{
        const { source, destination } = result;
        // dropped outside the list
        console.log(`destination:${JSON.stringify(destination)}`);
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = this._reorder(
                this.props.StatisticStore.GetColumnsList(source.droppableId),
                source.index,
                destination.index
            );
            console.log(`destination.droppableId:${destination.droppableId}`);
            this.props.StatisticStore.SetColumnList(destination.droppableId, items);
        } else {
            const result = this._move(
                this.props.StatisticStore.GetColumnsList(source.droppableId),
                this.props.StatisticStore.GetColumnsList(destination.droppableId),
                source,
                destination
            );

        }

    };
    _getTargetColumn = (targetObjects)=>{
        let columns = [];
        Object.keys(targetObjects).forEach(function(key,index){
            console.log(key);
            if(key)
                columns.push(<StaColumnTarget DropableID={key}/>);
        })
        return columns;

    }
    render()
    {
        const getListStyle = isDraggingOver => ({
            background: isDraggingOver ? 'lightblue' : 'lightgrey',
            padding: 8,
            width: '100%'
        });
        console.log(`${JSON.stringify(this.props.StatisticStore.GetSelectColumnObject)}`);
        return(
            <React.Fragment>
                <DragDropContext onDragEnd={this._onDragEnd} onDragStart={this._onDragStart}>
            <div styleName="columnArea">
                <div styleName="toolbar">
                    <Button type={"primary"}>筛选样本</Button>
                    <span>38</span>
                </div>
                <div styleName="content">
                    <Droppable droppableId="sourceColumn">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {
                                    this.props.StatisticStore.GetColumnsList('sourceColumn') &&this.props.StatisticStore.GetColumnsList('sourceColumn').length>0 ?
                                        this.props.StatisticStore.GetColumnsList('sourceColumn').map((column,index) =>{
                                   return  <StaColumnSource id={column.id} index={index} columnName={column.name}/>
                                }) :null}
                                {provided.placeholder}
                            </div>
                        )
                        }
                    </Droppable>
                </div>
            </div>
            <div styleName="variableArea">
                <div styleName="variableToolbar">
                <Button type={"primary"} styleName={"startAnalysisBtn"}>{`开始${this.props.StatisticStore.CurrentSelectFunc}分析`}</Button>
                    <div styleName="parameter">
                <StaParameter analysisParameter={this.props.StatisticStore.CurrentSelectFunc && methodConfig[this.props.StatisticStore.CurrentSelectFunc]  ?  methodConfig[this.props.StatisticStore.CurrentSelectFunc].analysisParameter : undefined}/>
                    </div>
                </div>
                <div styleName="content">
                    {Object.keys(this.props.StatisticStore.GetSelectColumnObject).length > 0 ?
                       this._getTargetColumn(this.props.StatisticStore.GetSelectColumnObject)
                        :null}
                </div>
            </div>
                </DragDropContext>
            </React.Fragment>)
    }

}
export  default  StaWorkSpaceContent;