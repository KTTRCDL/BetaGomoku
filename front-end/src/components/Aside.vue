<template>
  <el-scrollbar>
    <el-menu background-color="#242424" default-active="/" router>
      <el-menu-item index="/">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <span>About</span>
      </el-menu-item>
      <el-menu-item index="/img_cls">
        <el-icon>
          <View/>
        </el-icon>
        <span>Image Classification</span>
      </el-menu-item>
      <el-menu-item index="/test">
        <el-icon>
          <CloseBold/>
        </el-icon>
        <span>Test View</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import {CloseBold, HomeFilled, View} from "@element-plus/icons-vue";

export default {
  name: "Aside",
  components: {CloseBold, HomeFilled, View},
  data() {
    return {
      use_router: true,
    }
  },
}
</script>

<style scoped>
</style>