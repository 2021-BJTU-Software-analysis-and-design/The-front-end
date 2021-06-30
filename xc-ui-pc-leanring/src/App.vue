<!-- 以后项目的根组件 -->
<template>
  <div>
      <router-view ></router-view>
    </div>
</template>

<script>
  import jwtDecode from 'jwt-decode'
  import base64 from 'js-base64'
  import utilApi from './common/utils'
  import '../static/css/style.css'
  // import '../static/css/font-awesome-all.css'
  // import '../static/css/animate.css'
  import '../static/css/responsive.css'
  import '../static/css/jquery.growl.css'
  import '../static/js/jquery.js'
  import '../static/js/jquery-ui'
  import '../static/js/popper.min.js'
  import '../static/js/bootstrap.min.js'
  import '../static/js/owl.js'
  import '../static/js/wow.js'
  import '../static/js/validation.js'
  import '../static/js/jquery.fancybox.js'
  import '../static/js/appear.js'
  import '../static/js/parallax.min.js'
  import '../static/js/jquery.growl.js'
  import '../static/js/script.js'
  import myScript from "../static/js/myScript"


export default {

  data () {
    return {
      name: 'app'
    }
  },
  methods: {
    /* getCookie(name) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg)) {
        //return true;
        return (arr[2]);
      } else {
        return false
      }
    } */

  },
  created: function (newPath) {
    // var jwt = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjEyNjMzNjUsInVzZXJfbmFtZSI6IjEyMyIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iLCJnZXRSZXNvdXJjZSJdLCJqdGkiOiI3NmIxOTgzMi01MDk3LTQyMDMtYjhjMS1kOGI1N2ZmMmZhOTAiLCJjbGllbnRfaWQiOiJtYW5hZ2VyIiwic2NvcGUiOlsibWFuYWdlciJdfQ.MzycLCC9cR-905ilrd1bWH52nqto4MDYbbMSXgcRdVkUGlv2A2JrlIvbvxNc2BVug1L59AV_7hUa_SHZQgrOdHnyoMdcu5KoHHXsJi1O5wUXkuahc-K3KoBhwkyWY9O-DvwZhrmzsYN2gb_3qmU2xbHu6U1pwwscXGHjbKJDoWGdrmMkRc1cpxuqvH-0eusR1GLQ4gTBSyVNW4XVO7jMt9ATBubos7GhtbAMXnCQVO9pui2zvPvKVxlvwMjJowjdCc_5hvXjyUvWgbU1qUrdtXeskeT-HoVUtsol6OnFHnq7o9bIin1493ZwjDck_0R1R8mkGRGKylQtZdzESeQpYA';
    /* var jwt_base64 = utilApi.getCookie("juid");
    if (jwt_base64 ) {
      let jwt = Base64.decode(jwt_base64)
      this.logined = true
      var jwtDecodeVal = jwtDecode(jwt);
      console.log(jwtDecodeVal);
//    var user = sessionStorage.getItem('user');
      if (jwtDecodeVal) {
//      user = JSON.parse(user);
        let user={}
        user.username = jwtDecodeVal.user_name || '';
        user.userimg = jwtDecodeVal.user_img || '';
        user.userid = jwtDecodeVal.user_id || '';
        utilApi.setSession("activeUser",user)
      }

    } */
  },
  mounted() {
    myScript();
  }
}
</script>

<style>
  * {
    -webkit-user-select:text;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  .placeholder {
    height: 1500px;
  }
  }
</style>
