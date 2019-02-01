import React from 'react';

class StaResultParagraph extends  React.Component{
    render()
    {
        const {resultContent} = this.props;
        return (<React.Fragment>
            <h4>{resultContent.titles}</h4>
            <p>{resultContent.content}</p>
        </React.Fragment>)
    }
}
export  default  StaResultParagraph;