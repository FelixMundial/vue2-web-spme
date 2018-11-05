<template>
  <div class="extech-container">
    <el-row>
      <el-button class="extech-header" type="success" plain>
        报名入口 <i class="el-icon-success"></i> Register Now</el-button>
      <el-button class="extech-header" type="info" plain>
        关于ExTech <i class="el-icon-question"></i> About ExTech</el-button>
    </el-row>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in imgLibrary" :key="item">
        <img :src="item.src"/>
        <h1 class="swiper-slide-title">{{ item.title }}</h1>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'ExTech',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
          clickableClass: 'swiper-bullet'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        autoplay: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        loopAdditionalSlides: 3,
        autoHeight: true
      },
      imgLibrary: [
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试1'
        },
        {
          src: require('../assets/nature.jpg'),
          title: '测试2'
        },
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试3'
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped>
.extech-container {
  background: lightgray;
}
.extech-header {
  margin: 1rem;
}
.swiper-container {
  height: 600px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.swiper-bullet {
  border-radius: 8px;
  opacity: .5;
  background: azure;
  padding: .1rem .5rem;
}
</style>
