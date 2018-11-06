<template>
 <div class="about-container">
   <el-tabs v-model="activeName" type="border-card">
     <el-tab-pane label="实验室概况" name="first">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

     </el-tab-pane>
     <el-tab-pane label="地理位置" name="second">
       a
     </el-tab-pane>
   </el-tabs>
 </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      activeName: this.$route.query.activeName || 'first',
      aboutText: [
        `PLACEHOLDER`
      ]
    }
  }
}
</script>

<style scoped>
.about-container {
  margin: 1rem 2rem;
}
</style>
