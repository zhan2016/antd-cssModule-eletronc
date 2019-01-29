import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {inject, observer} from "mobx-react/index";
import  StaColumnSource from './StaColumnSource';
import '../css/StaColumnTarget.scss'

@inject("StatisticStore")
@observer
class  StaColumnTarget extends  React.Component{
    render()
    {
        console.log('target render');
        const {DropableID,CurrentDragDataType} = this.props;
        const getItemStyle = (isDragging, draggableStyle) => ({
            // some basic styles to make the items look a bit nicer
            userSelect: 'none',
            padding: 8 * 2,
            margin: `0 0 8px 0`,

            // change background colour if dragging
            background: isDragging ? 'lightgreen' : 'grey',

            // styles we need to apply on draggables
            ...draggableStyle
        });
        const getListStyle = isDraggingOver => ({
            background: isDraggingOver ? 'lightblue' : 'lightgrey',
            padding: 8,
            width: '100%'
        });
        let columns = this.props.StatisticStore.GetColumnsList(DropableID);

        return(<div styleName="targetDiv">
            <Droppable droppableId={DropableID}>
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