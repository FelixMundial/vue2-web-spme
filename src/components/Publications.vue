<template>
  <div class="pubs-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Academic Intro | 研究领域概述" name="first">
        <div></div>
      </el-tab-pane>
      <el-tab-pane label="Publications in 2018" name="second">
        <el-card class="members-intro-card">
          <div slot="header" class="clearfix">
            <span>欧阳钢锋教授</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <i class="el-icon-message"></i> 联系方式 | Contact
            </el-button>
          </div>
          <div class="publications-list">
            <el-row>
              <el-col :span="8">
                <img src="../assets/xmol.png"/>
              </el-col>
              <el-col :span="16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="members-intro-card">
          <div slot="header" class="clearfix">
            <span>欧阳钢锋教授</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <i class="el-icon-message"></i> 联系方式 | Contact
            </el-button>
          </div>
          <div class="publications-list">
            <el-row>
              <el-col :span="8">
                <img src="../assets/xmol.png"/>
              </el-col>
              <el-col :span="16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="Publications | 论文与专利" name="third">
        <el-row :gutter="20">
          <el-col :span="8" v-for="o in 3" :key="o">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/xmol.png">
              <div style="padding: 14px;">
                <span>文章一标题</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Publications',
  data () {
    return {
      activeName: this.$route.query.activeName || 'first',
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
.pubs-container {
  margin: 1rem 2rem;
}

.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
