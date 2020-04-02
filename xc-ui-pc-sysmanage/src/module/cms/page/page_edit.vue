<template>
  <div>
    <el-form :model="pageForm" label-width="80px" :rules="pageFormRules" ref="pageForm">
      <el-form-item label="所属站点" prop="siteId">
        <el-select v-model="pageForm.siteId" placeholder="请选择站点">
          <el-option
            v-for="item in siteList"
            :key="item.siteId"
            :label="item.siteName"
            :value="item.siteId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择模版" prop="templateId">
        <el-select v-model="pageForm.templateId" placeholder="请选择">
          <el-option
            v-for="item in templateList"
            :key="item.templateId"
            :label="item.templateName"
            :value="item.templateId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="页面名称" prop="pageName">
        <el-input v-model="pageForm.pageName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="别名" prop="pageAliase">
        <el-input v-model="pageForm.pageAliase" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="访问路径" prop="pageWebPath">
        <el-input v-model="pageForm.pageWebPath" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="物理路径" prop="pagePhysicalPath">
        <el-input v-model="pageForm.pagePhysicalPath" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="pageForm.pageType">
          <el-radio class="radio" label="0" >静态</el-radio>
          <el-radio class="radio" label="1" >动态</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="数据Url" prop="dataUrl">
        <el-input v-model="pageForm.dataUrl" auto-complete="off" ></el-input>
      </el-form-item>

      <el-form-item label="创建时间">
        <el-date-picker type="datetime" placeholder="创建时间" v-model="pageForm.pageCreateTime">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addSubmit">提交</el-button>
      <el-button type="info" @click="goBack">返回</el-button>
    </div>
  </div>
</template>
<script>
  import * as cmsApi from '../api/cms'

  export default {
    created: function () {
      //初始化站点数据
      cmsApi.site_list().then((res) => {
        if (res.success) {
          console.log("站点数据", res)
          this.siteList = res.queryResult.list
        } else {
          console.log("获取站点信息时发生了错误", res)
        }
      })

      //初始化模板数据
      cmsApi.template_list().then((res) => {
        if (res.success) {
          console.log("模板数据", res)
          this.templateList = res.queryResult.list
        } else {
          console.log("获取模板信息时发生了错误", res)
        }
      })

      //初始化页面的数据
      cmsApi.page_query(this.$route.params.pageId).then((res) =>{
          if(res.success){
            console.log("初始化页面数据",res.cmsPage)
            this.pageForm = res.cmsPage
          }else{
            console.log("初始化页面数据失败",res)
          }
      })
    },
    mounted() {

    },

    data() {
      return {
        pageFormRules: {
          siteId: [
            {required: true, message: '请选择站点', trigger: 'blur'}
          ],
          templateId: [
            {required: true, message: '请选择模版', trigger: 'blur'}
          ],
          pageName: [
            {required: true, message: '请输入页面名称', trigger: 'blur'}
          ],
          pageAliase: [
            {required: true, message: '请输入页面别名', trigger: 'blur'}
          ],
          pageWebPath: [
            {required: true, message: '请输入访问路径', trigger: 'blur'}
          ],
          pagePhysicalPath: [
            {required: true, message: '请输入物理路径', trigger: 'blur'}
          ]
        },
        //站点列表
        siteList: [],
        //模版列表
        templateList: [],
        //新增界面数据
        pageForm: {
          siteId: '',
          templateId: '',
          pageName: '',
          pageAliase: '',
          pageWebPath: '',
          pageParameter: '',
          pagePhysicalPath: '',
          pageType: 0,
          dataUrl:"",
          pageCreateTime: new Date()
        }
      }
    },
    methods: {
      //提交表单
      addSubmit() {
        this.$refs.pageForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交修改吗？', '提示', {}).then(() => {
              cmsApi.page_edit(this.$route.params.pageId,this.pageForm).then((res) => {
                if (res.success) {
                  this.$message({
                    message: '修改提交成功',
                    type: 'success'
                  });
                } else {
                  this.$message.error('提交失败');
                }
              });
            });
          }
        })
      },

      //返回上一页
      goBack() {
        this.$router.push({
          path: "/cms/page/list",
          query: {
            page: this.$route.query.page,
            siteId: this.$route.query.siteId
          }
        })
      }
    }
  }
</script>
