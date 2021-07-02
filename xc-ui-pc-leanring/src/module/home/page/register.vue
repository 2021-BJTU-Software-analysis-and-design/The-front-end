<template>
  <div>
    <el-row class="container" style="width: 470px">
        <el-form :model="registerForm" label-width="80px" :rules="registerRules" ref="loginForm" class="register-form">
          <el-form-item label="账号" prop="username">
            <el-input v-model="registerForm.username" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerForm.password" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input v-model="registerForm.confirmPassword" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary"  @click.native="register" :loading="editLoading">注册</el-button>
            <el-button type="primary"  @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </el-row>
  </div>
</template>
<script>
	import * as loginApi from "../../../base/api/login";
  import utilApi from "../../../common/utils";

  export default{
    data() {
      return {
        LoginFormVisible:false,
        activeName: 'login',
        editLoading: false,
        registerForm: {
          username:'',
          password: '',
          email:'',
          confirmPassword:''
        },
        registerRules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'}
          ],
        },
        user:{
          userid:'',
          username: '',
          userimg: ''
        },
        logined:false,
        returnUrl:''
      }
    },
    methods: {
      register: function () {

        this.$refs.registerForm.validate((valid) => {
          if (valid) {

            if( this.registerForm.confirmPassword !== this.registerForm.password){
              this.$message.error('密码不一致');
              return;
            }

            this.editLoading = true;

            let para = Object.assign({}, this.registerForm);

            loginApi.register(para).then((res) => {
                this.editLoading = false;
                if(res.success){
                  this.$message('注册成功');
                }else{
                  if(res.message){
                    this.$message.error(res.message);
                  }else{
                    this.$message.error('注册失败');
                  }
                }
              },
              (res) => {
                this.editLoading = false;
              });


          }
        });

      },

      resetForm:function(formName){
        this.$refs[formName].resetFields();
      },
      refresh_user:function(){
        let activeUser= utilApi.getActiveUser();

        if(activeUser){
          this.logined = true
          this.user = activeUser;
          //console.log(this.user.username)
        }else{
          this.showlogin()
        }
      },
      showlogin:function(){
        this.LoginFormVisible = true;
      }
    },
    created() {
      // var this_ = this;
      //bus.$on('childa-message', this.showlogin(this_));


    },
    mounted() {

      this.refresh_user()
//    Vue.prototype.loginwin = this;
      if( this.$route.query &&  this.$route.query.returnUrl){

        let returnUrl =  Base64.decode(this.$route.query.returnUrl)
        //alert(returnUrl)
        this.returnUrl = returnUrl;
        //alert(this.returnUrl)
      }

    }
	}
</script>
<style scoped>
.register-form{width: 400px;margin:5% auto 0;}
</style>
