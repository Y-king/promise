const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
// const hostName='192.168.1.104';
const hostName='127.0.0.1';
const port =9090;


app.use('/',express.static(path.join(__dirname, 'html')))
app.get('/data',(req,res)=>{
    console.log(req.query);
    let pageindex = req.query.pageindex || 1 ;
    let pagesize = 99;
    let host = 'http://www.189.cn/sales/basedata/combonumber.do?systemType=1&salesProdId=000000003D655A34435B3DB7E053AA1410AC8503&shopId=10001&comboDetailsId=&channelId=&pageindex=1&pagesize=8&provincecode=609001&areacode=&minpay=&prettypattern=&contnumber=&cacheId=&maxPage=0&numbertype=0&phoneNumMinExpense=&subPhoneNumMinExpense=&phoneNumPrestoreExpense=&mall_price=0&fourFlag=0&minExpenseCloud=&inflag=0&lastFlag=0&headNumber=&sortby=1&type=&numberLevel=&innumber=&procod=&areacod=&isFirst=&gropuflag=0&maxpay=&_='
    let time = new Date().getTime();
    axios.get(`${host}${time}`, {
        params: {
            pageindex: pageindex,
            pagesize: pagesize
        }
    })
    .then(function (response) {
        // console.log(response.data);
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
});
app.listen(port,hostName,()=>{
    console.log(`服务器运行在http://${hostName}:${port}`)
});