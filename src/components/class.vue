<template>
    <div class="classes">
        <div class="live">
            <div class='title'>最近直播</div>
            <div class="body">
                <div class='live-item' v-for="(item, index) in onlineTeachers" :key='index'>
                    <div class="time">
                        <span>{{item.time}}</span>
                    </div>
                    <div class="left">
                        <img :src="item.pic" />
                    </div>
                    <div class="right">
                        <div class="class-name">{{item.title}}</div>
                        <div class='teacher-name'>{{item.teacher}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommends">
            <div class='title'>编辑推荐</div>
            <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
                <div class="pic">
                    <img :src="item.pic" />
                </div>
                <div class='body'>
                    <div class="spec-title">{{item.title}}</div>
                    <div class="spec-school">{{item.school}}</div>
                    <div class="spec-people">{{item.people}}人参加</div>
                    <div class="line"></div>
                    <div class="desc">{{item.desc}}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    components: {
    },
    data () {
        return {
            onlineTeachers: [
                { pic: 'https://edu-image.nosdn.127.net/5b3d6a978a9c40be979cffd081d2803e.png?imageView&quality=100&thumbnail=3126y3126', title: "数一137专业第一上岸", teacher: '可颂', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/fe49ee43eb884d7280bf64567298b2a4.jpg?imageView&quality=100', title: "CFA持证人带你学碳中和概念", teacher: 'Jon老师', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/80ac6898cb9a42af90e69e6923bce945.jpg?imageView&quality=100&thumbnail=180y180', title: "22考研数学147分经验分享", teacher: '刘金峰', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/635ad78326d044ffaa39d4d1a256cf7f.png?imageView&quality=100&thumbnail=1504y1504', title: "计算机考研院校规划及常识", teacher: '王道论坛', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/c48dd10c57324df7884826b666174efe.jpg?imageView&quality=100', title: "英氏VS美式", teacher: '小丽英语', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/635ad78326d044ffaa39d4d1a256cf7f.png?imageView&quality=100&thumbnail=1504y1504', title: "CFA持证人带你学碳中和概念", teacher: 'Jon老师', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/c48dd10c57324df7884826b666174efe.jpg?imageView&quality=100', title: "22考研数学147分经验分享", teacher: '刘金峰', time: "5月21日 19:00开始" },
                { pic: 'https://edu-image.nosdn.127.net/cb36027c548e4385b277b035229ddf20.png?imageView&quality=100&thumbnail=582y582', title: "计算机考研院校规划及常识", teacher: '王道论坛', time: "5月21日 19:00开始" },
            ],
            recommends: [
                { pic: 'https://edu-image.nosdn.127.net/D59363C63EC8A374713F1B4748276235.png?imageView&quality=100&thumbnail=230y130&type=webp', title: '声乐', school: '浙江师范大学', people: 3910, desc: '从"音痴"到"麦霸"'},
                { pic: 'https://edu-image.nosdn.127.net/331622C49AC6E1DBB468B5C1F9E8BEA2.jpg?imageView&quality=100&thumbnail=230y130&type=webp', title: '微积分', school: '浙江师范大学', people: 3910, desc: '上课听不懂的来这都会了'},
                { pic: 'https://edu-image.nosdn.127.net/E60ABF4CFE801C7FA2C80DE45CCA9D2B.png?imageView&quality=100&thumbnail=230y130&type=webp', title: '表达与沟通：海外留学英语', school: '浙江师范大学', people: 2314, desc: '出国访学，交流无障碍'},
                { pic: 'https://edu-image.nosdn.127.net/37d67cfe076c420fa2e62c1b35d053cc.png?imageView&quality=100&thumbnail=230y130&type=webp',title: '空间数据分析', school: '武汉大学', people: 1310, desc: '空间数据分析'},
                { pic: 'https://edu-image.nosdn.127.net/c77d27381c2d481196b52c92d366fce0.jpg?imageView&quality=100&thumbnail=230y130&type=webp', title: 'STM32嵌入式系统', school: '浙江大学', people: 1310, desc: '智能化工程师' },
            ]
        }
    },
    methods: {

    }
}
</script>


<style lang='less' scoped>
.classes {
     background: #f7f7f7;
    .live {
        padding: 50px 180px 0;
        // background: #f7f7f7;
        .title {
            font-size: 24px;
            font-weight: 700;
            margin-top: 50px;
            margin-bottom: 13px;
        }
        .body {
            background: #f7f7f7;
            .live-item {
                display: inline-block;
                width: 20%;
                vertical-align: top;
                margin-right: 20px;
                margin-bottom: 12px;
                width: calc(25% - 20px);
                position: relative;
                padding: 14px 14px 20px;
                box-sizing: border-box;
                background: #fff;
                border-radius: 5px;
                &:nth-of-type(4n) {
                    margin-right: 0;
                }
                .time {
                    display: block;
                    height: 20px;
                    font-size: 12px;
                    margin-bottom: 13px;
                    span {
                        display: inline-block;
                        border-radius: 10px;
                        color: rgba(153,153,153,1);
                        background: rgba(245,245,245,1);
                        padding: 0 10px;
                        line-height: 20px;
                    }
                }
                .left {
                    display: inline-block;
                    width: 50px;
                    margin-right: 12px;
                    height: 100%;
                }
                .right {
                    display: inline-block;
                    vertical-align: top;
                    width: calc(100% - 70px);
                    .class-name {
                        font-weight: 700;
                        color: #333;
                        font-size: 14px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .teacher-name {
                        font-size: 12px;
                    }
                }

            }
        }
    }
    .recommends {
            padding: 20px 180px;
            margin-bottom: 30px;
            .title {
                font-size: 24px;
                font-weight: 700;
                margin-top: 50px;
                margin-bottom: 13px;
            }
            .recommend-item {
                display: inline-block;
                vertical-align: top;
                margin-right: 20px;
                width: calc(20% - 20px);
                background: #fff;
                border-radius: 5px;
                &:nth-of-type(6n) {
                    margin-right: 0;
                }
                .body {
                    padding: 10px 12px;
                }
                .pic img {
                    height: 126px;
                    border-radius: 5px;
                }
                .spec-title {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    margin-bottom: 7px;
                }
                .spec-school {
                    font-size: 12px;
                    line-height: 12px;
                }
                .spec-people {
                    font-size: 12px;
                    color: #999;
                    margin-top: 20px;
                }
                .line {
                    height: 1px;
                    background: #ccc;
                }
                .desc {
                    font-size: 12px;
                    line-height: 18px;
                    margin-top: 10px;
                    color: #999;
                    margin-bottom: 10px;
                }
            }
    }
}
</style>