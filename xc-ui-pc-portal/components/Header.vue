<template>

    <div>

      <div class="preloader"></div>

      <div class="wraper_flyout_search">
        <div class="table">
          <div class="table-cell">
            <div class="flyout-search-layer"></div>
            <div class="flyout-search-layer"></div>
            <div class="flyout-search-layer"></div>
            <div class="flyout-search-close">
              <span class="flyout-search-close-line"></span>
              <span class="flyout-search-close-line"></span>
            </div>
            <div class="flyout_search">
              <div class="flyout-search-title">
                <h4>搜索</h4>
              </div>
              <div class="flyout-search-bar">
                <form role="search" method="get" action="#">
                  <div class="form-row">
                    <input type="search" placeholder="想搜点什么呢？" value="" name="s" required="" v-model="keyword">
                    <button type="submit" v-on:click="search"><i class="fa fa-search warning"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header class="main-header">


        <div class="header-top">
          <div class="container">
            <div class="inner-container clearfix">
              <div class="header-info pull-right">
                <ul class="info-list">
                  <li>
                    <i class="fas fa-phone"></i>
                    <a href="tel:010-82314879"> 010-82314879</a>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:yang_cissy@163.com">yang_cissy@163.com</a>
                  </li>
                  <li>
                    <i class="fas fa-user"></i>
                    <span v-if="logined" >
                  <a href="http://ucenter.xuecheng.com/#/">亲爱的 {{user}} 您好</a>
                  <a v-on:click="logout"> 退出登录</a>
                  </span>
                    <a href="http://ucenter.xuecheng.com/#/login" v-else>登录/注册</a>
                  </li>
                  <li v-if="logined">
                    <i class="fas fa-user"></i>
                    <a href="http://ucenter.xuecheng.com/#/">个人中心</a>
                  </li>
                  <li>
                    <i class="fas fa-user-circle"></i>
                    <a href="http://teacher.xuecheng.com/">课程管理</a>
                  </li>
                  <li>
                    <i class="fas fa-user-clock"></i>
                    <a href="http://cms.xuecheng.com/">系统管理</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="header-bottom">
          <div class="container">
            <div class="clearfix">
              <div class="logo-box pull-left">
                <figure class="logo"><a href="http://www.xuecheng.com/index.html"><img src="static/images/logo.png" alt=""></a></figure>
              </div>
              <div class="nav-outer pull-right clearfix">
                <div class="menu-area">
                  <nav class="main-menu navbar-expand-lg">
                    <div class="navbar-header">
                      <!-- Toggle Button -->
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <div class="navbar-collapse collapse clearfix">
                      <ul class="navigation clearfix">
                        <li class="current"><a href="http://www.xuecheng.com/index.html">首页</a></li>
                        <li class="dropdown"><a href="#">解决方案</a>
                          <ul>
                            <li><a class="warning" href="#">产品介绍</a></li>
                            <li><a class="warning" href="#">在线模拟器</a></li>
                          </ul>
                        </li>
                        <li class="dropdown"><a href="#">课程中心</a>
                          <ul>
                            <li><a href="http://www.xuecheng.com/course/search">课程内容</a></li>
                          </ul>
                        </li>
                        <li><a href="http://www.xuecheng.com/gallery.html">作品案例</a></li>
                        <li class="dropdown"><a href="#">赛事平台</a>
                          <ul>
                            <li><a class="warning" href="#">少年硅谷</a></li>
                            <li><a class="warning" href="#">大开眼界</a></li>
                            <li><a class="warning" href="#">计算机表演赛</a></li>
                            <li><a class="warning" href="#">智慧海洋</a></li>
                          </ul>
                        </li>
                        <li class="dropdown"><a href="#">新闻动态</a>
                          <ul>
                            <li><a class="warning" href="#">新闻动态</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="http://www.xuecheng.com/contact.html">联系我们</a>
                          <!--                                            <ul>-->
                          <!--                                                <li><a class="warning" href="#">合作咨询</a></li>-->
                          <!--                                            </ul>-->
                        </li>
                        <!--                                        <li><a href="contact.html">技术与支持</a></li>-->
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="outer-box">
                  <ul class="outer-content">
                    <li class="header-flyout-searchbar">
                      <i class="fa fa-search"></i>
                    </li>
                    <!-- <li><a href="shop.html"><i class="fas fa-shopping-cart"></i></a></li>-->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

