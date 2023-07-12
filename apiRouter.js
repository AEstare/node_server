const express = require('express')
const apiRouter = express.Router()

// 购物车列表
const goods_list = [
    {
        "id": 1,
        "checkbox":false,
        "goods_name": "Teenmix/天美意夏季专柜同款金色布女鞋6YF18BT6",
        "goods_price": 298,
        "goods_count": 1,
        "tags": [
            "舒适",
            "透气"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 2,
        "checkbox":false,
        "goods_name": "奥休斯(all shoes) 冬季保暖女士休闲雪地靴 舒适加绒防水短靴 防滑棉鞋子",
        "goods_price": 89,
        "goods_count": 1,
        "tags": [
            "保暖",
            "防滑"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 3,
        "checkbox":false,
        "goods_name": "初语秋冬新款毛衣女 套头宽松针织衫简约插肩袖上衣",
        "goods_price": 199,
        "goods_count": 1,
        "tags": [
            "秋冬",
            "毛衣"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 4,
        "checkbox":false,
        "goods_name": "佐露絲蕾丝衫女2020春秋装新款大码女装衬衫上衣雪纺衫韩版打底衫长袖",
        "goods_price": 19,
        "goods_count": 1,
        "tags": [
            "雪纺衫",
            "打底"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 5,
        "checkbox":false,
        "goods_name": "熙世界中长款长袖圆领毛衣女2022秋装新款假两件连衣裙女107SL170",
        "goods_price": 178,
        "goods_count": 1,
        "tags": [
            "圆领",
            "连衣裙"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 6,
        "checkbox":false,
        "goods_name": "烟花烫2021秋季装新品女装简约修身显瘦七分袖欧根纱连衣裙 花央",
        "goods_price": 282,
        "goods_count": 2,
        "tags": [
            "秋季新品",
            "显瘦"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 7,
        "checkbox":false,
        "goods_name": "韩都衣舍2021韩版女装秋装新宽松显瘦纯色系带长袖衬衫NG8201",
        "goods_price": 128,
        "goods_count": 1,
        "tags": [
            "韩都衣舍",
            "长袖衬衫"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 8,
        "checkbox":false,
        "goods_name": "预售纤莉秀大码女装胖妹妹秋装2020新款圆领百搭绣花胖mm休闲套头卫衣",
        "goods_price": 128,
        "goods_count": 1,
        "tags": [
            "预售",
            "卫衣"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 9,
        "checkbox":false,
        "goods_name": "莎密2022夏改良旗袍裙连衣裙修身复古时尚日常短款礼服旗袍",
        "goods_price": 128,
        "goods_count": 1,
        "tags": [
            "莎密",
            "礼服"
        ],
        "inputVisible": false,
        "inputValue": ""
    },
    {
        "id": 10,
        "checkbox":false,
        "goods_name": "南极人秋冬韩版七彩棉加绒加厚一体保暖打底裤p7011",
        "goods_price": 128,
        "goods_count": 1,
        "tags": [
            "南极人",
            "打底裤"
        ],
        "inputVisible": false,
        "inputValue": ""
    }
]
// 用户列表数据
const userlist= [
    {
        id: 1,
        name: '嬴政',
        address: "北京市",
        goods_id:[1,5,6]
    },
    {
        id: 2,
        name: '李斯',
        address: "上海市",
        goods_id:[3,8]
    },
    {
        id: 3,
        name: '吕不韦',
        address: "广州市",
        goods_id:[4]
    },
    {
        id: 4,
        name: '赵姬',
        address: "湖北市",
        goods_id:[1,9]
    },
  ]
// 图书列表
const booklist = [
    {
        id: 1,
        book_name: '三国演义',
        publish:'北京图书出版社',
    },
    {
        id: 2,
        book_name: '红楼梦',
        publish:'广州图书出版社',
    },
    {
        id: 3,
        book_name: '水浒传',
        publish:'四川图书出版社',
    }
]
// 文章列表    get    查询参数   _page 页数    _limit 每页展示数量
const articles = [
    {
        "art_id": "7420",
        "title": "Java基础之面向对象",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/19.jpg",
                "http://geek.itheima.net/resources/images/20.jpg",
                "http://geek.itheima.net/resources/images/89.jpg"
            ]
        }
    },
    {
        "art_id": "7418",
        "title": "前端性能常见优化点分析",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/87.jpg"
            ]
        }
    },
    {
        "art_id": "7410",
        "title": "MyBatis学习总结（三）——多表关联查询与动态SQL",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/50.jpg",
                "http://geek.itheima.net/resources/images/52.jpg",
                "http://geek.itheima.net/resources/images/66.jpg"
            ]
        }
    },
    {
        "art_id": "7391",
        "title": "使用java实现四则运算的生成 （罗彬 梁汉烽）",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/57.jpg"
            ]
        }
    },
    {
        "art_id": "7374",
        "title": "如何制作中文Javadoc包，并导入到Eclipse",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/2.jpg"
            ]
        }
    },
    {
        "art_id": "7371",
        "title": "springboot之配置文件",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "7360",
        "title": "【译】用JavaScript写一个区块链",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/51.jpg",
                "http://geek.itheima.net/resources/images/9.jpg",
                "http://geek.itheima.net/resources/images/29.jpg"
            ]
        }
    },
    {
        "art_id": "7231",
        "title": "【D3.js 入门系列一】从零开始绘制一个柱形图",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/19.jpg",
                "http://geek.itheima.net/resources/images/95.jpg",
                "http://geek.itheima.net/resources/images/66.jpg"
            ]
        }
    },
    {
        "art_id": "7219",
        "title": "Hibernate学习笔记三",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "7132",
        "title": "工具类",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "7130",
        "title": "PoPo数据可视化周刊第一期",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/48.jpg",
                "http://geek.itheima.net/resources/images/50.jpg",
                "http://geek.itheima.net/resources/images/96.jpg"
            ]
        }
    },
    {
        "art_id": "7103",
        "title": "React性能优化方案之PureComponent",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "7060",
        "title": "React文档精读（上篇）",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "7048",
        "title": "String,static,final",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "7045",
        "title": "二叉树的最大深度",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/68.jpg"
            ]
        }
    },
    {
        "art_id": "7025",
        "title": "从一道执行题，了解浏览器中JS执行机制",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/22.jpg",
                "http://geek.itheima.net/resources/images/97.jpg",
                "http://geek.itheima.net/resources/images/97.jpg"
            ]
        }
    },
    {
        "art_id": "7018",
        "title": "Javascript中的魔鬼",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/63.jpg"
            ]
        }
    },
    {
        "art_id": "7014",
        "title": "Java并发（8）- 读写锁中的性能之王：StampedLock",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/31.jpg"
            ]
        }
    },
    {
        "art_id": "6925",
        "title": "Modern Javascript Cheatsheet 简体中文版（持续更新中）",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/54.jpg"
            ]
        }
    },
    {
        "art_id": "6922",
        "title": "值得了解的webpack高级技能",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6876",
        "title": "浅看小程序",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6837",
        "title": "java线程状态",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6835",
        "title": "前端学习路线及面试经验",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/55.jpg",
                "http://geek.itheima.net/resources/images/81.jpg",
                "http://geek.itheima.net/resources/images/66.jpg"
            ]
        }
    },
    {
        "art_id": "6834",
        "title": "JFinal Template Engine 使用",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/16.jpg",
                "http://geek.itheima.net/resources/images/67.jpg",
                "http://geek.itheima.net/resources/images/13.jpg"
            ]
        }
    },
    {
        "art_id": "6827",
        "title": "node.js利用socket.io实现多人在线匹配联机五子棋",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/77.jpg"
            ]
        }
    },
    {
        "art_id": "6807",
        "title": "【基础笔记】tomcat安装后运行出现出现问题(the JRE_HOME environment variable is not defined correctly This environment variabl)",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/68.jpg"
            ]
        }
    },
    {
        "art_id": "6781",
        "title": "struts2学习笔记三",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/25.jpg",
                "http://geek.itheima.net/resources/images/1.jpg",
                "http://geek.itheima.net/resources/images/43.jpg"
            ]
        }
    },
    {
        "art_id": "6777",
        "title": "JDK10源码阅读--String",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6748",
        "title": "[译] 2018 年七个通过脑电图分析实现“读心术”的 Javascript 库",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6697",
        "title": "java应用软件开发之多物料管理系统--登录界面设计",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/83.jpg"
            ]
        }
    },
    {
        "art_id": "6684",
        "title": "AMA：我是 Aresn，你有什么问题要问我吗？",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6677",
        "title": "再厉害的魔术也比不上真正的redux",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/29.jpg"
            ]
        }
    },
    {
        "art_id": "6592",
        "title": "浅解前端必须掌握的算法（五）：堆排序（上）",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/24.jpg",
                "http://geek.itheima.net/resources/images/6.jpg",
                "http://geek.itheima.net/resources/images/20.jpg"
            ]
        }
    },
    {
        "art_id": "6583",
        "title": "浅解前端必须掌握的算法（二）：简单选择排序",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/65.jpg",
                "http://geek.itheima.net/resources/images/7.jpg",
                "http://geek.itheima.net/resources/images/46.jpg"
            ]
        }
    },
    {
        "art_id": "6566",
        "title": "Heap memory compared to stack memory",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/95.jpg",
                "http://geek.itheima.net/resources/images/53.jpg",
                "http://geek.itheima.net/resources/images/3.jpg"
            ]
        }
    },
    {
        "art_id": "6559",
        "title": "[译] 那些好玩却尚未被 ECMAScript 2017 采纳的提案",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/72.jpg"
            ]
        }
    },
    {
        "art_id": "6557",
        "title": "vue-music 音乐网站",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6549",
        "title": "第42节：Java知识点回顾复习",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6544",
        "title": "了解JSP",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/5.jpg",
                "http://geek.itheima.net/resources/images/60.jpg",
                "http://geek.itheima.net/resources/images/50.jpg"
            ]
        }
    },
    {
        "art_id": "6535",
        "title": "10行代码实现页面无限滚动",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/90.jpg",
                "http://geek.itheima.net/resources/images/76.jpg",
                "http://geek.itheima.net/resources/images/8.jpg"
            ]
        }
    },
    {
        "art_id": "6501",
        "title": "Spring Framework的核心：Spring AOP",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6484",
        "title": "软件工程项目基于java的wc实现",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/12.jpg"
            ]
        }
    },
    {
        "art_id": "6427",
        "title": "获取文件路径的几种方式",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6374",
        "title": "各大公司Java面试题超详细总结",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/2.jpg",
                "http://geek.itheima.net/resources/images/22.jpg",
                "http://geek.itheima.net/resources/images/69.jpg"
            ]
        }
    },
    {
        "art_id": "6356",
        "title": "第一次过程性考核",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6339",
        "title": "Spring（五）--autowire自动装配和spel",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/95.jpg",
                "http://geek.itheima.net/resources/images/91.jpg",
                "http://geek.itheima.net/resources/images/13.jpg"
            ]
        }
    },
    {
        "art_id": "6326",
        "title": "jsonp跨域获取数据实现百度搜索",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6308",
        "title": "为什么ES6新增了Promise对象来处理异步调用",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 1,
            "images": [
                "http://geek.itheima.net/resources/images/81.jpg"
            ]
        }
    },
    {
        "art_id": "6287",
        "title": "Java开源生鲜电商平台-程序员的沟通的方式与方法",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 0
        }
    },
    {
        "art_id": "6241",
        "title": "枚举（enum）的使用",
        "aut_id": "1111",
        "comm_count": 0,
        "pubdate": "2019-03-11 09:00:00",
        "aut_name": "黑马先锋嘿嘿嘿",
        "is_top": 0,
        "cover": {
            "type": 3,
            "images": [
                "http://geek.itheima.net/resources/images/76.jpg",
                "http://geek.itheima.net/resources/images/30.jpg",
                "http://geek.itheima.net/resources/images/71.jpg"
            ]
        }
    }
]

//在此挂载对应路由

// 获取商品列表
apiRouter.get('/get/goodslist', (req, res) => {
    //获取到客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用res.send()方法吧数据响应给客户端
    res.send({
        status: 0,
        msg: 'GET请求成功！',
        data: goods_list
    })

})

// 获取用户列表
apiRouter.get('/get/userslist', (req, res) => {
    // 调用res.send()方法吧数据响应给客户端
    res.send({
        status: 0,
        msg: 'GET请求成功！',
        data: userlist
    })

})

// 获取图书列表
apiRouter.get('/get/bookslist', (req, res) => {
    //调用res.send()方法吧数据响应给客户端
    res.send({
        status: 0,
        msg: 'GET请求成功',
        data: booklist
    })
})

apiRouter.post('/post', (req, res) => {
    //获取客户端通过的请求体，发送到服务器的URL-encoded数据
    const body = req.body
    //调用res.send()方法吧数据响应给客户端
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body
    })
})


apiRouter.delete('/delete', (req, res) => {
    res, send({
        status: 0,
        msg: 'DELETE请求成功'
    })
})

module.exports = apiRouter