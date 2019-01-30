import React from 'react';
import {Progress} from 'antd';
import '../css/StaResultTab.scss'


class  StaResultTab extends  React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            progress:0    //加载进度 初始加载进度为0 是否合理?
        }
    }
    _fetchdata = ()=>{
       let progress = this.state.progress;
       return progress + 1;

    }
    _updateProgress = ()=>{
        let progress = this._fetchdata();
        console.log(`执行状态获取${progress}`);
        if(progress < 100)
        {
            this.setState({
                progress:progress
            });
            this._timer = setTimeout(this._updateProgress,50);
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
    }
    render()
    {

        return (<div styleName="basecontainer">
            {this.state.progress < 100?(<Progress type="circle" percent={this.state.progress}></Progress>):null}
        </div>)
    }

}

export default  StaResultTab;