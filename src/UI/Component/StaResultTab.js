import React from 'react';
import {Progress,Empty,Button} from 'antd';
import '../css/StaResultTab.scss';
import {compromiseResult} from './Util';
import StatResultTable from './StatResultTable';
import StaResultParagraph from './StaResultParagraph';
import StaResultChart from './StaResultChart';


class  StaResultTab extends  React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            progress:0,   //加载进度 初始加载进度为0 是否合理?
            resultdata:[]
        }
    }
    _fetchdata = ()=>{
       let progress = this.state.progress + 1;
       let serverReponse = {
           progress:progress,
           resultData:compromiseResult()
       }
       return serverReponse;

    }
    _updateProgress = ()=>{
        let  serverResponse = this._fetchdata();
        let progress = serverResponse.progress;
       // console.log(`执行状态获取${progress}`);
        if(progress < 100)
        {
            this.setState({
                progress:progress
            });
            this._timer = setTimeout(this._updateProgress,50);
        }
        else
        {
            //进度已经加载到100
            this.setState({
                progress:100,
                resultdata:serverResponse.resultData
            });
        }
    }

    componentDidMount(){
            this._updateProgress()
    }
    componentWillUnmount()
    {
        if(this._timer)
        {
            clearTimeout(this._timer);

        }
    };
    _compromiseResultComponent = ()=>{
        let result = [...this.state.resultdata];
        let components = [];
        result.map(item=>{
            if(item.datetype === 'table')
            {
                //return table result
                components.push(<div styleName="tablecontainer">
                    <StatResultTable resultContent = {item.resultContent}/>
                </div>)
            }
            else  if(item.datetype === 'paragraph')
            {

                    components.push(
                        <div styleName="paragraphcontainer">
                        <StaResultParagraph resultContent = {item.resultContent}/>
                        </div>)
            }
            else if(item.datetype === 'photo')
            {
                components.push(<div styleName="chartcontainer">
                    <StaResultChart resultContent = {item.resultContent}/>
                </div>);
            }
        })
        return components;
    }
    render()
    {

        return (<div styleName="basecontainer">
            {this.state.progress < 100?
                (<div  styleName={"progress"}><Progress type="circle" percent={this.state.progress}></Progress></div>)
                :
                this.state.resultdata.length === 0 ? <Empty/>:<div styleName={"resultcontainer"}>
                        <div styleName="toolbar">
                            <Button type={'primary'}>导出到excel</Button>
                            <Button type={'primary'}>导出到pdf</Button>
                        </div>
                    <div styleName="datacontainer">
                        {this._compromiseResultComponent()}
                    </div>
                </div>
            }
        </div>)
    }
}

export default  StaResultTab;