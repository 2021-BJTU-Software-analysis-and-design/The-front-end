<template>
<div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input v-model.number="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button type="text" @click="enterRegistry">注册</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>
export default {
    data () {
        var checkName = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('用户名不能为空'));
            }
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
                pass: '',
                name: ''
            },
            rules: {
                pass: [
                    { required: true, message: "必填" },
                    { validator: validatePass, trigger: 'blur' }
                ],
                name: [
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