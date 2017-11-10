<template lang="pug">
.menu-left(v-bind:class="leftState")
  el-radio-group(v-model='isCollapse')
    .logo-left
      span.logo-img
      el-radio-button(:label='true')
        i.el-icon-arrow-left
    el-radio-button(:label='false')
      i.el-icon-arrow-right
  .left-search-icon
    i.el-icon-search
    .left-search
      input.u-s-inp(type="text" placeholder="search" @focus="showMenu")
      i.el-icon-search  
  el-menu.el-menu-vertical-demo(
    default-active='1-4-1',
    @unique-opened="true", 
    @open='handleOpen', 
    @close='handleClose',
    :collapse='isCollapse')
    template(v-for="item in menuData")    
      el-submenu(v-if="item.isGroup" :index='item.index')
        template(slot='title')
          i(:class='item.iconName')
          span(slot='title') {{item.titleName}}
        template(v-for="list in item.menuList")
          el-menu-item-group(v-if='list.isGroup' )
            span(slot='title') {{list.titleName}}
            template(v-for="list21 in list.menuList")
              el-menu-item(:index='list21.index') {{list21.titleName}}
          el-menu-item( class="el-menu-sec" v-else-if="list.hasList == false" :index='list.index')
            span(slot='title') {{list.titleName}}
          el-submenu(v-else-if="list.hasList == true" :index='list.index' )
            span(slot='title') {{list.titleName}}
            template(v-for="list22 in list.menuList")
               el-menu-item(:index='list22.index') {{list22.titleName}} 
      el-menu-item(v-else :index='item.index')
        i(:class='item.iconName')
        span.title-text {{item.titleName}}
    
</template>
<style lang="less">

</style>

<script>
import "../../style/left";
export default {
  data() {
    return {
      isCollapse: false,
      leftState: this.showLeft(),
      menuData: [
        {
          titleName: "导航一",
          hasList: true,
          isGroup: true,
          iconName: "el-icon-location",
          index: "1",
          menuList: [
            {
              titleName: "智能报表",
              hasList: true,
              isGroup: true,
              menuList: [
                {
                  titleName: "创建报表",
                  hasList: false,
                  isGroup: false,
                  index: "1-1",
                  path: "/sds"
                },
                {
                  titleName: "查看报表",
                  hasList: false,
                  isGroup: false,
                  index: "1-2",
                  path: "/sds"
                }
              ]
            },
            {
              titleName: "分组2",
              hasList: true,
              isGroup: true,
              menuList: [
                {
                  titleName: "选项3",
                  hasList: false,
                  isGroup: false,
                  index: "1-3",
                  path: "/sds"
                },
                {
                  titleName: "选项4",
                  hasList: false,
                  isGroup: false,
                  index: "1-4",
                  path: "/sds"
                }
              ]
            },
            {
              titleName: "选项5",
              hasList: true,
              isGroup: false,
              index: "1-5",
              menuList: [
                {
                  titleName: "选项6",
                  hasList: false,
                  isGroup: false,
                  index: "1-6",
                  path: "/sds"
                },
                {
                  titleName: "选项7",
                  hasList: false,
                  isGroup: false,
                  index: "1-7",
                  path: "/sds"
                }
              ]
            },
            {
              titleName: "选项8",
              hasList: false,
              isGroup: false,
              index: "1-8"
            }
          ]
        },
        {
          titleName: "智能报表",
          hasList: true,
          isGroup: true,
          iconName: "icon-docs",
          index: "2",
          menuList: [
            {
              titleName: "创建报表",
              hasList: false,
              isGroup: false,
              index: "1-6",
              path: "/sds"
            },
            {
              titleName: "查看报表",
              hasList: false,
              isGroup: false,
              index: "1-7",
              path: "/sds"
            }
          ]
        },
        {
          titleName: "导航三",
          hasList: false,
          isGroup: false,
          iconName: "el-icon-menu",
          index: "3"
        },
        {
          titleName: "导航四",
          hasList: false,
          isGroup: false,
          iconName: "el-icon-news",
          index: "4"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key);
    },

    showLeft() {
      return this.isCollapse ? "left-hide" : "left-show";
    },
    showMenu() {
      this.isCollapse = false;
    }
  },
  created: function() {
    console.log(this.menuData);
  },
  updated: function() {
    this.leftState = this.showLeft();
  }
};
</script>