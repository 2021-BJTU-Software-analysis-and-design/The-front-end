<template>
  <div>
    <!--查询表单-->
    <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名:
      <el-input v-model="params.pageAliase" style="width: 100px"></el-input>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
      <router-link class="mui-tab-item"
                   :to="{path:'/cms/page/add/', query:{ page:this.params.page,siteId:this.params.siteId }}">
        <el-button type="primary" size="small">新增页面</el-button>
      </router-link>
    </el-form>

    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column prop="pageId" label="页面ID" width="120">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间">
      </el-table-column>
      <el-table-column label="操作" width="230" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="toEdit(scope.row.pageId)">编辑</el-button>
          <el-button
            size="mini"
            type="success"
            @click="preview(scope.row.pageId)">预览
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deletePage(scope.row.pageId)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5,10, 20, 30, 100]"
      :current-page="this.params.page"
      :page-size="this.params.size"
      :total="this.total"
      layout="total, sizes, prev, pager, next, jumper"
      v-on:current-change="changePage"
      style="float:right;">
    </el-pagination>

  </div>
</template>
<script>
  import * as cmsApi from '../api/cms'

  export default {
    /**
     * 状态钩子
     */
    created() {
      //防止空指针错误
      this.params.page = (this.$route.query.page || 1);
      this.params.siteId = (this.$route.query.siteId || "");
      ;
    },
    mounted() {
      //默认查询页面
      this.query()
      //初始化站点列表
      this.siteList = [
        {
          siteId: '5a751fab6abb5044e0d19ea1',
          siteName: '门户主站'
        },
        {
          siteId: '102',
          siteName: '测试站'
        }
      ]
    },

    data() {
      return {
        siteList: [],//站点列表
        list: [],
        total: 0,
        params: {
          siteId: '',
          pageAliase: '',
          page: 1,//页码
          size: 10//每页显示个数
        }
      }
    },
    methods: {
      //页面预览
      preview(pageId){
        window.open("http://xuecheng.com/cms/preview/"+pageId)
      },

      //触发分页参数变动
      handleSizeChange(val) {
        this.params.size = val
        console.log(`每页 ${val} 条`);
      },

      handleCurrentChange(val) {
        this.params.page = val
        console.log(`当前页: ${val}`);
      },

      //分页查询，接收page页码
      changePage() {
        this.query()
      },

      //跳转至编辑页面
      toEdit(pageId) {
        this.$router.push({
          path: "/cms/page/edit/" + pageId,
          query: {
            page: this.params.page,
            siteId: this.params.siteId
          }
        })
      },

      //删除页面
      deletePage(pageId) {
        this.$confirm("此操作将永久的删除该页面", "提示", {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          cmsApi.page_delete(pageId).then(res => {
            if (res.success) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.query()
            } else {
              this.$message({
                type: 'warning',
                message: '删除失败'
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //查询
      query: function () {
        //调用服务端接口
        cmsApi.page_list(this.params.page, this.params.size, this.params).then((res) => {
          console.log(res);
          //将res结果数据赋值给数据模型对象
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        })
      }
    },
  }
</script>
