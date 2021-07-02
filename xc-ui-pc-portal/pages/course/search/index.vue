<template>
  <div>
    <div class="learing-list">
      <div class="myInput">
      <div class="input-search"><el-input v-model="searchKeyword" ></el-input></div>
      <div class="searchword"><el-button >搜索</el-button></div>
      </div>
      <div class="list-box">
        <ul>
          <li>关键字：</li>
          <ol>
            <li>
              {{keyword}}
              <nuxt-link
                v-if="keyword"
                class="title-link"
                :to="'/course/search?keyword=&mt='+mt+'&st=' + st+'&grade='+grade"
              >&Chi;</nuxt-link>
            </li>
          </ol>
        </ul>
        <ul>
          <li>一级分类：</li>
          <li v-if="mt!=''">
            <nuxt-link class="title-link" :to="'/course/search?keyword='+keyword+'&grade='+grade">全部</nuxt-link>
          </li>
          <li class="all" v-else>全部</li>
          <ol>
            <li v-for="category_v in first_category">
              <nuxt-link
                class="title-link all"
                :to="'/course/search?keyword='+keyword+'&mt=' + category_v.id"
                v-if="category_v.id == mt"
              >{{category_v.name}}</nuxt-link>
              <nuxt-link
                class="title-link"
                :to="'/course/search?keyword='+keyword+'&mt=' + category_v.id"
                v-else
              >{{category_v.name}}</nuxt-link>
            </li>
          </ol>
          <!--<ol>
            <li>数据分析</li>
            <li>机器学习工程</li>
            <li>前端开发工程</li>
          </ol>-->
        </ul>
        <ul>
          <li>二级分类：</li>
          <li v-if="st!=''">
            <nuxt-link
              class="title-link"
              :to="'/course/search?keyword='+keyword+'&mt='+mt+'&grade='+grade"
            >全部</nuxt-link>
          </li>
          <li class="all" v-else>全部</li>
          <ol v-if="second_category.length>0">
            <li v-for="category_v in second_category">
              <nuxt-link
                class="title-link all"
                :to="'/course/search?keyword='+keyword+'&mt='+mt+'&st=' + category_v.id"
                v-if="category_v.id == st"
              >{{category_v.name}}</nuxt-link>
              <nuxt-link
                class="title-link"
                :to="'/course/search?keyword='+keyword+'&mt='+mt+'&st=' + category_v.id"
                v-else
              >{{category_v.name}}</nuxt-link>
            </li>
            <!-- <li>大数据</li>
            <li>云计算</li>-->
          </ol>
          <!--<a href="#" class="more">更多 ∨</a>-->
        </ul>
        <ul>
          <li>难度等级：</li>
          <li v-if="grade!=''">
            <nuxt-link
              class="title-link"
              :to="'/course/search?keyword='+keyword+'&mt=' + mt+'&st='+st+'&grade='"
            >全部</nuxt-link>
          </li>
          <li class="all" v-else>全部</li>
          <ol>
            <li v-if="grade=='200001'" class="all">初级</li>
            <li v-else>
              <nuxt-link
                class="title-link"
                :to="'/course/search?keyword='+keyword+'&mt=' + mt+'&st='+st+'&grade=200001'"
              >初级</nuxt-link>
            </li>
            <li v-if="grade=='200002'" class="all">中级</li>
            <li v-else>
              <nuxt-link
                class="title-link"
                :to="'/course/search?keyword='+keyword+'&mt=' + mt+'&st='+st+'&grade=200002'"
              >中级</nuxt-link>
            </li>
            <li v-if="grade=='200003'" class="all">高级</li>
            <li v-else>
              <nuxt-link
                class="title-link"
                :to="'/course/search?keyword='+keyword+'&mt=' + mt+'&st='+st+'&grade=200003'"
              >高级</nuxt-link>
            </li>
          </ol>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-9 list-row-left">
          <div class="list-cont-left">
            <div class="tit">
              <ul class="nav nav-tabs">
                <!--<li class="active"><a href="#">推荐</a></li>
                <li><a href="#">最新</a></li>
                <li><a href="#">热评</a></li>-->
                <!-- <div class="page navbar-right">
                   <a href="#" class="prev">
                     < </a>
                   <span class="">1/28</span>
                   <a href="#" class="next"> ></a>
                </div>-->
              </ul>
            </div>
            <div class="tab-content">
              <div class="content-list">
                <!-- 渲染课程信息 -->
                <div class="recom-item" v-for="(course, index) in courselist">
                  <nuxt-link :to="'/course/detail/'+course.id+'.html'" target="_blank">
                    <div v-if="!course.pic">
                      <p>
                        <img :src="imgUrl+'/'+course.pic" width="100%" alt />
                      </p>
                    </div>
                    <div v-else>
                      <p>
                        <img src="/static/img/nonepic.png" width="100%" alt />
                      </p>
                    </div>
                    <ul>
                      <li class="course_title">
                        <span v-html="course.name"></span>
                      </li>
                      <li style="float: left">
                        <span v-if="course.charge == '203001'">免费</span>
                        <span v-if="course.charge == '203002'">￥{{course.price | money}}</span>
                        <!-- <em> · </em>-->
                        &nbsp;&nbsp;
                        <!--<em>1125人在学习</em>-->
                      </li>
                    </ul>
                  </nuxt-link>
                </div>

                <li class="clearfix"></li>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

          <!-- 分页插件 -->
          <div style="text-align: center">
            <el-pagination
              background
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
              :total="total"
              :page-size="page_size"
              :current-page="page"
              prev-text="上一页"
              next-text="下一页"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//配置文件
