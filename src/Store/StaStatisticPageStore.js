import {observable,action,computed} from 'mobx';
import Config from './StaConfig'
//统计方法页面的store
class StaStatisticPageStore {
    constructor()
    {
        this._currentSelectFunction = '';
        this._sourceColumns = [];
        this._selectColumns = {};

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
            console.log(`设置列:${columnname}:${JSON.stringify(array)}`)
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

}

export  default StaStatisticPageStore;