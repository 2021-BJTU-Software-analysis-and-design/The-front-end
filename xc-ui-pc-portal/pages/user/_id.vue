<template>
  <div>修改用户信息{{id}},名称：{{name}},课程名称：{{course}}</div>
</template>
<script>
export default {
  layout: "test",
  //根据id查询用户信息
  async asyncData({ store, route }) {
    console.log("async方法");
    var a = await new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log("1")
            resolve(1)
        }, 2000);
    })
    var b = await new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("2")
            resolve(2)
        }, 1000);
    })

    return {
      name: "黑马程序员"
    };
  },
  data() {
    return {
      id: "",
      course: ""
    };
  },
  methods: {
    a() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(1);
        }, 2000);
      });
    },
    b() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(2);
        }, 1000);
      });
    },
    getCourse: function() {
      this.course = "spring实战666";
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getCourse();
    // this.a().then(res=>{
    //     // alert(res)
    //     console.log(res)
    // })
    // this.b().then(res=>{
    //     // alert(res)
    //     console.log(res)
    // })
  }
};
</script>
<style>
</style>