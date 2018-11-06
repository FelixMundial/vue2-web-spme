<template>
  <div class="members-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="欧阳钢锋教授" name="first">
        <el-card class="members-intro-card">
          <div slot="header" class="clearfix">
            <span>欧阳钢锋教授</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <i class="el-icon-message"></i> 联系方式 | Contact
            </el-button>
          </div>
          <div class="members-intro">
            <el-row>
              <el-col :span="8">
                <img src="../assets/xmol.png"/>
              </el-col>
              <el-col :span="16">
                {{'列表内容 ' + o }}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="朱芳教授" name="second"></el-tab-pane>
      <el-tab-pane label="副研究员与博士后" name="third"></el-tab-pane>
      <el-tab-pane label="全日制在读博士生" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Members',
  data () {
    return {
      activeName: this.$route.query.activeName || 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.members-container {
  margin: 1rem 2rem;
}
.members-intro-card {
  margin: 1rem 2rem;
}
</style>