<!--        &lt;!&ndash;Sticky Header 粘附式头部&ndash;&gt;-->
<!--        <div class="sticky-header">-->
<!--          <div class="container clearfix">-->
<!--            <figure class="logo-box"><a href="http://www.xuecheng.com/index.html"><img src="static/images/small-logo.png" alt="睿瞳科技"></a></figure>-->
<!--            <div class="menu-area">-->
<!--              <nav class="main-menu navbar-expand-lg">-->
<!--                <div class="navbar-header">-->
<!--                  &lt;!&ndash; Toggle Button &ndash;&gt;-->
<!--                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">-->
<!--                    <span class="icon-bar"></span>-->
<!--                    <span class="icon-bar"></span>-->
<!--                    <span class="icon-bar"></span>-->
<!--                  </button>-->
<!--                </div>-->
<!--                <div class="navbar-collapse collapse clearfix">-->
<!--                  <ul class="navigation clearfix">-->
<!--                    <li class="current"><a href="http://www.xuecheng.com/index.html">首页</a></li>-->
<!--                    <li class="dropdown"><a href="#">解决方案</a>-->
<!--                      <ul>-->
<!--                        <li><a class="warning" href="#">产品介绍</a></li>-->
<!--                        <li><a class="warning" href="#">在线模拟器</a></li>-->
<!--                      </ul>-->
<!--                    </li>-->
<!--                    <li class="dropdown"><a href="#">课程中心</a>-->
<!--                      <ul>-->
<!--                        <li><a class="warning" href="#">课程内容</a></li>-->
<!--                      </ul>-->
<!--                    </li>-->
<!--                    <li><a href="http://www.xuecheng.com/gallery.html">作品案例</a></li>-->
<!--                    <li class="dropdown"><a href="#">赛事平台</a>-->
<!--                      <ul>-->
<!--                        <li><a class="warning" href="#">少年硅谷</a></li>-->
<!--                        <li><a class="warning" href="#">大开眼界</a></li>-->
<!--                        <li><a class="warning" href="#">计算机表演赛</a></li>-->
<!--                        <li><a class="warning" href="#">智慧海洋</a></li>-->
<!--                      </ul>-->
<!--                    </li>-->
<!--                    <li class="dropdown"><a href="#">新闻动态</a>-->
<!--                      <ul>-->
<!--                        <li><a class="warning" href="#">新闻动态</a></li>-->
<!--                      </ul>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      <a href="http://www.xuecheng.com/contact.html">联系我们</a>-->
<!--                      &lt;!&ndash;                                            <ul>&ndash;&gt;-->
<!--                      &lt;!&ndash;                                                <li><a class="warning" href="#">合作咨询</a></li>&ndash;&gt;-->
<!--                      &lt;!&ndash;                                            </ul>&ndash;&gt;-->
<!--                    </li>-->
<!--                    &lt;!&ndash;                                        <li><a href="contact.html">技术与支持</a></li>&ndash;&gt;-->
<!--                  </ul>-->

<!--                </div>-->
<!--              </nav>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </header>
    </div>

</template>

<script>
import utilApi from '~/api/utils'
import loginForm from '~/components/loginForm.vue'
import myScript from "../static/js/myScript"
export default {
  components:{
    loginForm
  },
  head:{
      title:"睿瞳科技 睿瞳官网 睿瞳系统 人工智能平台 企业级管理系统 少儿科技 少儿培养",
      link: [
        {rel: 'stylesheet', href: '/static/css/style.css'},
        {rel: 'stylesheet', href: '/static/css/responsive.css'},
        {rel: 'stylesheet', href: '/static/css/jquery.growl.css'},
      ],
      script: [
        {src: '/static/js/script.js'},
        {src: '/static/js/parallax.min.js'},
        {src: '/static/js/jquery.js'},
        {src: '/static/js/popper.min.js'},
        {src: '/static/js/bootstrap.min.js'},
        {src: '/static/js/owl.js'},
        {src: '/static/js/jquery.growl.js'},
        {src: '/static/js/parallax.min.js'},
        {src: '/static/js/wow.js'},
        {src: '/static/js/jquery.fancybox.js'},
        {src: '/static/js/validation.js'},
      ]
  },
  data() {
    return {
      keyword: '',
      LoginFormVisible: false,
      logined: true,
      user:'xx',
      isShowSearch:false
    }
  },
  methods:{
    search() {
      if (this.keyword === '') {
        this.$router.push(`/course/search`)
      } else {
        let keyword = encodeURIComponent(this.keyword)
        this.$router.push(`/course/search?keyword=`+keyword)
      }
    },
//退出登录
    logout: function () {
      this.$confirm('确认退出吗?', '提示', {
      }).then(() => {
        //跳转到统一登陆
        window.location = "http://ucenter.xuecheng.com/#/logout"
      }).catch(() => {

      });
    },
    refresh_user:function(){
      let activeUser= utilApi.checkActiveUser();

      if(activeUser){
        this.logined = true
        this.user = activeUser;
        //console.log(this.user.username)
      }else{
        //this.showlogin()
      }
    },
    showlogin:function(){
      this.returnUrl = window.location;
      this.LoginFormVisible = true;
    }
  },
  mounted() {
    this.refresh_user();
    myScript();
  }
}
</script>
<style lang="postcss">

</style>
