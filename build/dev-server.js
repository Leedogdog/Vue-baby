require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.get('/limit_pros',function(req,res){
  res.json({
    pros:[
            {
                "id":"1454285",
                "itemPic1":"/imgs/p0_0.jpg",
                "itemPic2":"/imgs/p0_1.jpg",
                "itemPic3":"/imgs/p0_2.jpg",
                "itemPic4":"/imgs/p0_3.jpg",
                "itemPic5":"/imgs/p0_4.jpg",
                "brand":"咕噜日记 Purrfect diary ",
                "name":"1-8岁男女童全棉卡通短袖T恤2件装 ",
                "sale_price":"35",
                "market_price":"398",
                "is_include_tax":"0",
                "descInfo":"1-8岁男女童全棉卡通短袖T恤2件装，超划算2件装，款式童趣有活力，面料柔软透气，反正宝宝换的勤，给他多备几件吧~",
                "type":"T恤",
                "level":"A类",
                "age":"18个月,30个月,2岁,3岁,4岁,5岁,6岁,7岁",
                "sex":"通用",
                "area":"中国",
                "opt":"绿色度假鸭+粉色兔子&绿色章鱼+白色螃蟹&条纹猫咪+蓝色鲸鱼&柠檬猫咪+蓝色绣花鸡&红色汽车+灰蓝标语&蓝色兔子+白色兔子",
                "height":"90cm,110cm,120cm,130cm,80cm,100cm",
                "style":"百搭",
                "season":"夏季",
                "make":"",
                "capacity":"",
                "details":"/imgs/p0_d1.jpg&/imgs/p0_d2.jpg&/imgs/p0_d3.jpg&/imgs/p0_d4.jpg&/imgs/p0_d5.jpg&/imgs/p0_d6.jpg&/imgs/p0_d7.jpg&/imgs/p0_d8.jpg&/imgs/p0_d9.jpg&/imgs/p0_d10.jpg&/imgs/p0_d11.jpg&/imgs/p0_d12.jpg"
            },
            {
                "id":"20872736",
                "itemPic1":"/imgs/p1_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"b.box",
                "name":"重力吸管杯 240ml 紫色  新老版本随机发",
                "sale_price":"69",
                "market_price":"139",
                "is_include_tax":"0",
                "descInfo":"理想的过渡水杯，无论任何姿势都能喝到水的设计让宝贝喝水变得更容易，色彩设计与b.box其他产品相匹配，推荐搭配使用，宝宝使用安全舒适的同时又满足美妈们对时尚与品位的要求！",
                "type":"学饮杯/吸管杯",
                "level":"",
                "age":"",
                "sex":"",
                "area":"中国",
                "height":"",
                "opt":"天蓝色&枚红色&苹果绿&葡萄紫&炫酷蓝&阳光橙&西瓜红&柠檬黄&荧光粉",
                "style":"",
                "season":"",
                "make":"聚丙烯(pp)",
                "capacity":"240ml",
                "details":"/imgs/p1_d1.jpg&/imgs/p1_d2.jpg&/imgs/p1_d3.jpg&/imgs/p1_d4.jpg&/imgs/p1_d5.jpg&/imgs/p1_d6.jpg&/imgs/p1_d7.jpg&/imgs/p1_d8.jpg&/imgs/p1_d9.jpg"
            },
            {
                "id":"20839649",
                "itemPic1":"/imgs/p2_0.jpg",
                "itemPic2":"/imgs/p2_1.jpg",
                "itemPic3":"/imgs/p2_2.jpg",
                "itemPic4":"/imgs/p2_3.jpg",
                "itemPic5":"/imgs/p2_4.jpg",
                "brand":"贝杰斯 BEIJESS ",
                "name":"学步车手推婴儿玩具儿童多功能学走路助步车",
                "sale_price":"59",
                "market_price":"328",
                "is_include_tax":"0",
                "descInfo":"色彩鲜艳，材质环保，安全防护， 可爱造型。多功能学步车，带有音乐琴 小手机 画板等等给宝宝更多趣味。",
                "type":"手推学步玩具",
                "level":"",
                "age":"",
                "sex":"通用",
                "area":"中国",
                "height":"",
                "opt":"默认",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p2_d1.jpg&/imgs/p2_d2.jpg&/imgs/p2_d3.jpg&/imgs/p2_d4.jpg&/imgs/p2_d5.jpg&/imgs/p2_d6.jpg&/imgs/p2_d7.jpg&/imgs/p2_d8.jpg&/imgs/p2_d9.jpg&/imgs/p2_d10.jpg&/imgs/p2_d11.jpg&/imgs/p2_d12.jpg&/imgs/p2_d13.jpg&/imgs/p2_d14.jpg"
            },
            {
                "id":"20833609",
                "itemPic1":"/imgs/p3_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"英国牛栏 Cow&Gate ",
                "name":"婴幼儿配方奶粉4段24M+800g*4罐",
                "sale_price":"356",
                "market_price":"876",
                "is_include_tax":"15",
                "descInfo":"英国Cow&Gate是百年优质品牌 优质奶源来自爱尔兰牧场 自然配方 多种营养满足宝宝成长所需 ",
                "type":"婴幼儿牛奶粉",
                "level":"",
                "age":"",
                "sex":"",
                "area":"",
                "height":"",
                "opt":"4罐",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p3_d1.jpg&/imgs/p3_d2.jpg&/imgs/p3_d3.jpg&/imgs/p3_d4.jpg&/imgs/p3_d5.jpg&/imgs/p3_d6.jpg&/imgs/p3_d7.jpg&/imgs/p3_d8.jpg&/imgs/p3_d9.jpg&/imgs/p3_d10.jpg&/imgs/p3_d11.jpg&/imgs/p3_d12.jpg&/imgs/p3_d13.jpg&/imgs/p3_d14.jpg&/imgs/p3_d15.jpg&/imgs/p3_d16.jpg&/imgs/p3_d17.jpg&/imgs/p3_d18.jpg&/imgs/p3_d19.jpg&/imgs/p3_d20.jpg"
            },
            {
                "id":"20872721",
                "itemPic1":"/imgs/p1_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"b.box",
                "name":"重力吸管杯 240ml 紫色  新老版本随机发",
                "sale_price":"69",
                "market_price":"139",
                "is_include_tax":"0",
                "descInfo":"理想的过渡水杯，无论任何姿势都能喝到水的设计让宝贝喝水变得更容易，色彩设计与b.box其他产品相匹配，推荐搭配使用，宝宝使用安全舒适的同时又满足美妈们对时尚与品位的要求！",
                "type":"学饮杯/吸管杯",
                "level":"",
                "age":"",
                "sex":"",
                "area":"中国",
                "height":"",
                "opt":"天蓝色&枚红色&苹果绿&葡萄紫&炫酷蓝&阳光橙&西瓜红&柠檬黄&荧光粉",
                "style":"",
                "season":"",
                "make":"聚丙烯(pp)",
                "capacity":"240ml",
                "details":"/imgs/p1_d1.jpg&/imgs/p1_d2.jpg&/imgs/p1_d3.jpg&/imgs/p1_d4.jpg&/imgs/p1_d5.jpg&/imgs/p1_d6.jpg&/imgs/p1_d7.jpg&/imgs/p1_d8.jpg&/imgs/p1_d9.jpg"
            },
            {
                "id":"1454285",
                "itemPic1":"/imgs/p0_0.jpg",
                "itemPic2":"/imgs/p0_1.jpg",
                "itemPic3":"/imgs/p0_2.jpg",
                "itemPic4":"/imgs/p0_3.jpg",
                "itemPic5":"/imgs/p0_4.jpg",
                "brand":"咕噜日记 Purrfect diary ",
                "name":"1-8岁男女童全棉卡通短袖T恤2件装 ",
                "sale_price":"35",
                "market_price":"398",
                "is_include_tax":"0",
                "descInfo":"1-8岁男女童全棉卡通短袖T恤2件装，超划算2件装，款式童趣有活力，面料柔软透气，反正宝宝换的勤，给他多备几件吧~",
                "type":"T恤",
                "level":"A类",
                "age":"18个月,30个月,2岁,3岁,4岁,5岁,6岁,7岁",
                "sex":"通用",
                "opt":"绿色度假鸭+粉色兔子&绿色章鱼+白色螃蟹&条纹猫咪+蓝色鲸鱼&柠檬猫咪+蓝色绣花鸡&红色汽车+灰蓝标语&蓝色兔子+白色兔子",
                "area":"中国",
                "height":"90cm,110cm,120cm,130cm,80cm,100cm",
                "style":"百搭",
                "season":"夏季",
                "make":"",
                "capacity":"",
                "details":"/imgs/p0_d1.jpg&/imgs/p0_d2.jpg&/imgs/p0_d3.jpg&/imgs/p0_d4.jpg&/imgs/p0_d5.jpg&/imgs/p0_d6.jpg&/imgs/p0_d7.jpg&/imgs/p0_d8.jpg&/imgs/p0_d9.jpg&/imgs/p0_d10.jpg&/imgs/p0_d11.jpg&/imgs/p0_d12.jpg"
            },
            {
                "id":"20872736",
                "itemPic1":"/imgs/p1_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"b.box",
                "name":"重力吸管杯 240ml 紫色  新老版本随机发",
                "sale_price":"69",
                "market_price":"139",
                "is_include_tax":"0",
                "descInfo":"理想的过渡水杯，无论任何姿势都能喝到水的设计让宝贝喝水变得更容易，色彩设计与b.box其他产品相匹配，推荐搭配使用，宝宝使用安全舒适的同时又满足美妈们对时尚与品位的要求！",
                "type":"学饮杯/吸管杯",
                "level":"",
                "age":"",
                "sex":"",
                "area":"中国",
                "height":"",
                "opt":"天蓝色&枚红色&苹果绿&葡萄紫&炫酷蓝&阳光橙&西瓜红&柠檬黄&荧光粉",
                "style":"",
                "season":"",
                "make":"聚丙烯(pp)",
                "capacity":"240ml",
                "details":"/imgs/p1_d1.jpg&/imgs/p1_d2.jpg&/imgs/p1_d3.jpg&/imgs/p1_d4.jpg&/imgs/p1_d5.jpg&/imgs/p1_d6.jpg&/imgs/p1_d7.jpg&/imgs/p1_d8.jpg&/imgs/p1_d9.jpg"
            },
            {
                "id":"145428512",
                "itemPic1":"/imgs/p0_0.jpg",
                "itemPic2":"/imgs/p0_1.jpg",
                "itemPic3":"/imgs/p0_2.jpg",
                "itemPic4":"/imgs/p0_3.jpg",
                "itemPic5":"/imgs/p0_4.jpg",
                "brand":"咕噜日记 Purrfect diary ",
                "name":"1-8岁男女童全棉卡通短袖T恤2件装 ",
                "sale_price":"35",
                "market_price":"398",
                "is_include_tax":"0",
                "descInfo":"1-8岁男女童全棉卡通短袖T恤2件装，超划算2件装，款式童趣有活力，面料柔软透气，反正宝宝换的勤，给他多备几件吧~",
                "type":"T恤",
                "opt":"绿色度假鸭+粉色兔子&绿色章鱼+白色螃蟹&条纹猫咪+蓝色鲸鱼&柠檬猫咪+蓝色绣花鸡&红色汽车+灰蓝标语&蓝色兔子+白色兔子",
                "level":"A类",
                "age":"18个月,30个月,2岁,3岁,4岁,5岁,6岁,7岁",
                "sex":"通用",
                "area":"中国",
                "height":"90cm,110cm,120cm,130cm,80cm,100cm",
                "style":"百搭",
                "season":"夏季",
                "make":"",
                "capacity":"",
                "details":"/imgs/p0_d1.jpg&/imgs/p0_d2.jpg&/imgs/p0_d3.jpg&/imgs/p0_d4.jpg&/imgs/p0_d5.jpg&/imgs/p0_d6.jpg&/imgs/p0_d7.jpg&/imgs/p0_d8.jpg&/imgs/p0_d9.jpg&/imgs/p0_d10.jpg&/imgs/p0_d11.jpg&/imgs/p0_d12.jpg"
            },
            {
                "id":"2083325152",
                "itemPic1":"/imgs/p3_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"英国牛栏 Cow&Gate ",
                "name":"婴幼儿配方奶粉4段24M+800g*4罐",
                "sale_price":"356",
                "market_price":"876",
                "is_include_tax":"15",
                "descInfo":"英国Cow&Gate是百年优质品牌 优质奶源来自爱尔兰牧场 自然配方 多种营养满足宝宝成长所需 ",
                "type":"婴幼儿牛奶粉",
                "level":"",
                "age":"",
                "sex":"",
                "area":"",
                "height":"",
                "opt":"4罐",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p3_d1.jpg&/imgs/p3_d2.jpg&/imgs/p3_d3.jpg&/imgs/p3_d4.jpg&/imgs/p3_d5.jpg&/imgs/p3_d6.jpg&/imgs/p3_d7.jpg&/imgs/p3_d8.jpg&/imgs/p3_d9.jpg&/imgs/p3_d10.jpg&/imgs/p3_d11.jpg&/imgs/p3_d12.jpg&/imgs/p3_d13.jpg&/imgs/p3_d14.jpg&/imgs/p3_d15.jpg&/imgs/p3_d16.jpg&/imgs/p3_d17.jpg&/imgs/p3_d18.jpg&/imgs/p3_d19.jpg&/imgs/p3_d20.jpg"
            },
            {
                "id":"20236249",
                "itemPic1":"/imgs/p2_0.jpg",
                "itemPic2":"/imgs/p2_1.jpg",
                "itemPic3":"/imgs/p2_2.jpg",
                "itemPic4":"/imgs/p2_3.jpg",
                "itemPic5":"/imgs/p2_4.jpg",
                "brand":"贝杰斯 BEIJESS ",
                "name":"学步车手推婴儿玩具儿童多功能学走路助步车",
                "sale_price":"59",
                "market_price":"328",
                "is_include_tax":"0",
                "descInfo":"色彩鲜艳，材质环保，安全防护， 可爱造型。多功能学步车，带有音乐琴 小手机 画板等等给宝宝更多趣味。",
                "type":"手推学步玩具",
                "level":"",
                "age":"",
                "sex":"通用",
                "area":"中国",
                "height":"",
                "opt":"默认",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p2_d1.jpg&/imgs/p2_d2.jpg&/imgs/p2_d3.jpg&/imgs/p2_d4.jpg&/imgs/p2_d5.jpg&/imgs/p2_d6.jpg&/imgs/p2_d7.jpg&/imgs/p2_d8.jpg&/imgs/p2_d9.jpg&/imgs/p2_d10.jpg&/imgs/p2_d11.jpg&/imgs/p2_d12.jpg&/imgs/p2_d13.jpg&/imgs/p2_d14.jpg"
            },
            {
                "id":"9112609",
                "itemPic1":"/imgs/p3_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"英国牛栏 Cow&Gate ",
                "name":"婴幼儿配方奶粉4段24M+800g*4罐",
                "sale_price":"356",
                "market_price":"876",
                "is_include_tax":"15",
                "descInfo":"英国Cow&Gate是百年优质品牌 优质奶源来自爱尔兰牧场 自然配方 多种营养满足宝宝成长所需 ",
                "type":"婴幼儿牛奶粉",
                "level":"",
                "age":"",
                "sex":"",
                "area":"",
                "height":"",
                "opt":"4罐",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p3_d1.jpg&/imgs/p3_d2.jpg&/imgs/p3_d3.jpg&/imgs/p3_d4.jpg&/imgs/p3_d5.jpg&/imgs/p3_d6.jpg&/imgs/p3_d7.jpg&/imgs/p3_d8.jpg&/imgs/p3_d9.jpg&/imgs/p3_d10.jpg&/imgs/p3_d11.jpg&/imgs/p3_d12.jpg&/imgs/p3_d13.jpg&/imgs/p3_d14.jpg&/imgs/p3_d15.jpg&/imgs/p3_d16.jpg&/imgs/p3_d17.jpg&/imgs/p3_d18.jpg&/imgs/p3_d19.jpg&/imgs/p3_d20.jpg"
            },
            {
                "id":"208865649",
                "itemPic1":"/imgs/p2_0.jpg",
                "itemPic2":"/imgs/p2_1.jpg",
                "itemPic3":"/imgs/p2_2.jpg",
                "itemPic4":"/imgs/p2_3.jpg",
                "itemPic5":"/imgs/p2_4.jpg",
                "brand":"贝杰斯 BEIJESS ",
                "name":"学步车手推婴儿玩具儿童多功能学走路助步车",
                "sale_price":"59",
                "market_price":"328",
                "is_include_tax":"0",
                "descInfo":"色彩鲜艳，材质环保，安全防护， 可爱造型。多功能学步车，带有音乐琴 小手机 画板等等给宝宝更多趣味。",
                "type":"手推学步玩具",
                "level":"",
                "age":"",
                "sex":"通用",
                "area":"中国",
                "height":"",
                "opt":"默认",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p2_d1.jpg&/imgs/p2_d2.jpg&/imgs/p2_d3.jpg&/imgs/p2_d4.jpg&/imgs/p2_d5.jpg&/imgs/p2_d6.jpg&/imgs/p2_d7.jpg&/imgs/p2_d8.jpg&/imgs/p2_d9.jpg&/imgs/p2_d10.jpg&/imgs/p2_d11.jpg&/imgs/p2_d12.jpg&/imgs/p2_d13.jpg&/imgs/p2_d14.jpg"
            },
            {
                "id":"20865609",
                "itemPic1":"/imgs/p3_0.jpg",
                "itemPic2":"",
                "itemPic3":"",
                "itemPic4":"",
                "itemPic5":"",
                "brand":"英国牛栏 Cow&Gate ",
                "name":"婴幼儿配方奶粉4段24M+800g*4罐",
                "sale_price":"356",
                "market_price":"876",
                "is_include_tax":"15",
                "descInfo":"英国Cow&Gate是百年优质品牌 优质奶源来自爱尔兰牧场 自然配方 多种营养满足宝宝成长所需 ",
                "type":"婴幼儿牛奶粉",
                "level":"",
                "age":"",
                "sex":"",
                "opt":"4罐",
                "area":"",
                "height":"",
                "style":"",
                "season":"",
                "make":"",
                "capacity":"",
                "details":"/imgs/p3_d1.jpg&/imgs/p3_d2.jpg&/imgs/p3_d3.jpg&/imgs/p3_d4.jpg&/imgs/p3_d5.jpg&/imgs/p3_d6.jpg&/imgs/p3_d7.jpg&/imgs/p3_d8.jpg&/imgs/p3_d9.jpg&/imgs/p3_d10.jpg&/imgs/p3_d11.jpg&/imgs/p3_d12.jpg&/imgs/p3_d13.jpg&/imgs/p3_d14.jpg&/imgs/p3_d15.jpg&/imgs/p3_d16.jpg&/imgs/p3_d17.jpg&/imgs/p3_d18.jpg&/imgs/p3_d19.jpg&/imgs/p3_d20.jpg"
            },
        ]
  })
})
app.get('/types',function(req,res){
  res.json({
    types:[
        {
            "type_img":"/imgs/t0.jpg",
            "type_name":"奶瓶",
            "type_id":"000001",
            "big_type":"喂养用品",
            "small_type":"喂养用品"
        },
        {
            "type_img":"/imgs/t1.jpg",
            "type_name":"奶瓶消毒器",
            "type_id":"000002",
            "big_type":"喂养用品",
            "small_type":"喂养电器"
        },
        {
            "type_img":"/imgs/t2.jpg",
            "type_name":"宝宝防嗮",
            "type_id":"000003",
            "big_type":"应季热销",
            "small_type":"宝宝"
        },
        {
            "type_img":"/imgs/t3.jpg",
            "type_name":"洗澡用品",
            "type_id":"000004",
            "big_type":"应季热销",
            "small_type":"宝宝"
        },
        {
            "type_img":"/imgs/t4.jpg",
            "type_name":"孕妇裙",
            "type_id":"000005",
            "big_type":"应季热销",
            "small_type":"成人"
        },
        {
            "type_img":"/imgs/t5.jpg",
            "type_name":"防嗮/隔离",
            "type_id":"000006",
            "big_type":"应季热销",
            "small_type":"成人"
        },
        {
            "type_img":"/imgs/t6.png",
            "type_name":"哺乳文胸",
            "type_id":"000007",
            "big_type":"妈妈专区",
            "small_type":"孕妇内衣"
        },
        {
            "type_img":"/imgs/t7.png",
            "type_name":"托腹裤/带",
            "type_id":"000008",
            "big_type":"妈妈专区",
            "small_type":"孕妇内衣"
        },
        {
            "type_img":"/imgs/t8.png",
            "type_name":"月子服/哺乳衣/居家服",
            "type_id":"000009",
            "big_type":"妈妈专区",
            "small_type":"孕妇装"
        },
        {
            "type_img":"/imgs/t9.png",
            "type_name":"吸奶器",
            "type_id":"000010",
            "big_type":"妈妈专区",
            "small_type":"母乳喂养"
        },
        {
            "type_img":"/imgs/t10.png",
            "type_name":"面部护理",
            "type_id":"000011",
            "big_type":"妈妈专区",
            "small_type":"孕妈美容"
        },
        {
            "type_img":"/imgs/t11.png",
            "type_name":"哺乳枕/侧睡枕/抱枕靠垫",
            "type_id":"000012",
            "big_type":"妈妈专区",
            "small_type":"待产/护理"
        },
        {
            "type_img":"/imgs/t12.png",
            "type_name":"束身衣/束腹裤",
            "type_id":"000013",
            "big_type":"妈妈专区",
            "small_type":"塑形美体"
        },
        {
            "type_img":"/imgs/t13.png",
            "type_name":"孕妇奶粉",
            "type_id":"000014",
            "big_type":"妈妈专区",
            "small_type":"妈妈营养品"
        },
        {
            "type_img":"/imgs/t14.jpg",
            "type_name":"羊奶粉",
            "type_id":"000015",
            "big_type":"宝宝奶粉",
            "small_type":"奶粉"
        },
        {
            "type_img":"/imgs/t15.png",
            "type_name":"新西兰原装 a2",
            "type_id":"000016",
            "big_type":"宝宝奶粉",
            "small_type":"全球奶粉大牌"
        },
        {
            "type_img":"/imgs/t16.jpg",
            "type_name":"面条/粥",
            "type_id":"000017",
            "big_type":"营养辅食",
            "small_type":"宝宝辅食"
        },
        {
            "type_img":"/imgs/t17.jpg",
            "type_name":"果汁/饮品",
            "type_id":"000018",
            "big_type":"营养辅食",
            "small_type":"宝宝零食"
        },
        {
            "type_img":"/imgs/t18.png",
            "type_name":"维生素",
            "type_id":"000019",
            "big_type":"营养辅食",
            "small_type":"宝宝营养"
        },
        {
            "type_img":"/imgs/t19.png",
            "type_name":"NB",
            "type_id":"000020",
            "big_type":"尿裤湿巾",
            "small_type":"纸尿裤"
        },
        {
            "type_img":"/imgs/t20.png",
            "type_name":"尿布/尿片",
            "type_id":"000021",
            "big_type":"尿裤湿巾",
            "small_type":"防尿用品"
        },
        {
            "type_img":"/imgs/t21.png",
            "type_name":"M",
            "type_id":"000022",
            "big_type":"尿裤湿巾",
            "small_type":"拉拉裤"
        },
        {
            "type_img":"/imgs/t22.png",
            "type_name":"洁肤湿巾",
            "type_id":"000023",
            "big_type":"尿裤湿巾",
            "small_type":"湿巾"
        },
        {
            "type_img":"/imgs/t23.png",
            "type_name":"宝宝洗浴",
            "type_id":"000024",
            "big_type":"宝宝洗护",
            "small_type":"洗浴护肤礼盒"
        },
        {
            "type_img":"/imgs/t24.png",
            "type_name":"奶瓶/餐具清洗",
            "type_id":"000025",
            "big_type":"宝宝洗护",
            "small_type":"奶瓶/衣物清洁"
        },
        {
            "type_img":"/imgs/t25.png",
            "type_name":"体温计/室温计",
            "type_id":"000026",
            "big_type":"宝宝洗护",
            "small_type":"日常护理"
        },
        {
            "type_img":"/imgs/t26.jpg",
            "type_name":"口水巾/吸汗巾",
            "type_id":"000027",
            "big_type":"童装童鞋",
            "small_type":"婴幼服饰"
        },
        {
            "type_img":"/imgs/t27.png",
            "type_name":"衬衫/上衣",
            "type_id":"000028",
            "big_type":"童装童鞋",
            "small_type":"外出服"
        },
        {
            "type_img":"/imgs/t28.png",
            "type_name":"宝宝鞋",
            "type_id":"000029",
            "big_type":"童装童鞋",
            "small_type":"布鞋/休闲鞋"
        },
        {
            "type_img":"/imgs/t29.png",
            "type_name":"欧式高景观",
            "type_id":"000030",
            "big_type":"童车汽座",
            "small_type":"婴儿推车"
        },
        {
            "type_img":"/imgs/t30.png",
            "type_name":"<13kg(约0-9个月）",
            "type_id":"000031",
            "big_type":"童车汽座",
            "small_type":"汽车椅座"
        },
        {
            "type_img":"/imgs/t31.jpg",
            "type_name":"三轮脚踏车",
            "type_id":"000032",
            "big_type":"童车汽座",
            "small_type":"学行车"
        }
    ]
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
