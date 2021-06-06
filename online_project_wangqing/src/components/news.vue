<template>
    <div class="news">
        <div class="body">
            <div class="news-item" v-for="(item, index) in newsList" :key="index">
                <div class="img">
                    <img v-if="item.imgUrl" :src="item.imgUrl" />
                </div>
                <div class="main">
                    <div class="title">{{item.title}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
                <div class="time">{{item.time}}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "news",
    components: {
    },
    data () {
        return {
            newsList: [
                {
                    imgUrl: "http://www.wdeyes.com/upload/default/20200923/0231438edb1eb331819d3a8d7b6efa24.jpg",
                    title: "睿瞳科技入选成都市人工智能产业协会会员单位：助力视觉AI落地细分场景 ",
                    content: "成都市人工智能产业协会会员单位均为成都市人工智能领域的卓越企业，理事会员均为成都市人工智能产业领军人物。睿瞳科技成功入选该协会会员单位，既是对睿瞳科技在人工智能领域贡献的肯定，也是对其技术研发实力的认可，体现了睿瞳科技在成都市人工智能领域创新能力和影响力",
                    time: "2019-03-02"
                },
                 {
                    imgUrl: "http://www.wdeyes.com/upload/default/20200923/0231438edb1eb331819d3a8d7b6efa24.jpg",
                    title: "睿瞳科技入选成都市人工智能产业协会会员单位：助力视觉AI落地细分场景 ",
                    content: "成都市人工智能产业协会会员单位均为成都市人工智能领域的卓越企业，理事会员均为成都市人工智能产业领军人物。睿瞳科技成功入选该协会会员单位，既是对睿瞳科技在人工智能领域贡献的肯定，也是对其技术研发实力的认可，体现了睿瞳科技在成都市人工智能领域创新能力和影响力",
                    time: "2019-03-02"
                }
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.news {
    .body {
        margin-top: 40px;
        margin-left: 200px;
        margin-right: 200px;
        .news-item {
            font-size: 0;
            position: relative;
            height: 250px;
            margin-top: 20px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            padding: 20px;
            .img {
                display: inline-block;
                width: 30%;
            }
            .main {
                display: inline-block;
                font-size: 14px;
                height: 100%;
                vertical-align: top;
                width: 67%;
                
                .title {
                    font-size: 24px;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 80%;
                    margin-top: 50px;
                    margin-left: 40px;
                }
                .content {
                    margin-left: 40px;
                    margin-top: 20px;
                    color: #444;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical
                }
            }
            .time {
                position: absolute;
                font-size: 14px;
                top: 0;
                right: 20px;
            }
        }
    }
}
</style>