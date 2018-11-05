<template>
  <div class="welcome">
    <template>
      <el-carousel :interval="4000" type="card" height="600px" class="welcome-slides">
        <el-carousel-item v-for="item in imgLibrary" :key="item">
          <transition name="fade">
            <h1 class="welcome-slides-title" v-show="slidesTitleIsEnabled">{{ item.title }}</h1>
          </transition>
          <img class="welcome-slides-img" :src="item.src" @click="toggleSlidesTitle"/>
        </el-carousel-item>
      </el-carousel>
    </template>
    <!--<h1>{{ msg }}</h1>-->
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      slidesTitleIsEnabled: false,
      imgLibrary: [
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试1',
          href: '/about'
        },
        {
          src: require('../assets/nature.jpg'),
          title: '测试2',
          href: '/about'
        },
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试3',
          href: '/about'
        }
      ]
    }
  },
  methods: {
    toggleSlidesTitle () {
      this.slidesTitleIsEnabled = !this.slidesTitleIsEnabled
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.welcome-slides {
  margin-top: 20px;
}
.welcome-slides-title {
  background: beige;
  padding: 10px;
}
.el-carousel__item h1 {
  color: #475669;
  font-size: 2rem;
  opacity: 0.75;
  z-index: 99;
  /*line-height: 50px;*/
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.fade-enter-active, .fade-leave-active {
  transition-delay: 1s;
  opacity: 1;
}
.fade-enter, .fade-leave-active {
  transition-delay: 1s;
  opacity: 0
}
</style>
