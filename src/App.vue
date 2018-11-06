<template>
  <div id="app">
    <div class="app-header">
      <el-row type="flex" justify="space-between" class="app-header-el-row">
        <el-col :span="2">
          <div class="app-header-logo-area">
            <router-link :to="{path:'/', query: {activeMenuIndex: 1}}">
              <img class="app-header-logo" src="./assets/logo.png">
            </router-link>
          </div>
        </el-col>
        <el-col span="22">
          <el-row type="flex" justify="end">
            <el-col :span="4" class="app-header-options-search">
              <el-input placeholder="请输入内容" size="medium" prefix-icon="el-icon-search" clearable autosize
                        v-model="searchedText">
              </el-input>
            </el-col>
            <el-col :span="4">
              <router-link to="about">
                <i class="el-icon-setting"></i><span v-show="visibleResponsively"> 实验室管理</span>
              </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="about">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-question"></i>
                    <span v-show="visibleResponsively"> Contact Us</span><i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown" class="el-dropdown-menu">
                    <el-dropdown-item><i class="el-icon-message"></i> cesoygf@sysu.edu.cn</el-dropdown-item>
                    <el-dropdown-item divided><i class="el-icon-phone-outline"></i> (020) 84110953</el-dropdown-item>
                    <el-dropdown-item divided>
                      <router-link :to="{path:'/about', query: {activeName: 'second', activeMenuIndex: 6}}">
                        <i class="el-icon-location-outline"></i> Find Us here!
                      </router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </router-link>
            </el-col>
          </el-row>
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
        <el-menu-item index="2-2"><router-link :to="{path:'/publications', query: {activeName: 'second'}}">2018</router-link></el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">研究领域概述</template>
          <el-menu-item index="2-3-1">固相微萃取技术</el-menu-item>
          <el-menu-item index="2-3-2">环境分析化学</el-menu-item>
          <el-menu-item index="2-3-3">材料分析化学</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">实验室成员</template>
        <el-menu-item index="3-1">
          <router-link :to="{path:'/members', query: {activeName: 'first'}}">欧阳钢锋教授</router-link>
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
      visibleResponsively: true,
      activeMenuIndex: this.$route.query.activeMenuIndex || '1',
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
  },
  mounted () {
    let width = document.documentElement.offsetWidth || document.body.offsetWidth
    if (width < 1000) {
      this.visibleResponsively = false
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
