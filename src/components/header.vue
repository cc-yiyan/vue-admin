<template lang="pug">
    el-breadcrumb(separator='/')
        el-breadcrumb-item(:to="{ path: '/' }") 首页
        el-breadcrumb-item 活动管理
        el-breadcrumb-item 活动列表
        el-breadcrumb-item 活动详情
</template>
<style lang="less">
.el-breadcrumb {
  line-height: 60px;
  .el-breadcrumb__item {
    .el-breadcrumb__inner {
      color: #666;
    }
  }
}
</style>
<script>
export default {
  name: "",
  components: {},
  created() {}
};
</script>