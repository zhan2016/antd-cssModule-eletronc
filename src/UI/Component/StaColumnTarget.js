import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {inject, observer} from "mobx-react/index";
import  StaColumnSource from './StaColumnSource';
import '../css/StaColumnTarget.scss';

@inject("StatisticStore")
@observer
class  StaColumnTarget extends  React.Component{
    render()
    {
        const {DropableID,CurrentDragDataType: CurrentDragSource} = this.props;

        const getListStyle = (isDraggingOver) => ({
            background: isDraggingOver ? 'lightblue' : 'lightgrey',
            padding: 3,
            width: '100%',
            height:'100%'
        });
        const getContainerStyle=(height) =>({
            height:`${100.0 / height}%`,
            padding:'2px',
            paddingBottom: '3px',
            border:'2px solid  #f5f5f5',
            borderRadius:'2px',
            overflowY:'auto'
        })
        let columns = this.props.StatisticStore.GetColumnsList(DropableID);
        let columnContent = this.props.StatisticStore.GetSpecifyColumn(DropableID);
        let isDroppDisable = false;
        let height = this.props.StatisticStore.GetSelectColumnCount;
        if(columnContent)
        {
            if(CurrentDragSource)
            {
                if(DropableID !== CurrentDragSource.droppableId)
                {
                    let columnsource = this.props.StatisticStore.GetColumnsList(CurrentDragSource.droppableId);
                    if(columnsource[CurrentDragSource['index']]) {

                        let dragSourceDataType = columnsource[CurrentDragSource['index']]['type'];
                        console.log(`dragSourceDataType:${dragSourceDataType}`);
                        if (!columnContent['datatype'].includes(dragSourceDataType)) {
                            //不符合此列的数据类型 不允许drop
                            isDroppDisable = true;
                        }
                        if (columns.length >= columnContent['maxrowCount']) {
                            //达到最大行数不准drop
                            isDroppDisable = true;
                        }
                    }
                }

            }


        }
        console.log(`height:${height}`);
       // console.log(`isDroppDisable:${JSON.stringify(isDroppDisable)}`)
        return(<div style={getContainerStyle(height)}>
            <Droppable droppableId={DropableID} isDropDisabled={isDroppDisable}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        {
                            columns && columns.length>0 ? columns.map((column,index) =>{
                            return <StaColumnSource   id={column.id} index={index} columnName={column.name}/>
                            }):<div styleName="nullColumn"></div>}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>)
    }

}
export  default  StaColumnTarget;