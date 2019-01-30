import React from 'react';
import {observer,inject} from 'mobx-react';
import {Button,Popconfirm,message,Table,Empty} from 'antd';
import {autorun} from 'mobx';
import ReactTable from 'react-table';
import { makeData } from "./Util";
import '../css/StaDatabaseTableWithToolBar.scss';
import reqwest from 'reqwest';


const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
    sorter:true
}];
const ButtonGroup = Button.Group;
@inject("StaDBStore")
@observer
class  StaDatabaseTableWithToolBar extends  React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
        };
    }
    componentWillMount()
    {
        this.handlder = autorun(()=>{
            if(Object.keys(this.props.StaDBStore.currentselectDB).length !== 0)
            {
                this.fetch();
            }
        })
    }
    componentWillUnmount()
    {
        if (this.handler) { this.handler(); this.handler = null; }

    }
    componentDidMount() {
        this.fetch();
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    }

    render()
    {
        return (
            <div styleName="StaDatabaseTablecontainer">
                {
                    Object.keys(this.props.StaDBStore.currentselectDB).length  !== 0 ?(
                        <React.Fragment>
                        <div styleName="StaDatabaseTabletoolbar">
                            <div styleName="StaDatabaseTableButtonGrounp">
                                <ButtonGroup>
                                    <Button>删除选中</Button>
                                    <Popconfirm title="确定删除？操作不可逆" okText="Yes" cancelText="No" onConfirm={()=>{ message.error('怒删数据库!')}}>
                                        <Button>删除数据库</Button>
                                    </Popconfirm>
                                    <Button type={'primary'}>设置为分析数据库</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div styleName="StaDatabaseTabletablecontainer">
                                <Table
                        columns={columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                        scroll={{ y: '70vh' }}
                    />
                    </div>
                        </React.Fragment>): <Empty description={"选择左侧数据库"}/>
                }


            </div>
        )
    }

}

export default  StaDatabaseTableWithToolBar;