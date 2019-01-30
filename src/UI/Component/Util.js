import React from "react";
import namor from "namor";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? "relationship"
                : statusChance > 0.33 ? "complicated" : "single"
    };
};

export function makeData(len = 5553) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}

export function formatDateFunc(dateTimeProvider,fmt){
    var o = {
        "y+": dateTimeProvider.getFullYear(),
        "M+": dateTimeProvider.getMonth() + 1,                 //月份
        "d+": dateTimeProvider.getDate(),                    //日
        "h+": dateTimeProvider.getHours(),                   //小时
        "m+": dateTimeProvider.getMinutes(),                 //分
        "s+": dateTimeProvider.getSeconds(),                 //秒
        "q+": Math.floor((dateTimeProvider.getMonth() + 3) / 3), //季度
        "S+": dateTimeProvider.getMilliseconds()             //毫秒
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)){
            if(k === "y+"){
                fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
            }
            else if(k==="S+"){
                var lens = RegExp.$1.length;
                lens = lens===1?3:lens;
                fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1,lens));
            }
            else{
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
    }
    return fmt;
}
