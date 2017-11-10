<template lang="pug">
el-container(style="height:100%")
  el-aside
    v-menuLeft
  el-container
    el-header
      v-header
    el-main    
      router-view
</template>

<script>
import menuLeft from "./components/menu/left"
import header from "./components/header"
import element from "element-ui";
export default {
  components: {
    "v-menuLeft": menuLeft,
    "v-header":header
  },
  data() {
    return { visible: false };
  },
  created() {
    console.log(123);
  },
  render: h => h(App)
};
</script>
<style lang="less">
#main{height: 100%;}

</style>

