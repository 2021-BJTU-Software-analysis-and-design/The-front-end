<template>
<div class="my-header">
<!-- search-box-layout 搜索模块的布局 -->
    <div class="wraper_flyout_search">
        <div class="table">
            <div class="table-cell">
                <div class="flyout-search-layer"></div>
                <div class="flyout-search-layer"></div>
                <div class="flyout-search-layer"></div>
                <div class="flyout-search-close" @click="removeSearch">
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
                                <input type="search" placeholder="想搜点什么呢？" value="" name="s" required="">
                                <button type="submit"><i class="fa fa-search warning"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- search-box-layout end -->


    <!-- Main Header 顶头头部-->
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
                                <a class="warning" href="/#/login">登录/注册</a>
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
                        <figure class="logo"><a href="/static/index.html"><img src="static/images/logo.png" alt=""></a></figure>
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
                                        <li v-for="(item, index) in heads" :key="index">
                                            <a v-if="item.href" :href="item.href">{{item.title}}</a>
                                            <div class="wrapper" v-else @mouseenter="enterUl(item)" @mouseleave="leaveUl(item)">
                                                <a>
                                                    {{item.title}}
                                                </a>
                                                <ul :class="{show: item.showList}">
                                                    <li v-for="(sub, i) in item.subs" :key="i">
                                                        <a v-if="sub.href" :href="sub.href">{{sub.title}}</a>
                                                        <a v-else @click="noSub">{{sub.title}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                         
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="outer-box">
                            <ul class="outer-content">
                                <li class="header-flyout-searchbar">
                                    <i class="fa fa-search" @click="onClick"></i>
                                </li>
                               <!-- <li><a href="shop.html"><i class="fas fa-shopping-cart"></i></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Sticky Header 粘附式头部-->
        <div class="sticky-header">
            <div class="container clearfix">
                <figure class="logo-box"><a href="/static/index.html"><img src="static/images/small-logo.png" alt="睿瞳科技"></a></figure>
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
                                 <li v-for="(item, index) in heads" :key="index">
                                            <a v-if="item.href" :href="item.href">{{item.title}}</a>
                                            <div class="wrapper" v-else @mouseenter="enterUl(item)" @mouseleave="leaveUl(item)">
                                                <a>
                                                    {{item.title}}
                                                </a>
                                                <ul :class="{show: item.showList}">
                                                    <li v-for="(sub, i) in item.subs" :key="i">
                                                        <a v-if="sub.href" :href="sub.href">{{sub.title}}</a>
                                                        <a v-else @click="noSub">{{sub.title}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                         
                                        </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div><!-- sticky-header end -->
    </header>
    <!-- End Main Header 头部结束-->
</div>
</template>

<script>
export default {
    data () {
        return {
            heads: [
                { title: "首页", href: "/static/index.html"},
                { 
                    title: "解决方案",
                    subs: [
                        { title: "产品介绍", href: "" },
                        { title: "在线模拟器", href: "" }
                    ]
                },
                { 
                    title: "课程中心",
                    subs: [
                        { title: "课程内容", href: "/#/class" }
                    ]
                },
                { 
                    title: "作品案例",
                    href: "/static/gallery.html"
                },
                { 
                    title: "赛事平台",
                    subs: [
                        { title: "少年硅谷", href: "" },
                        { title: "大开眼界", href: "" },
                          { title: "计算机表演赛", href: "" },
                            { title: "智慧海洋", href: "" }
                    ]
                },
                { title: "新闻动态", href: "/#/news" },
                { title: "联系我们", href: "/static/contact.html" }
            ]
        }
    },
    methods: {
        onClick () {
            document.body.classList.add('flyout-searchbar-active')
        },
        removeSearch () {
            document.body.classList.remove("flyout-searchbar-active")
        },
        noSub () {
        },
        enterUl (item) {
            console.log(123)
            this.$set(item, "showList", true)
        },
        leaveUl (item) {
            this.$set(item, "showList", false)
        }
    },
}
</script>

<style lang='less' scoped>
.main-menu .navigation > li > ul.show {
    display: inline-block;
}
.main-menu .navigation > li .wrapper {
    > a {
        position: relative;
        display: block;
        font-size: 18px;
        font-family: '\5FAE\8F6F\96C5\9ED1', sans-serif;
        color: #2b3c6b;
        line-height: 26px;
        font-weight: 700;
        opacity: 1;
        text-transform: capitalize;
        padding: 47px 0px 42px 0px;
        transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -webkit-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
    }
    > ul {
        position: absolute;
        left: 0px;
        top: 100%;
        width: 250px;
        z-index: 100;
        display: none;
        background: #ffffff;
        border-top: 3px solid #ff7162;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
        li {
            position: relative;
            width: 100%;
            padding: 7px 30px;
            border-bottom: 1px solid #e5e5e5;
            transition: all 500ms ease;
            a {
                position: relative;
                display: block;
                font-family: '\5FAE\8F6F\96C5\9ED1', sans-serif;
                padding: 6px 0px;
                line-height: 24px;
                font-size: 15px;
                color: #2b3c6b;
                font-weight: 700;
                text-align: left;
                text-transform: capitalize;
                transition: all 500ms ease;
                -moz-transition: all 500ms ease;
                -webkit-transition: all 500ms ease;
                -ms-transition: all 500ms ease;
                -o-transition: all 500ms ease;
            }
        }
        &.show {
            display: inline-block;
        }
    }
}
.sticky-header .main-menu .navigation > li .wrapper {
    >a {
        padding: 14px 30px 16px 30px !important
    }
}
</style>