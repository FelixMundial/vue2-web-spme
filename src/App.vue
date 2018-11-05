<template>
  <div id="app">
    <div class="app-header">
      <el-row class="app-header-el-row">
        <el-col :span="2"><div class="app-header-logo-area">
          <router-link to="/" @click="resetMenu">
            <img class="app-header-logo" src="./assets/logo.png">
          </router-link>
        </div>
        </el-col>
        <el-col :span="22">
          <div class="app-header-options">
            <ul>
              <li class="app-header-options-search">
                <el-input placeholder="请输入内容" size="medium" prefix-icon="el-icon-search" clearable autosize
                          v-model="searchedText">
                </el-input>
              </li>
              <li class="nav-separator">|</li>
              <li><router-link to="about">
                <i class="el-icon-setting"></i> 实验室管理
              </router-link></li>
              <li class="nav-separator">|</li>
              <li><router-link to="about">
                <i class="el-icon-question"></i>
                <el-dropdown>
                  <span class="el-dropdown-link">
                     Contact Us<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                    <el-dropdown-item><i class="el-icon-message"></i> cesoygf@sysu.edu.cn</el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-phone-outline"></i> (020) 84110953</el-dropdown-item>
                    <el-dropdown-item><i class="el-icon-location-outline"></i> Find Us here!</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </router-link></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-menu class="app-menu" mode="horizontal" unique-opened
      :default-active="activeMenuIndex" @select="handleSelect"
      background-color="#2F4F4F" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/">实验室概况</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">科研成果</template>
        <el-menu-item index="2-1">论文与专利概况</el-menu-item>
        <el-menu-item index="2-2">2018</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">研究方向分类</template>
          <el-menu-item index="2-3-1">固相微萃取技术</el-menu-item>
          <el-menu-item index="2-3-2">环境分析化学</el-menu-item>
          <el-menu-item index="2-3-3">材料分析化学</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">实验室成员</template>
        <el-menu-item index="3-1">
          <router-link to="members">欧阳钢锋教授</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">朱芳教授</el-menu-item>
        <el-menu-item index="3-3">副研究员与博士后</el-menu-item>
        <el-menu-item index="3-4">全日制在读博士生</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" class="extech">
        <router-link to="/extech">ExTech 2018 Guangzhou</router-link>
      </el-menu-item>
      <el-menu-item index="5" disabled>
        <router-link to="/404">SPME技术研讨会</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="about"><i class="el-icon-info"></i> About Us</router-link>
      </el-menu-item>
    </el-menu>

    <div class="app-content">
      <keep-alive><router-view/></keep-alive>
    </div>

    <div class="app-footer">
      <el-row class="app-footer-el-row">
        <el-col :span="8"><div class="app-footer-left">
          <a href="http://www.xmol.com/group/spme" target="_blank">
            <img src="./assets/xmol.png" style="width: 20%; height: 20%"/></a>
        </div></el-col>
        <el-col :span="8"><div class="app-footer-middle">
          <p>© Prof. Ouyang's SPME lab 2018 </p>
        </div></el-col>
        <el-col :span="8"><div class="app-footer-right">
          <router-link to="about">
            <i class="el-icon-setting"></i> 内容管理
          </router-link>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeMenuIndex: '1',
      searchedText: '',
      isAdmin: false,
      visible: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    resetMenu () {
      this.activeMenuIndex = '1'
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
}
/* http://meyerweb.com/eric/tools/css/reset/
 v2.0 | 20110126
 License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-size: 1em !important;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #fff;
}
.app-header {
  padding-top: 20px;
  background: #2F4F4F;
  color: azure;
  height: 80px;
  line-height: 65px;
  width: 100%;
}
.app-header a {
  color: lightgreen;
}
.app-header-logo {
  /*float: left;*/
  width: 50px;
  margin-left: 1em;
}
.app-header-options {
  float: right;
  margin-right: 1.2rem;
}
.app-header-options li {
  cursor: pointer;
}
.nav-separator {
  padding: 0 10px;
}
.el-dropdown-link {
  color: beige;
  font-family: Verdana,sans-serif;
  font-size: 1rem;
  padding-left: .3rem;
}
.el-dropdown-menu {
  font-family: Verdana,sans-serif;
}

.app-menu {
  padding-left: 1rem;
}
.extech {
  font-family: Verdana,sans-serif;
  font-weight: bold;
}
.app-content {
  min-height: 600px;
}

.app-footer {
  background: lightgray;
  text-align: center;
  height: 60px;
  line-height: 60px;
  width: 100%;
  font-family: Verdana,sans-serif;
}
.app-footer a {
  color: black;
}
.app-footer-left {
  background: beige;
}
.app-footer-right {
  background: lightgreen;
}
</style>