let config = require("~/config/sysConfig");
import querystring from "querystring";
import {search_course,sys_res_category} from "~/api/course";
export default {
  head() {
    return {
      title: "睿瞳科技| 睿瞳官网| 睿瞳系统| 人工智能平台| 企业级管理系统| 少儿科技 |少儿培养",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "睿瞳科技 是一个 致力于青少年人工智能方面培养， 致力于打造最好用的少儿人工智能的公司 。她也适合新手朋友练手 。同时具备， 界面简洁美观、高效、安全、源码可控、版本迭代快、免费技术交流群 等特点。"
        },
        { name: "keywords", content: this.keywords }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/static/plugins/normalize-css/normalize.css"
        },
        {
          rel: "stylesheet",
          href: "/static/plugins/bootstrap/dist/css/bootstrap.css"
        },
        { rel: "stylesheet", href: "/static/css/page-learing-list.css" },

        { rel: 'stylesheet', href: '/static/css/page-header.css' },
      ]
    };
  },
  async asyncData({ store, route }) {
    //服务端调用方法
    //搜索课程
    let page = route.query.page;
    if (!page) {
      page = 1;
    } else {
      page = Number.parseInt(page);
    }
    console.log(page);
    //请求搜索服务，搜索服务
    let course_data = await search_course(page, 10, route.query);
    console.log(course_data);
    let category_data = await sys_res_category();
    console.log(category_data)
    if (course_data && course_data.queryResult) {
      let keywords = "";
      let mt = "";
      let st = "";
      let grade = "";
      let keyword = "";
      let total = course_data.queryResult.total;
      if (route.query.mt) {
        mt = route.query.mt;
      }
      if (route.query.st) {
        st = route.query.st;
      }
      if (route.query.grade) {
        grade = route.query.grade;
      }
      if (route.query.keyword) {
        keyword = route.query.keyword;
      }

      //全部分类
      let category = category_data.category; //分部分类
      let first_category = category[0].children; //一级分类
      let second_category = []; //二级分类

      //遍历一级分类
      for (var i in first_category) {
        keywords += first_category[i].name + " ";
        if (mt != "" && mt == first_category[i].id) {
          //取出二级分类
          second_category = first_category[i].children;
          // console.log(second_category)
          break;
        }
      }
      return {
        courselist: course_data.queryResult.list, //课程列表
        keywords: keywords,
        first_category: first_category,
        second_category: second_category,
        mt: mt,
        st: st,
        grade: grade,
        keyword: keyword,
        page: page,
        total: total,
        imgUrl: config.imgUrl
      };
    } else {
      return {
        courselist: {},
        first_category: {},
        second_category: {},
        mt: "",
        st: "",
        grade: "",
        keyword: "",
        page: page,
        total: 0,
        imgUrl: config.imgUrl
      };
    }
  },
  data() {
    return {
      courselist: {},
      first_category: {},
      second_category: {},
      mt: "",
      st: "",
      grade: "",
      keyword: "",
      imgUrl: config.imgUrl,
      total: 0, //总记录数
      page: 1, //页码
      page_size: 10, //每页显示个数
      searchKeyword:''
    };
  },
  watch: {
    //路由发生变化立即搜索search表示search方法
    $route: "search"
  },
  methods: {
    //分页触发
    handleCurrentChange(page) {
      this.page = page;
      this.$route.query.page = page;
      let querys = querystring.stringify(this.$route.query);
      window.location = "/course/search?" + querys;
    },
    search() {
      //刷新当前页面
      window.location.reload();
    }
  },
  mounted() {}
};
</script>
<style>
a {
  color: #000;
}
.el-icon-arrow-left:before {
  content: "<";
}
.el-icon-d-arrow-left:before {
  content: "...";
}
.el-icon-arrow-right:before {
  content: ">";
}
.el-icon-d-arrow-right:before {
  content: "...";
}
.el-icon-more:before {
  content: "...";
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #fff;
}
.course_title {
  height: 20px;
  width: 160px;
  overflow: hidden;
}
.eslight {
  color: #990000;
}

.myInput{
  position: relative;
  bottom: 0;
  margin-top: 20px;
  padding: 0;
}

.myInput .input-search{
  position: relative;
  width: 546px;
  display: inline-block;
  margin-left: 30% ;

}

.myInput .searchword{
  width: 108px;
  height: 44px;
  position: relative;
  z-index: 2;
  display: inline-block;
}
</style>
