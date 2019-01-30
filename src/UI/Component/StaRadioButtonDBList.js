import  React from 'react';
import {Row,Col,Button} from 'antd';
import '../css/StaRadioButtonList.scss';
import {observer,inject} from 'mobx-react';

@inject("StaDBStore")
@observer
class  StaRadioButtonDBList  extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            currentRadio:''
        }
    }
    _computerColumnSpan = (columns) =>{
        if(columns)
        {
            return 24 / columns;
        }
        else
        {
            return 12; //默认组织成两列元素，则列间隔为 24 / 2
        }
    };
    _radioBtnClick = (radioName) => {
        this.props.StaDBStore.SetCurrentSelectDB(radioName);
    }
    render()
    {
        const {Columns,BtnList} = this.props;
        let columnSpan = this._computerColumnSpan(Columns);
        return (
            <React.Fragment>
                {BtnList && BtnList.length > 0 ?(
                    <div styleName={"radioBtnContainer"}>
                        <Row Glutter={32}>
                            {BtnList.map((item,index)=>{
                                return (<Col span={columnSpan} key={index}>
                                    <Button icon={item.icon? item.icon:""} styleName={item.name ===this.props.StaDBStore.currentselectDB.name ? "radioBtnSelect":"radioBtn"} onClick={()=>{this._radioBtnClick(item)}}>
                                        {item.name}
                                    </Button>
                                </Col>)
                            })}
                        </Row>
                    </div>
                ):null}
            </React.Fragment>
        )
    }
}
export  default  StaRadioButtonDBList;