import {observable,action,computed} from 'mobx';
import Config from './StaConfig'
//统计方法页面的store
class StaStatisticPageStore {
    constructor()
    {
        this._currentSelectFunction = '';
        this._sourceColumns = [];
        this._selectColumns = {};
        this._resultList = [];

    }
    @observable _sourceColumns;
    @observable _selectColumns;
    @observable _currentSelectFunction;
    @action
    _setCurrentSelectFunc(functionName)
    {
        if(this._currentSelectFunction !== functionName)
        {
            this._currentSelectFunction = functionName;
            if(Config.methodConfig && Config.methodConfig[functionName]
                && Config.methodConfig[functionName]["columns"])
            {
                let columns = Config.methodConfig[functionName]["columns"];
                let sourcecolumns = [];
                columns['dateType'].map((datatype)=>{
                    sourcecolumns =  sourcecolumns.concat(Config.columns[datatype])
                });
                this._sourceColumns = sourcecolumns;
                columns.columnsContent.map((columnitem) =>{
                    this._selectColumns[columnitem.id] = [];
                })
            }
        }
    }
    @action
    SetColumnList = (columnname, array)=>{
        if(columnname === 'sourceColumn')
        {
            this._sourceColumns = array;
        }
        else
        {
           // console.log(`设置列:${columnname}:${JSON.stringify(array)}`)
            this._selectColumns[columnname] = array;
        }
    }

    @computed
    get CurrentSelectFunc()
    {
        return this._currentSelectFunction;
    }

     GetColumnsList(parameter)
    {
        if(parameter === 'sourceColumn')
        {
            return this._sourceColumns;
        }
        else
        {
            return this._selectColumns[parameter];
        }
    }
    GetColumnContent()
    {
       return  Config.methodConfig[this._currentSelectFunction]["columns"]['columnsContent'];
    }
    GetSpecifyColumn(columnID)
    {
        //获取具体某个维度的配置项
        let columncontent = Config.methodConfig[this._currentSelectFunction]["columns"]['columnsContent']
        if(columncontent)
        {
            let index = columncontent.findIndex(item => item.id === columnID);
            if(index === -1)
            {
                return undefined;
            }
            else
            {
                return columncontent[index];
            }
        }
        else
        {
            return undefined;
        }
    }
    @computed
    get GetSelectColumnObject()
    {
        return this._selectColumns;
    }
    @computed
    get GetSelectColumnCount()
    {
        //获取目标列的数量
        return Object.keys(this._selectColumns).length;
    }

    //#region 结果集页面列表
    @observable _resultList;

    @computed
    get resultList()
    {
        return this._resultList;
    }
    @action
    setResultList(array)
    {
        this._resultList = array;
    }
    @action
    pushToResultList(result)
    {
        if(result)
        {
            this.resultList.push(result);
        }
    }
    //#endregion

}

export  default StaStatisticPageStore;