<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <router-link to="/">
          <img class="app-header-logo" src="./assets/logo.png">
        </router-link>
        <div class="app-header-nav">
          <ul class="app-header-nav-list">
            <li>登录</li>
            <li class="nav-separator">|</li>
            <li>注册</li>
            <li class="nav-separator">|</li>
            <li><router-link to="about">关于</router-link></li>
            <li class="nav-separator">|</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive><router-view/></keep-alive>
    </div>
    <div class="app-footer">
      <p>© Prof. Ouyang's SPME lab 2018 </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Verdana, sans-serif;
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
  background: #f0f2f5;
  font-size: 16px;
}
.app-header {
  background: darkslategrey;
  color: azure;
  height: 100px;
  line-height: 100px;
  width: 100%;
  margin-bottom: 30px;
}
.app-header-logo {
  float: left;
  width: 50px;
  margin: 20px;
}
.app-header-inner {
  width: 1400px;
  margin: 0 auto;
}
.app-header-nav {
  float: right;
}
.app-header-nav ul {
  overflow: hidden;
}
.app-header-nav li {
  cursor: pointer;
  float: left;
}
.nav-separator {
  padding: 0 10px;
}
.app-footer {
  text-align: center;
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: lightgray;
  margin-top: 30px;
}
</style>
