<template>
<div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button type="text" @click="enterRegistry">注册</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>
import * as loginApi from '../api/login';

export default {
    data () {
        var checkName = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('用户名不能为空'));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        };
        return {
            ruleForm: {
                password: '',
                username: ''
            },
            rules: {
                password: [
                    { required: true, message: "必填" },
                    { validator: validatePass, trigger: 'blur' }
                ],
                username: [
                    { required: true, message: "必填" },
                    { validator: checkName, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //TODO 等待接口

                  let para = Object.assign({}, this.ruleForm);

                  loginApi.login(para).then((res) => {
                        if(res.success){
                          this.$message('登陆成功');
                          //刷新 当前页面
                          // alert(this.returnUrl)
                          console.log(this.returnUrl)
                          if(this.returnUrl!='undefined' && this.returnUrl!=''
                              && !this.returnUrl.includes("/userlogout")
                              && !this.returnUrl.includes("/userlogin")){

                            window.location.href = this.returnUrl;
                          }else{
                            //跳转到首页
                            window.location.href = 'http://www.xuecheng.com/'
                          }

                        }else{
                          if(res.message){
                            this.$message.error(res.message);
                          }else{
                            this.$message.error('登陆失败');
                          }
                        }
                      },
                      (res) => {
                        this.$message.error(res.message);
                      });


                } else {
                    return false
                }
            });
        },
        enterRegistry () {
            this.$router.replace("registry")
        }
    }
}
</script>

<style lang='less' scoped>
.login {
        padding: 20px 300px;
    margin-top: 50px;
    text-align: center;
    .el-form {
        width: 500px;
        display: inline-block;
        text-align: center;
    }
}
</style>