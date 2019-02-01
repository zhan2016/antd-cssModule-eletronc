import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Spin} from 'antd';
import {Chart,Geom,Axis,Tooltip,Legend,Coord,Label} from 'bizcharts';
import {DataSet} from '@antv/data-set';

// 定义度量
const cols = {
    examItem: { type: 'cat',values:['CT','MRI','US','数字拍片','病理检查'] }, // 数据字段别名映射
    examMount: { alias: '检查数量' }
};


class StaResultChart extends  React.Component{
    render()
    {
        const {resultContent} = this.props;
        const ds = new DataSet({state:{
                currentState:'CT'
            }});
        const dv = ds.createView('examPerYear').source(resultContent.chartData);
        dv.transform({
            type: 'fold',
            fields: ['2010年前', '2010-2011', '2011-2012','2012-2013','2013-2014','2014-2015','2015-2016','2016-2017','2017年后' ], // 展开字段集
            key: 'period', // key字段
            value: 'examMount', // value字段
        });
        console.log(dv);
        const dvForOneState = ds.createView('populationOfOneState').source(dv);
        console.log(ds.state.currentState);
        dvForOneState.transform({ // 过滤数据
            type: 'filter',
            callback(row) {
                return row.examItem === ds.state.currentState;
            }
        }).transform({
            type:'percent',
            field:'examMount',
            dimension:'period',
            as: 'percent'
        });

        return(
            <React.Fragment>
                <span>{resultContent.titles}</span>
                            <Chart  data={dv}  forceFit={true}  scale={cols}
                                    padding={'auto'}
                            >
                                {/* X 轴 */}
                                <Axis name="examItem" />
                                {/* Y 轴 */}
                                <Axis name="examMount" label={{
                                    formatter: val => {
                                        return val / 10000 + '万';
                                    }
                                }}/>
                                <Tooltip/>

                                <Legend />

                                <Geom type="interval" position="examItem*examMount" color="period*examMount" />
                            </Chart>
            </React.Fragment>
        );
    }
}

export  default  StaResultChart;