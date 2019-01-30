import {observable,action,computed} from 'mobx';


class  StaDatabasePageStore {
    constructor()
    {
        this._currentSelectDB = {};

    }
    @observable _currentSelectDB;
    @action
    SetCurrentSelectDB(dbObj)
    {
        if(JSON.stringify(dbObj) !== JSON.stringify(this._currentSelectDB))
        {
            this._currentSelectDB = dbObj;
        }
    }
    @computed
    get currentselectDB()
    {
        return this._currentSelectDB;
    }


}

export  default  StaDatabasePageStore;