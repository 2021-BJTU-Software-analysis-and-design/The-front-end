<template>
  <div>
    <p-head></p-head>
      <div class="note-release-success">
        <p class="ico"><img src="/static/images/page-success.png" alt=""></p>
        <p class="title" v-if="logoutsuccess">退出成功！</p>
        <p class="title" v-if="!logoutsuccess">退出失败，请尝试刷新页面重新操作！</p>
        <!--<p class="info"></p>-->
        <p class="button"><a href="http://www.ruitong.com" class="active">返回首页</a><router-link :to="{path: '/login'}">重新登陆</router-link></p>
      </div>
   <p-foot></p-foot>
  </div>
</template>
<script>
import PHead from '@/base/components/head.vue';
import PFoot from '@/base/components/foot.vue';
import utilApi from '../../../common/utils';
import * as loginApi from '../../../base/api/login';
export default {
	components:{
		PHead,
    PFoot
	},
  data() {
    return {
      logoutsuccess:false
    }
  },
  methods: {

  },
  created(){
    loginApi.logout({}).then((res) => {
        if(res.success){
          sessionStorage.removeItem('activeUser');
          this.$message('退出成功');
          this.logoutsuccess = true
        }else if(res.code == 11111){
          // 用户的登录信息已在redis过期
          this.logoutsuccess = false
          this.$message('用户凭证过期, 在这之前已经退出登陆');
        } else{
          this.logoutsuccess = false
        }
        //清空用户的缓存信息
        sessionStorage.clear()
      },
      (res) => {
        this.logoutsuccess = false
      });
  },
  mounted() {

  }
}
</script>
<style scoped>
  @import './../../../../static/css/page-learing-note-release-success.css';
  .login-form{width: 400px;margin:5% auto 0;}
</style>
