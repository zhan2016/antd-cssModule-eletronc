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

var result1 = [{"gender":"female","name":{"title":"mrs","first":"jamie","last":"martin"},"location":{"street":"6338 edwards rd","city":"adelaide","state":"australian capital territory","postcode":6217,"coordinates":{"latitude":"-84.2158","longitude":"177.7789"},"timezone":{"offset":"-6:00","description":"Central Time (US & Canada), Mexico City"}},"email":"jamie.martin@example.com","login":{"uuid":"68931301-75d2-4478-8e91-9d89a6a6db9a","username":"bigmouse880","password":"michael1","salt":"uZipCHd4","md5":"38df39cb192fa89b7039558e4b750d66","sha1":"805de27e08fe2be365acf342556f1525205715bf","sha256":"9175260df35bff8ac2689dff17a8569955e82187f94ddeefa44fc89fdb3285b3"},"dob":{"date":"1971-05-07T14:31:48Z","age":47},"registered":{"date":"2011-05-16T00:49:21Z","age":7},"phone":"03-6387-5692","cell":"0473-031-445","id":{"name":"TFN","value":"157140542"},"picture":{"large":"https://randomuser.me/api/portraits/women/65.jpg","medium":"https://randomuser.me/api/portraits/med/women/65.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/65.jpg"},"nat":"AU"},{"gender":"female","name":{"title":"ms","first":"alma","last":"williams"},"location":{"street":"1411 parker rd","city":"north charleston","state":"rhode island","postcode":26841,"coordinates":{"latitude":"84.6881","longitude":"-90.3607"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"alma.williams@example.com","login":{"uuid":"b5152779-18b1-4709-a39a-fe0fd7299c2b","username":"organicdog392","password":"8j4ye3uz","salt":"Rx2FKAcm","md5":"b633dcb8e14b7f0dea0826e5a86aef23","sha1":"52cd86f96ba92b3dd564c67172e409e95cf7ed73","sha256":"6d698d3ac26e0536de2d2064d7fbd2b292717f898b9cbd400635ad0917f686e3"},"dob":{"date":"1990-08-18T04:52:34Z","age":28},"registered":{"date":"2010-01-15T14:44:33Z","age":9},"phone":"(436)-986-4430","cell":"(876)-458-0060","id":{"name":"SSN","value":"499-39-9412"},"picture":{"large":"https://randomuser.me/api/portraits/women/87.jpg","medium":"https://randomuser.me/api/portraits/med/women/87.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/87.jpg"},"nat":"US"},{"gender":"male","name":{"title":"mr","first":"matias","last":"leino"},"location":{"street":"6074 rotuaari","city":"kaavi","state":"lapland","postcode":65527,"coordinates":{"latitude":"-21.9231","longitude":"130.5951"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"matias.leino@example.com","login":{"uuid":"89603092-5d7e-474b-bea7-740cc969c11b","username":"lazyfish232","password":"soccer12","salt":"yvIV6mLw","md5":"7a8101a39b4b6498c3f463aa34597be1","sha1":"7beb40c15ccc75da35bcc10cecc41b118b60e6a9","sha256":"86c3ecf5585ea4bf92ab70f5bd43aa3399be512a6492b2a993efc165392ca654"},"dob":{"date":"1960-12-22T08:55:51Z","age":58},"registered":{"date":"2008-01-04T19:11:56Z","age":11},"phone":"05-287-076","cell":"049-039-34-80","id":{"name":"HETU","value":"NaNNA525undefined"},"picture":{"large":"https://randomuser.me/api/portraits/men/45.jpg","medium":"https://randomuser.me/api/portraits/med/men/45.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/45.jpg"},"nat":"FI"},{"gender":"male","name":{"title":"mr","first":"okan","last":"özbey"},"location":{"street":"1782 bağdat cd","city":"tekirdağ","state":"bitlis","postcode":27677,"coordinates":{"latitude":"-76.6364","longitude":"-19.8858"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"okan.özbey@example.com","login":{"uuid":"ff6ef724-7688-469b-b496-58ce395d7424","username":"bigbear455","password":"whales","salt":"Ek5ElJ6E","md5":"9848748f3dd80e4277ed5931d9c0fedf","sha1":"eb2cc10ad0efbda3fae553ecb40477040beba7a1","sha256":"71506b981e71f1ac5975462cdd06ca7a7b64bf3b741ef1321fe976852c707e43"},"dob":{"date":"1995-06-24T03:12:25Z","age":23},"registered":{"date":"2002-04-07T12:14:23Z","age":16},"phone":"(796)-297-1032","cell":"(594)-721-5800","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/49.jpg","medium":"https://randomuser.me/api/portraits/med/men/49.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/49.jpg"},"nat":"TR"},{"gender":"female","name":{"title":"mrs","first":"باران","last":"نكو نظر"},"location":{"street":"2528 برادران سلیمانی","city":"بجنورد","state":"خراسان رضوی","postcode":83185,"coordinates":{"latitude":"-25.8051","longitude":"-16.1792"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"باران.نكونظر@example.com","login":{"uuid":"63eb0baf-06f5-47d0-849e-2cf62db2372e","username":"heavyduck652","password":"1201","salt":"iNw1gy0B","md5":"62fa2368288d29d4ccc2aa9049804ecb","sha1":"4e53fa697beb114dda8e9d0afb5549830e76cd61","sha256":"8c92086ed74eb5302b8986d930fb51af28fc7eada0739b269559534a46f9a5f6"},"dob":{"date":"1986-07-25T20:10:47Z","age":32},"registered":{"date":"2006-08-15T19:49:56Z","age":12},"phone":"056-20305186","cell":"0962-866-5491","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/7.jpg","medium":"https://randomuser.me/api/portraits/med/women/7.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/7.jpg"},"nat":"IR"},{"gender":"male","name":{"title":"mr","first":"اميرحسين","last":"حسینی"},"location":{"street":"1003 میدان صادقیه","city":"خمینی‌شهر","state":"فارس","postcode":19436,"coordinates":{"latitude":"-1.5693","longitude":"-111.5121"},"timezone":{"offset":"+9:00","description":"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},"email":"اميرحسين.حسینی@example.com","login":{"uuid":"9e7f106f-07be-4a3f-8206-39f7c429d00a","username":"blackladybug232","password":"working","salt":"cQETuivj","md5":"eadbbf7d46654f659691dc66e4613805","sha1":"69394b8de7eba3eb883a58e4c8fee039d8dda47a","sha256":"6489f6bba9341da6e855789550050e5f591e4fe863e3288e774675c44f64a2e3"},"dob":{"date":"1983-05-01T10:30:51Z","age":35},"registered":{"date":"2016-11-04T05:30:10Z","age":2},"phone":"087-10956050","cell":"0957-221-1785","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/92.jpg","medium":"https://randomuser.me/api/portraits/med/men/92.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/92.jpg"},"nat":"IR"},{"gender":"female","name":{"title":"miss","first":"ayan","last":"verboon"},"location":{"street":"9828 nieuwe houtenseweg","city":"zaltbommel","state":"utrecht","postcode":92446,"coordinates":{"latitude":"16.4653","longitude":"-105.8612"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"ayan.verboon@example.com","login":{"uuid":"b544234d-2a5d-416f-b073-9c4199416191","username":"yellowpanda357","password":"vintage","salt":"Ks4o3lIZ","md5":"98554b0c180ab0b1f87de93532f24e1a","sha1":"7e2372b9afe089077ec273294c8ad5674af011f3","sha256":"5a0b141a9c68b3e08e86b9d9fa9efea1030fed66290389292ebc1ff4ace45693"},"dob":{"date":"1979-05-21T20:56:44Z","age":39},"registered":{"date":"2018-03-02T05:28:36Z","age":0},"phone":"(707)-228-3726","cell":"(852)-764-3354","id":{"name":"BSN","value":"75851220"},"picture":{"large":"https://randomuser.me/api/portraits/women/68.jpg","medium":"https://randomuser.me/api/portraits/med/women/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/68.jpg"},"nat":"NL"},{"gender":"male","name":{"title":"mr","first":"efe","last":"erçetin"},"location":{"street":"1963 kushimoto sk","city":"kilis","state":"aksaray","postcode":72118,"coordinates":{"latitude":"63.2456","longitude":"50.9244"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"efe.erçetin@example.com","login":{"uuid":"a3d9a86f-2a32-41e1-8581-0b7b5252f272","username":"goldenkoala505","password":"shadow","salt":"7E7sP7HE","md5":"387e2f6eb4e58dd72ec9aff1d3efd9c7","sha1":"753c7a585f4b4494ee095acce04f3d3466ef34b9","sha256":"b5e719b8fcca9434370c46aa8fb32c38fffc5c46b2633b9cd3ea81f7db633408"},"dob":{"date":"1992-12-24T19:05:28Z","age":26},"registered":{"date":"2004-07-09T19:35:55Z","age":14},"phone":"(688)-941-8934","cell":"(794)-189-0767","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/17.jpg","medium":"https://randomuser.me/api/portraits/med/men/17.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/17.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"mr","first":"luukas","last":"korpela"},"location":{"street":"9825 verkatehtaankatu","city":"karjalohja","state":"central finland","postcode":18756,"coordinates":{"latitude":"41.8027","longitude":"144.1698"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"email":"luukas.korpela@example.com","login":{"uuid":"eec20f99-0818-4b33-a1cd-8be1e50fafce","username":"browncat246","password":"josephin","salt":"QmlfSnH3","md5":"7de4748c22d6cc72886c961d149ccef6","sha1":"a983896ce31420811bf68aaa5210e192310af31b","sha256":"27eee724a65333b47ecb6cde5143922ef10db07a19cf97806688b79b745d33e0"},"dob":{"date":"1978-02-06T04:54:13Z","age":40},"registered":{"date":"2014-02-02T19:47:06Z","age":4},"phone":"06-936-818","cell":"049-338-90-55","id":{"name":"HETU","value":"NaNNA643undefined"},"picture":{"large":"https://randomuser.me/api/portraits/men/63.jpg","medium":"https://randomuser.me/api/portraits/med/men/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"},"nat":"FI"},{"gender":"male","name":{"title":"mr","first":"dylan","last":"hale"},"location":{"street":"8129 windsor road","city":"stoke-on-trent","state":"cleveland","postcode":"QZ3 2BN","coordinates":{"latitude":"16.7638","longitude":"-73.5976"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"email":"dylan.hale@example.com","login":{"uuid":"e3e28dff-b4af-4bc0-b43d-4c3ad94ba756","username":"happylion416","password":"zapper","salt":"pucXdrtX","md5":"0114d808187e9026361b845deab0cbeb","sha1":"22a14646f23b70a4c7b68cbe83800bb4a72965e3","sha256":"7ab9de3cf72ff60b37b4bd59721ee9cf40dde6ac7468d99e5e60773abf8374b4"},"dob":{"date":"1985-01-31T00:40:08Z","age":33},"registered":{"date":"2004-02-29T09:20:02Z","age":14},"phone":"015396 17877","cell":"0764-799-548","id":{"name":"NINO","value":"JY 51 54 63 E"},"picture":{"large":"https://randomuser.me/api/portraits/men/14.jpg","medium":"https://randomuser.me/api/portraits/med/men/14.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/14.jpg"},"nat":"GB"}];

export function compromiseResult() {
    const result = [
        {
            datetype:'table',
            resultContent:{
                titles:'分类汇总分析结果-详细指标',
                columns:[{
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
                }],
                content:result1
            }
        },
        {
            datetype:'table',
            resultContent:{
                titles:'分类汇总分析结果-基础指标（平均值）',
                columns:[{
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
                }],
                content:result1
            }
        },
        {
            datetype:'paragraph',
            resultContent:{
                titles:'分析建议',
                content:'分类汇总用于研究不同分类时的汇总情况【比如不同区域分类项，销售额（汇总项）的差异情况】；\n' +
                '第一：SPSSAU提供平均值、标准差、求和等十余类汇总指标；\n' +
                '第二：分类汇总直观展示数据汇总结果，不进行统计检验；\n' +
                '第三：建议可使用平均值对比差异。'
            }
        },
        {
            datetype:'photo',
            resultContent:{
                titles:'男',
                "chartData": [
                    {
                        "examItem": "CT",
                        "2010年前": 112960,
                        "2010-2011": 86500,
                        "2011-2012": 96975,
                        "2012-2013": 87840,
                        "2013-2014": 85544,
                        "2014-2015": 83039,
                        "2015-2016": 86264,
                        "2016-2017": 94715,
                        "2017年后": 88689
                    },
                    {
                        "examItem": "MRI",
                        "2010年前": 316417,
                        "2010-2011": 181698,
                        "2011-2012": 194646,
                        "2012-2013": 191722,
                        "2013-2014": 151081,
                        "2014-2015": 158565,
                        "2015-2016": 192534,
                        "2016-2017": 152003,
                        "2017年后": 153006
                    },
                    {
                        "examItem": "US",
                        "2010年前": 72221,
                        "2010-2011": 52888,
                        "2011-2012": 53268,
                        "2012-2013": 60704,
                        "2013-2014": 57749,
                        "2014-2015": 33775,
                        "2015-2016": 46485,
                        "2016-2017": 60746,
                        "2017年后": 41565
                    },
                    {
                        "examItem": "数字拍片",
                        "2010年前": 374527,
                        "2010-2011": 361651,
                        "2011-2012": 333588,
                        "2012-2013": 329900,
                        "2013-2014": 365734,
                        "2014-2015": 348205,
                        "2015-2016": 350201,
                        "2016-2017": 375540,
                        "2017年后": 367544
                    },
                    {
                        "examItem": "病理检查",
                        "2010年前": 366269,
                        "2010-2011": 350917,
                        "2011-2012": 355283,
                        "2012-2013": 383553,
                        "2013-2014": 339259,
                        "2014-2015": 377271,
                        "2015-2016": 384552,
                        "2016-2017": 336790,
                        "2017年后": 363945
                    }
                ]
            }
        },
    ];
    return result;

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
