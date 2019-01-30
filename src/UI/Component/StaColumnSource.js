import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {inject,observer} from 'mobx-react';

@inject("StatisticStore")
@observer
class  StaColumnSource extends  React.Component{

    render()
    {
        const getItemStyle = (isDragging, draggableStyle) => ({
            // some basic styles to make the items look a bit nicer
            userSelect: 'none',
            padding: '2px',
            margin: `0 0 3px 0`,
            borderRadius:'2px',
            // change background colour if dragging
            background: isDragging ? 'lightgreen' : 'lightgrey',

            // styles we need to apply on draggables
            ...draggableStyle
        });
        const {id, index,columnName} = this.props;
        return (<Draggable
            key={id}
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps
                            .style
                    )}
                >
                    {columnName}
                </div>
            )}
        </Draggable>);

    }

}

export  default StaColumnSource;