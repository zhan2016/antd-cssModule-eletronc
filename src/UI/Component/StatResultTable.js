import React from 'react';
import {Button,Popconfirm,message,Table,Empty} from 'antd';

class  StatResultTable extends  React.Component{
    _getComponent = ()=>
    {
        const{resultContent} = this.props;
        let data = resultContent.content;
        let columns = resultContent.columns;
        if(!columns || columns.length === 0 || !data || data.length === 0 )
        {
            return null;
        }
        if(resultContent.titles)
        {
            return (
                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={data}
                    title={() => resultContent.titles}
                />
            )
        }
        else
        {
            return (
                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={data}
                />
            )
        }
    }
    render()
    {
        return (
            <React.Fragment>
                {this._getComponent()}
        </React.Fragment>)

    }

}

export  default StatResultTable;