<script setup>
import Header from "./components/Header.vue";
import Aside from "./components/Aside.vue";
</script>

<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
<!--          <p>-->
<!--            &lt;!&ndash;使用 router-link 组件进行导航 &ndash;&gt;-->
<!--            &lt;!&ndash;通过传递 `to` 来指定链接 &ndash;&gt;-->
<!--            &lt;!&ndash;`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签&ndash;&gt;-->
<!--            <router-link to="/">Go to Home</router-link>-->
<!--            <router-link to="/about">Go to About</router-link>-->
<!--          </p>-->
          <Aside></Aside>
        </el-aside>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
